import React from "react";
import "./eight.css";
export const Eight = () => {
  return (<div className="eight">
    <div className="eight-bloc"></div>
    <p className="art">machine</p>
    <div className="art-des">
      Two years. <br />
Two platforms. <br />
One mission — <br />
make machines <br />
think better.
    </div>
 <div className="com">
  Databricks, LangChain, OpenAI GPT-4, <br />
  Streamlit, FastAPI and many more <br />
  <b>@dknathzx - GitHub</b>
</div>
    <div class="testimonials-section">
    <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
    <input type="radio" name="slider" title="slide2" class="slider__nav"/>
    <input type="radio" name="slider" title="slide3" class="slider__nav"/>
    <input type="radio" name="slider" title="slide4" class="slider__nav"/>
    <input type="radio" name="slider" title="slide5" class="slider__nav"/>
  <div class="slider__inner">
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">Built a production ML platform processing 961,531 
    records with 7 algorithms — achieving 99.21% 
    accuracy with Random Forest at KONE Elevator India.</p>
      <h2 class="slider__caption">KONE — ML Platform</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">Founded LOGEAUM — an AI mental health platform 
    achieving 94.44% emotion recognition accuracy 
    across 18 test scenarios using GPT-4 and custom NLP.</p>
      <h2 class="slider__caption">LOGEAUM — AI Startup</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">Engineered an agentic AI chatbot integrated with 
    ServiceNow ITSM — fully on-premise, zero external 
    API dependency, built with LangChain and Ollama.</p>
      <h2 class="slider__caption">KONE — Agentic AI Chatbot</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">Processed 657,595+ text samples across 12+ sources 
    — building a high quality NLP corpus detecting 
    15+ mental health condition categories.</p>
      <h2 class="slider__caption">LOGEAUM — NLP Pipeline</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">Open to Data Scientist, Data Analyst and Data 
    Engineer roles globally — available for 
    immediate joining worldwide.</p>
      <h2 class="slider__caption">Dwarakanath K Dinesh</h2>
    </div>
  </div>
</div>
  </div>
  );
};
export default Eight;