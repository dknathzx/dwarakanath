import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import "./Videos.css";

const videos = [
  { id: 1, title: "Tokenizer", date: "LLM from Scratch", src: "/videos/TokenizerScene.mp4" },
  { id: 2, title: "Block Size", date: "LLM from Scratch", src: "/videos/BlockSizeScene.mp4" },
  { id: 3, title: "Embedding", date: "LLM from Scratch", src: "/videos/EmbeddingScene.mp4" },
  { id: 4, title: "Attention", date: "LLM from Scratch", src: "/videos/AttentionScene.mp4" },
  { id: 5, title: "Feedforward", date: "LLM from Scratch", src: "/videos/FeedForwardScene.mp4" },
  { id: 6, title: "Backpropagation", date: "LLM from Scratch", src: "/videos/BackpropScene.mp4" },
  { id: 7, title: "Output Loss", date: "LLM from Scratch", src: "/videos/OutputLossScene.mp4" },
  { id: 8, title: "Summary", date: "LLM from Scratch", src: "/videos/SummaryScene.mp4" },
];

const Videos = ({ open, onClose }) => {
  const swiperRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const updateVideos = (swiper) => {
    const slides = swiper.slides;
    if (!slides || !slides.length) return;
    slides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      if (!video) return;
      if (index === swiper.activeIndex) {
        const playVideo = () => {
          if (video.paused) video.play().catch(() => {});
          video.onended = () => {
            video.currentTime = 0;
            video.play().catch(() => {});
          };
        };
        if (video.readyState >= 3) {
          setTimeout(playVideo, 250);
        } else {
          video.addEventListener("canplay", function handler() {
            video.removeEventListener("canplay", handler);
            setTimeout(playVideo, 250);
          });
        }
      } else {
        if (!video.paused) video.pause();
      }
    });
  };

  if (!open) return null;

  return (
    <div className="vg-overlay">
      <div className="vg-close" onClick={onClose}>X</div>

      <div className="vg-header">
        <h1 className="vg-title">
          Watch It <span className="vg-special">Think</span>
        </h1>
        <p className="vg-sub">LLM from scratch — drag or two finger scroll to navigate, click to watch</p>
      </div>

      <div className="vg-slider-wrap">
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={90}
          speed={1000}
          allowTouchMove={true}
          grabCursor={true}
          mousewheel={{ forceToAxis: true }}
          modules={[Mousewheel]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateVideos(swiper);
          }}
          onSlideChange={(swiper) => updateVideos(swiper)}
          breakpoints={{
            0: { spaceBetween: 40 },
            575: { spaceBetween: 90 },
          }}
          className="video-slider"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="video-slider__slide" onClick={() => setActiveVideo(video)}>
              <div className="video-slider__video-box">
                <video
                  src={video.src}
                  className="video-slider__video"
                  playsInline
                  muted
                />
              </div>
              <div className="video-slider__info-box">
                <h2 className="video-slider__info-title">{video.title}</h2>
                <p className="video-slider__info-text">{video.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activeVideo && (
        <div className="vg-modal" onClick={() => setActiveVideo(null)}>
          <div className="vg-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="vg-modal-close" onClick={() => setActiveVideo(null)}>X</div>
            <video src={activeVideo.src} className="vg-modal-video" controls autoPlay />
            <h2 className="vg-modal-title">{activeVideo.title}</h2>
          </div>
        </div>
      )}

    </div>
  );
};

export default Videos;