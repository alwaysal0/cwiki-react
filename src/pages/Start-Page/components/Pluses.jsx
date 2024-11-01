import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import '../styles/Pluses.css'
import useObserver from "../../../general components/ObserverFunction.jsx";
import speed from '../img/speed.svg'
import code from '../img/code.svg'
import devices from '../img/devices.svg'
import recommended from '../img/recommended.svg'
import storage from '../img/storage.svg'

function Pluses() {

    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const [isInView2, setInView2] = useState(false);
    const [isInView3, setInView3] = useState(false);
    const [isInView4, setInView4] = useState(false);
    const [isInView5, setInView5] = useState(false);
    const [isInView6, setInView6] = useState(false);
    const setObservedElementRef = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);
    const setObservedElementRef3 = useObserver(setInView3);
    const setObservedElementRef4 = useObserver(setInView4);
    const setObservedElementRef5 = useObserver(setInView5);
    const setObservedElementRef6 = useObserver(setInView6);

    return (
        <>
        <div id="pluses-div">
            <div id="name-of-pluses" ref={setObservedElementRef} className={isInView1 ? 'in-view' : ''}>{t("advantages")}<span>C</span></div>
            <div id="line-of-pluses">
                <div id="plus1" className={`pluses ${isInView2 ? 'in-view' : ''}`} ref={setObservedElementRef2} data-delay="500">
                    <img src={speed} alt="speed" />
                    <p className="heads">{t("head-of-high-perfomance")}</p>
                    <p>{t("high-perfomance")}</p>
                </div>
                <div id="plus2" className={`pluses ${isInView3 ? 'in-view' : ''}`} ref={setObservedElementRef3} data-delay="250">
                    <img src={storage} alt="storage" />
                    <p className="heads">{t("head-of-memory-control")}</p>
                    <p>{t("memory-control")}</p>
                </div>
                <div id="plus3" className={`pluses ${isInView4 ? 'in-view' : ''}`} ref={setObservedElementRef4}>
                    <img src={devices} alt="devices" />
                    <p className="heads">{t("head-of-portability")}</p>
                    <p>{t("portability")}</p>
                </div>
                <div id="plus4" className={`pluses ${isInView5 ? 'in-view' : ''}`} ref={setObservedElementRef5} data-delay="250">
                    <img src={recommended} alt="popularity" />
                    <p className="heads">{t("head-of-wide-support-and-popularity")}</p>
                    <p>{t("wide-support-and-popularity")}</p>
                </div>
                <div id="plus5" className={`pluses ${isInView6 ? 'in-view' : ''}`} ref={setObservedElementRef6} data-delay="500">
                    <img src={code} alt="simplicity" />
                    <p className="heads">{t("head-of-simplicity-and-structure")}</p>
                    <p>{t("simplicity-and-structure")}</p>
                </div>
            </div>
            <div id="features-of-pluses">{t("features1")}<span>C</span>{t("features2")}</div>
        </div>
        </>
    )
}

export default Pluses
