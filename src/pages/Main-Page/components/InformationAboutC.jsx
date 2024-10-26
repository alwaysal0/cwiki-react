import React from "react";
import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next'
import "../styles/InformationAboutC.css"

function InformationAboutC(){
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
  // translator
  const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // функция для смены языка
  };
    return(
    <>
        <div id="for-text">
            <p id="for-title"><span id="history-of-C">{t("history-of")}<span id="C">C</span></span></p>
                    <p id="for-text"><br /><br />&nbsp;&nbsp;<span ref={setObservedElementRef} id="first-part-of-text">{t("above-the-language")} C {t("first-part-of-text")}</span>
                    <br /><br />&nbsp;&nbsp;<span ref={setObservedElementRef} id="second-part-of-text">{t("second-part-of-text")}</span>
                    <br /><br />&nbsp;&nbsp;<span ref={setObservedElementRef} id="third-part-of-text">{t("third-part-of-text")}</span></p>
        </div>
    </>
    )
}

export default InformationAboutC