import { useRef, useEffect } from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import '../styles/MainBox.css'
import { Link } from 'react-router-dom';
import useObserver from "../../../general components/ObserverFunction";

function MainBox() {
  const [isInView1, setInView1] = useState(false);
  const [isInView2, setInView2] = useState(false);
  const [isInView3, setInView3] = useState(false);
  const [isInView4, setInView4] = useState(false);
  const [isInView5, setInView5] = useState(false);
  const [isInView6, setInView6] = useState(false);
  const [isInView7, setInView7] = useState(false);
  const [isInView8, setInView8] = useState(false);
  const [isInView9, setInView9] = useState(false);
  const setObservedElementRef1 = useObserver(setInView1);
  const setObservedElementRef2 = useObserver(setInView2);
  const setObservedElementRef3 = useObserver(setInView3);
  const setObservedElementRef4 = useObserver(setInView4);
  const setObservedElementRef5 = useObserver(setInView5);
  const setObservedElementRef6 = useObserver(setInView6);
  const setObservedElementRef7 = useObserver(setInView7);
  const setObservedElementRef8 = useObserver(setInView8);
  const setObservedElementRef9 = useObserver(setInView9);

  // translator
  const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // функция для смены языка
  };
  return (
    <>
    <div id='hole-main-box'>
      <div id="left-text">
        <p ref={setObservedElementRef1} className={isInView1 ? 'in-view' : ''} id="c-easy"><span>С</span>{t("its-easy")}</p>
        <p id="rest-of-text"><span ref={setObservedElementRef2} className={isInView2 ? 'in-view' : ''} id="rest-of-text-first">{t("its-not-scary")}</span>
        <br /><span ref={setObservedElementRef3} className={isInView3 ? 'in-view' : ''} id="rest-of-text-last">{t("our-guide")}</span></p>
        {/* <a ref={setObservedElementRef} id="start-button" href="./start-page/start.html"><Link to="/start">START</Link></a> */}
        <Link to ="/start" id='start-button' ref={setObservedElementRef4} className={isInView4 ? 'in-view' : ''}>START</Link>
      </div>
      <div id="right-images">
        <p ref={setObservedElementRef5} className={isInView5 ? 'in-view' : ''} id="will-find">{t("you`ll-find")}</p>
        <div id="higher-images">
            <div ref={setObservedElementRef6} className={`higher-boxes ${isInView6 ? "in-view" : ""}`} id="first-box">
                <img src="../Images/code.png" alt="code" />
                <p>{t("online-code-editor")}</p>
            </div>
            <div ref={setObservedElementRef7} className={`higher-boxes second-box ${isInView7 ? "in-view" : ""}`} data-delay="100" id="second-box">
                <img src="../Images/library.png" alt="library" />
                <p>{t("brief-overview-of-libraries")}</p>
            </div>
        </div>
        <div id="lower-images">
            <div ref={setObservedElementRef8} className={`lower-boxes ${isInView8 ? "in-view" : ""}`} data-delay="200" id="third-box">
                <img src="../Images/human.png" alt="human" />
                <p>{t("even-beginners-will-understand")}</p>
            </div>
            <div ref={setObservedElementRef9} className={`lower-boxes ${isInView9 ? "in-view" : ""}`} data-delay="300" id="four-box">
                <img src="../Images/terminal.png" alt="terminal" />
                <p>{t("online-compiler")}</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainBox
