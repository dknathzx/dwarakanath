import React, { useState } from "react";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import HireMe from "./components/HireMe/HireMe";
import Intro from "./components/intro/intro";
import Contact from "./components/Contact/Contact";
import PageTransition from "./components/PageTransition/PageTransition";
import Fourth from "./components/Fourth/Fourth";
import Home from "./components/Home/Home";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Fifth from "./components/Fifth/Fifth";
import Six from "./components/Six/Six";
import Seven from "./components/Seven/Seven";
import Eight from "./components/Eight/Eight";
import Nine from "./components/Nine/Nine";
import Last from "./components/Last/Last";
import '../src/App.css';
import '../src/responsive.css';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div>
      <Contact />
      <CookieBanner />
      <HireMe />
      {!introComplete && (
        <Intro onComplete={() => setIntroComplete(true)} />
      )}
      {introComplete && (
        <div>
          <PageTransition><Home /></PageTransition>
          <PageTransition><Second /></PageTransition>
          <PageTransition><Third /></PageTransition>
          <PageTransition><Fourth /></PageTransition>
          <PageTransition><Fifth /></PageTransition>
          <PageTransition><Six /></PageTransition>
          <PageTransition><Seven /></PageTransition>
          <PageTransition><Eight /></PageTransition>
          <PageTransition><Nine /></PageTransition>
          <PageTransition><Last /></PageTransition>
        </div>
      )}
    </div>
  );
};

export default App;