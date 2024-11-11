import React from "react";
import MainBox from './components/MainBox'
import InformationAboutC from "./components/informationAboutC";
import Minibox from "./components/Minibox";
import FirstProgram from "./components/FirstProgram";
import './Main-Page.css'
import { useState, useEffect, useRef, useCallback } from 'react';

// function MainPage() {
//     const ScrollImage = () => {
//         const frames = 120;
//         const framePath = "./c-animation2/frame"; // Путь к кадрам
//         const frameExtension = ".png"; // Расширение файлов
      
//         const changingFrame = useRef(null); // Реф для элемента с фоновым изображением
//         const [frameImages, setFrameImages] = useState([]);
//         const [currentFrame, setCurrentFrame] = useState(0);
      
//         // Функция предзагрузки изображений
//         const preloadFrames = useCallback(() => {
//           const images = [];
//           for (let i = 1; i <= frames; i++) {
//             const img = new Image();
//             img.src = `${framePath}${i}${frameExtension}`;
//             images.push(img);
//           }
//           setFrameImages(images);
//         }, [frames, framePath, frameExtension]);
      
//         // Функция для изменения фона в зависимости от прокрутки
//         const changeFrame = useCallback(() => {
//           const scrollPosition = window.scrollY;
//           const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//           const frameIndex = Math.min(frames - 1, Math.floor(scrollPosition / 15));
      
//           if (frameImages[frameIndex] && frameIndex !== currentFrame) {
//             setCurrentFrame(frameIndex);
//             if (changingFrame.current) {
//               changingFrame.current.style.backgroundImage = `url('${frameImages[frameIndex].src}')`;
//             }
//           }
//         }, [frameImages, currentFrame, frames]);
      
//         // Эффект для предзагрузки изображений и привязки обработчика прокрутки
//         useEffect(() => {
//           preloadFrames(); // Предзагрузка кадров
//           const handleScroll = () => requestAnimationFrame(changeFrame);
      
//           window.addEventListener("scroll", handleScroll);
      
//           return () => {
//             window.removeEventListener("scroll", handleScroll);
//           };
//         }, [preloadFrames, changeFrame]);
//     }
//     return(
//         <>
//         <div id="hole-page">
//             <div id="Main-box">
//                 <MainBox />
//             </div>
//             <div id="information-about-C" ref={changingFrame}>
//                 <InformationAboutC />
//             </div> 
//             <div id="uWillNeed">
//                 <Minibox />
//             </div>
//             <div id="first-Program">
//                 <FirstProgram />
//             </div>
//         </div>
//         </>
//     )
// }

// Компонент для скроллера изображений
const ScrollImage = () => {
    const frames = 120;
    const framePath = './c-animation2/frame'; // Путь к кадрам
    const frameExtension = '.png'; // Расширение файлов
  
    const changingFrame = useRef(null); // Реф для элемента с фоновым изображением
    const [frameImages, setFrameImages] = useState([]);
    const [currentFrame, setCurrentFrame] = useState(0);
  
    // Функция предзагрузки изображений
    const preloadFrames = useCallback(() => {
      const images = [];
      for (let i = 1; i <= frames; i++) {
        const img = new Image();
        img.src = `${framePath}${i}${frameExtension}`;
        img.onload = () => {
          images.push(img);
          if (images.length === frames) {
            setFrameImages(images);
          }
        };
      }
    }, [frames, framePath, frameExtension]);
  
    // Функция для изменения фона в зависимости от прокрутки
    const changeFrame = useCallback(() => {
      if (frameImages.length === 0) return; // Если изображения ещё не загружены
  
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const frameIndex = Math.min(frames - 1, Math.floor((scrollPosition / maxScroll) * frames));
  
      if (frameImages[frameIndex] && frameIndex !== currentFrame) {
        setCurrentFrame(frameIndex);
        if (changingFrame.current) {
          changingFrame.current.style.backgroundImage = `url('${frameImages[frameIndex].src}')`;
        }
      }
    }, [frameImages, currentFrame, frames]);
  
    // Эффект для предзагрузки изображений и привязки обработчика прокрутки
    useEffect(() => {
      preloadFrames(); // Предзагрузка кадров
      const handleScroll = () => requestAnimationFrame(changeFrame); // Используем requestAnimationFrame для плавности
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [preloadFrames, changeFrame]);
  
    return (
      <div
        ref={changingFrame}
        style={{
          width: '100%',
          height: '100vh', // Высота экрана
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.2s ease-in-out',
        }}
      >
        {/* Ваши другие элементы или текст внутри контейнера */}
      </div>
    );
  };
  
  function MainPage() {
    return (
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
          {/* Вставка компонента ScrollImage */}
          <ScrollImage />
        </div>
      </>
    );
}
export default MainPage
