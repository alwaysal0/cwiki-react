import React from "react";
import './styles/LibrariesPage.css'
import GistEmbed from "../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../general components/ObserverFunction";

function LibrariesPage() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const setObservedElementRef = useObserver(setInView1);
    return(
    <>
    <div id="libraries">
        <div id="standart-libraries">
            <p id="standart-libraries-head" ref={setObservedElementRef} className={isInView1 ? 'in-view' : ''}>{t("standart-libraries")}<span>C</span></p>
            <div id="standart-libraries-main-box">
                <div id="libraries-left">
                    <ul>
                        <li className="list">stdio.h</li>
                        <li className="list"></li>
                        <li className="list"></li>
                        <li className="list"></li>
                        <li className="list"></li>
                    </ul>
                </div>
                <div id="libraries-right">

                </div>
            </div>
        </div>
        {/* <GistEmbed gistId="3666817e35b24f904c918d59383db5dc" /> */}
    </div>
    </>
    )
}

export default LibrariesPage
