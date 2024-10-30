import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import LetsStart from "./components/lets-start";
import Pluses from "./components/Pluses";
import HelloWorld from "./components/HelloWorld";
import './StartPage.css'

function StartPage(){
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const observedElementsRef = useRef([]); // Инициализация массива рефов
    const timeoutsRef = useRef([]); // хранит таймауты каждого ЭЛЕМЕНТА в массиве
    return(
        <>
        <div id="lets-start-page"><LetsStart /></div>
        <div id="pluses-page"><Pluses/></div>
        <div id="hello-world-page"><HelloWorld /></div>
        </>
    )
}

export default StartPage
