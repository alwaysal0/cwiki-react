import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import './styles/StartPage.css'
function StartPage(){
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const observedElementsRef = useRef([]); // Инициализация массива рефов

  // Функция для присвоения рефа каждому элементу
    const setObservedElementRef = (el) => {
    if (el && !observedElementsRef.current.includes(el)) {
        observedElementsRef.current.push(el);
    }
    };

    useEffect(() => {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
        });
    };

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Наблюдаем за каждым элементом из массива рефов
    observedElementsRef.current.forEach(element => {
        if (element) {
        observer.observe(element);
        }
    });

    return () => {
        // Останавливаем наблюдение при размонтировании компонента
        observedElementsRef.current.forEach(element => {
        if (element) {
            observer.unobserve(element);
        }
        });
    };
    }, []);
    return(
        <>
        <div id="lets-start">
            <div ref={setObservedElementRef} id="circle-test"></div>
            <div ref={setObservedElementRef} id="main-text">
                hello
            </div>
        </div>
        </>
    )
}

export default StartPage
