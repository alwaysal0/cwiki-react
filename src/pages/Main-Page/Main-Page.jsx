import React from "react";
import { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import MainBox from './components/MainBox'
import InformationAboutC from "./components/informationAboutC";
import Minibox from "./components/Minibox";
import FirstProgram from "./components/FirstProgram";
import './Main-Page.css'

function MainPage() {
//     // SCROLL IMAGE
// const frames = 120;
// const framePath = "./c-animation2/frame";
// const frameExtension = ".png"; 
// // const changingFrame = document.querySelector("#information-about-C"); 
// const changingFrame = useRef(null);

// // Массив для хранения загруженных изображений
// const frameImages = [];

// // функция предзагрузки
// function preloadFrames() {
//     for (let i = 1; i <= frames; i++) {
//         const img = new Image();
//         img.src = `${framePath}${i}${frameExtension}`;
//         frameImages.push(img); 
//     }
// }

// function changeFrame() {
//     const scrollPosition = window.scrollY;
//     // console.log(scrollPosition); SCROOOOOOLLL PX
//     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollFraction = scrollPosition / maxScroll;
//     const frameIndex = Math.min(frames - 1, Math.floor(scrollPosition / 15));

//     changingFrame.style.backgroundImage = `url('${frameImages[frameIndex].src}')`;
// }

// window.addEventListener("scroll", changeFrame);

// window.addEventListener("load", () => {
//     preloadFrames();  // Загрузка всех кадров
//     changeFrame();    // Показываем первый кадр
// });


    return(
        <>
        <div id="hole-page">
            <div id="Main-box">
                <MainBox />
            </div>
            <div id="information-about-C">
                <InformationAboutC />
            </div> 
            <div id="uWillNeed">
                <Minibox />
            </div>
            <div id="first-Program">
                <FirstProgram />
            </div>
        </div>
        </>
    )
}

export default MainPage
