import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import '../styles/Lets-start.css'
import denis from "../img/dennis2.png"
import useObserver from "../../../general components/ObserverFunction.jsx";

function LetsStart() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView3, setInView3] = useState(false);
    const [isInView4, setInView4] = useState(false);
    const [isInView5, setInView5] = useState(false);
    const [isInView6, setInView6] = useState(false);
    const setObservedElementRef3 = useObserver(setInView3);
    const setObservedElementRef4 = useObserver(setInView4);
    const setObservedElementRef5 = useObserver(setInView5);
    const setObservedElementRef6 = useObserver(setInView6);

    return(
        <>
        <div id="lets-start">
            <div id="circle-top-left"></div>
            <div id="circle-top-right"></div>
            <div id="main-text">
                <div ref={setObservedElementRef3} id="lets-get-started" className={isInView3 ? 'in-view' : ''} data-delay='250'>{t("lets-get-started")}</div>
            </div>
            <div id="history-denis">   
                <div ref={setObservedElementRef4} id="infoC" className={isInView4 ? 'in-view' : ''} data-delay='500'>
                    <p id="history-origin">{t("history&origin")}</p>
                    <p ref={setObservedElementRef5} id="history" className={isInView5 ? 'in-view' : ''} data-delay='800'>&nbsp;{t("history")}<br/>&nbsp;<span>{t("history2")}</span></p>
                </div>
                <div ref={setObservedElementRef6} id="denis" className={isInView6 ? 'in-view' : ''} data-delay='1100'>
                    <img src={denis} alt="" />
                    <code id="dennis-typewrite"><span id="char">char</span><span id="brackets">[]</span>= <span id="dennis-span">"Dennis Ritchie"</span></code>
                </div>
            </div>
            <div id="circle-dennis" data-delay='1100'></div>
        </div>
        </>
    )
}

export default LetsStart
