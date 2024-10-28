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
    const timeoutsRef = useRef([]); // хранит таймауты каждого ЭЛЕМЕНТА в массиве

  // Функция для присвоения рефа каждому элементу
    const setObservedElementRef = (el) => {
    if (el && !observedElementsRef.current.includes(el)) {
        observedElementsRef.current.push(el);
    }
    };
    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                const index = observedElementsRef.current.indexOf(element);

                // Получаем индивидуальную задержку из атрибута data-delay
                const delay = element.getAttribute('data-delay') || 0;

                if (entry.isIntersecting) {
                    const timeout = setTimeout(() => {
                        element.classList.add('in-view');
                    }, delay);

                    timeoutsRef.current[index] = timeout;
                } else {
                    clearTimeout(timeoutsRef.current[index]);
                    element.classList.remove('in-view');
                }
            });
        };

        const observerOptions = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observedElementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
            observedElementsRef.current.forEach(element => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);
    // useEffect(() => {
    // const observerCallback = (entries) => {
    //     entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //         entry.target.classList.add('in-view');
    //     } else {
    //         entry.target.classList.remove('in-view');
    //     }
    //     });
    // };

    // const observerOptions = {
    //     root: null,
    //     threshold: 0.1
    // };

    // const observer = new IntersectionObserver(observerCallback, observerOptions);

    // // Наблюдаем за каждым элементом из массива рефов
    // observedElementsRef.current.forEach(element => {
    //     if (element) {
    //     observer.observe(element);
    //     }
    // });

    // return () => {
    //     // Останавливаем наблюдение при размонтировании компонента
    //     observedElementsRef.current.forEach(element => {
    //     if (element) {
    //         observer.unobserve(element);
    //     }
    //     });
    // };
    // }, []);
    return(
        <>
        <div id="lets-start">
            <div ref={setObservedElementRef} id="circle-top"></div>
            <div id="main-text">
                <div ref={setObservedElementRef} id="lets-get-started" data-delay ="300">{t("lets-get-started")}</div>
                <div id="infoC">
                    <p id="history-origin">Origin and History</p>
                    <p id="history">The C programming language was developed in the early 1970s at Bell Labs by Dennis Ritchie. It was originally created as a system programming language for developing the Unix operating system. Over the years, C has evolved and influenced many other programming languages, such as C++, C#, and Java. Its enduring legacy is rooted in its efficiency and closeness to hardware, making it a foundational language in computer science.</p>
                </div>
            </div>
            <div ref={setObservedElementRef} id="circle-bottom"></div>
        </div>
        <div id="space">
        </div>
        </>
    )
}

export default StartPage
