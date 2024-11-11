import React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next'
import '../styles/Minibox.css'
import useObserver from "../../../general components/ObserverFunction";

function Minibox() {

  const [isInView1, setInView1] = useState(false);
  const setObservedElementRef1 = useObserver(setInView1);

  // translator
  const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // функция для смены языка
  };
  return(
    <>
    <div ref={setObservedElementRef1} className={isInView1 ? 'in-view' : ''} id="minibox-with-icons">
        <p id="minibox-name">{t("what-you-need")}</p>
        <div id="obertkaForIcons">
            <div id="laptop">
                <img src="../Images/laptop.png" alt="laptop"/>
                <p>{t("pc-or-laptop")}</p>
            </div>
            <div id="prosloyka"></div>
            <div id="time">
                <img src="../Images/time.png" alt="time"/>
                <p>{t("a-lot-of-your-time")}<br/>{t("patience")}</p>
            </div>
            <div id="prosloyka"></div>
            <div id="smile">
                <img src="../Images/smile.png" alt="brain"/>
                <p>{t("positive-attitude")}</p>
            </div>
            <div id="prosloyka"></div>
            <div id="brain">
                <img src="../Images/brain.png" alt="brain"/>
                <p>{t("and-a-bit-of-brains")}</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Minibox