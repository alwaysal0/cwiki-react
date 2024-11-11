import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next'
import "../styles/InformationAboutC.css"
import useObserver from "../../../general components/ObserverFunction";

function InformationAboutC(){
  const [isInView1, setInView1] = useState(false);
  const [isInView2, setInView2] = useState(false);
  const [isInView3, setInView3] = useState(false);
  const setObservedElementRef1 = useObserver(setInView1);
  const setObservedElementRef2 = useObserver(setInView2);
  const setObservedElementRef3 = useObserver(setInView3);

  // translator
  const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // функция для смены языка
  };
    return(
    <>
        <div id="for-text">
            <p id="for-title"><span id="history-of-C">{t("history-of")}<span id="C">C</span></span></p>
                    <p id="for-text"><br /><br />&nbsp;&nbsp;<span ref={setObservedElementRef1} className={isInView1 ? 'in-view' : ''} id="first-part-of-text">{t("above-the-language")} C {t("first-part-of-text")}</span>
                    <br /><br />&nbsp;&nbsp;<span ref={setObservedElementRef2} className={isInView2 ? 'in-view' : ''} id="second-part-of-text">{t("second-part-of-text")}</span>
                    <br /><br />&nbsp;&nbsp;<span ref={setObservedElementRef3} className={isInView3 ? 'in-view' : ''} id="third-part-of-text">{t("third-part-of-text")}</span></p>
        </div>
    </>
    )
}

export default InformationAboutC