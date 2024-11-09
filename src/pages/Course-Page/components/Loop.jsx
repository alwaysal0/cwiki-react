import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../../general components/ObserverFunction";

function Loop() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    return (
        <>
        <div id="loop-router">
            <p className="name-of-lesson">{t("introduction")}</p>
            <p ref={setObservedElementRef1} className={`part-of-lesson ${isInView1 ? "in-view" : ""}`}>{t("loop-router")}</p>
            <div className="information-of-lesson">

            </div>
        </div>
        </>
    )
}

export default Loop
