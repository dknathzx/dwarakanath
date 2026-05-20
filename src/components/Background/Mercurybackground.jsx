import React, { useRef, useEffect } from "react";
import "./Mercurybackground.css";

const MercuryBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const clickRef = useRef({ x: 0.5, y: 0.5, time: -10 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: 1.0 - e.clientY / window.innerHeight,
      };
    };

    const handleClick = (e) => {
      clickRef.current = {
        x: e.clientX / window.innerWidth,
        y: 1.0 - e.clientY / window.innerHeight,
        time: performance.now() / 1000,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const vertSrc = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `;

    const fragSrc = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_click;
      uniform float u_clickTime;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1,0)), u.x),
          mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 6; i++) {
          v += a * noise(p);
          p = p * 2.0 + vec2(1.7, 9.2);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 p = uv * aspect;
        vec2 m = u_mouse * aspect;

        float t = u_time * 0.3;

        float dist = length(p - m);
        float ripple = sin(dist * 18.0 - t * 3.0) * 0.04 * exp(-dist * 3.0);

        float timeSinceClick = u_time - u_clickTime;
        vec2 cp = u_click * aspect;
        float cdist = length(p - cp);
        float shockwave = 0.0;
        if (timeSinceClick < 2.0) {
          float wave = sin(cdist * 30.0 - timeSinceClick * 10.0);
          shockwave = wave * 0.06 * exp(-cdist * 4.0) * exp(-timeSinceClick * 2.0);
        }

        vec2 distorted = uv + ripple + shockwave;

        float n1 = fbm(distorted * 3.0 + t);
        float n2 = fbm(distorted * 3.0 - t + vec2(5.2, 1.3));
        float n3 = fbm(vec2(n1, n2) * 2.0 + t * 0.5);

        vec3 col1 = vec3(0.05, 0.05, 0.08);
        vec3 col2 = vec3(0.3, 0.35, 0.4);
        vec3 col3 = vec3(0.7, 0.75, 0.8);
        vec3 col4 = vec3(0.9, 0.92, 0.95);

        vec3 color = mix(col1, col2, n1);
        color = mix(color, col3, n2 * 0.6);
        color = mix(color, col4, n3 * 0.4);

        float spec = exp(-dist * 5.0) * 0.3;
        color += vec3(spec);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uClick = gl.getUniformLocation(prog, "u_click");
    const uClickTime = gl.getUniformLocation(prog, "u_clickTime");

    const render = (now) => {
      const t = now / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.uniform2f(uClick, clickRef.current.x, clickRef.current.y);
      gl.uniform1f(uClickTime, clickRef.current.time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="mercury-canvas" />;
};

export default MercuryBackground;