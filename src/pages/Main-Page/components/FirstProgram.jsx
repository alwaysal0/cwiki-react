import { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/FirstProgram.css'
import { Link } from 'react-router-dom';
import useObserver from '../../../general components/ObserverFunction';

function FirstProgram() {
  const [isInView1, setInView1] = useState(false);
  const [isInView2, setInView2] = useState(false);
  const [isInView3, setInView3] = useState(false);
  const [isInView4, setInView4] = useState(false);
  const [isInView5, setInView5] = useState(false);
  const setObservedElementRef1 = useObserver(setInView1);
  const setObservedElementRef2 = useObserver(setInView2);
  const setObservedElementRef3 = useObserver(setInView3);
  const setObservedElementRef4 = useObserver(setInView4);
  const setObservedElementRef5 = useObserver(setInView5);
  // translator
  const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // функция для смены языка
  };
  return (
    <>
      <div id="your-first-prog">
            <p id="first-prog">{t("hello-world")}<span id="C-second">&nbsp;C</span></p>
            <div ref={setObservedElementRef1} className={isInView1 ? 'in-view' : ''} id="hello-world">
                <a target="_blank" href="https://onlinegdb.com/chRZK0iZy"><img  src="../Images/helloworld.png" alt="helloworld" /></a>
                <p>{t("how-it-looks-like")}<br />{t("by-the-way")}</p>
            </div>
            <div id="gccAndConsole">
                <div ref={setObservedElementRef2} className={isInView2 ? 'in-view' : ''} data-delay='250' id="gcc">
                    <a target="_blank" href="https://onlinegdb.com/chRZK0iZy"><img  src="../Images/gcc.png" alt="gcc" /></a>
                    <p>{t("compiling-our-file")}<br /><span>{t("active")}</span></p>
                </div>
                <div ref={setObservedElementRef3} className={isInView3 ? 'in-view' : ''} data-delay='350' id="console">
                    <a target="_blank" href="https://onlinegdb.com/chRZK0iZy"><img  src="../Images/console.png" alt="helloworld" /></a>
                    <p>{t("execution-code")}<br /><span>{t("active")}</span></p>
                </div>
            </div>
            <p id="it-easy">{t("easy")}<br />{t("press")}<span id="start">&lt;START&gt;</span>{t("guide-below")}</p>
            <div ref={setObservedElementRef4} className={isInView4 ? 'in-view' : ''} id="arrow-bottom">
                <img src="../Images/arrow-bottom.png" alt="arrow-bottom" />
            </div>
            <div id="for-start-button"><Link ref={setObservedElementRef5} className={isInView5 ? 'in-view' : ''} id="start-button-second" to="/start">START</Link></div>
        </div>
    </>
  )
}

export default FirstProgram