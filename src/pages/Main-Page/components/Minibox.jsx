import React from "react";
import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next'
import '../styles/Minibox.css'

function Minibox() {
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
    <div ref={setObservedElementRef} id="minibox-with-icons">
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