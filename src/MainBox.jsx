import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './css/MainBox.css'

function MainBox() {
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
  return (
    <>
      <div id="left-text">
        <p ref={setObservedElementRef} id="c-easy"><span>С</span>{t("its-easy")}</p>
        <p id="rest-of-text"><span ref={setObservedElementRef} id="rest-of-text-first">{t("its-not-scary")}</span>
        <br /><span ref={setObservedElementRef} id="rest-of-text-last">{t("our-guide")}</span></p>
        <a ref={setObservedElementRef} id="start-button" href="./start-page/start.html">START</a>
      </div>
      <div id="right-images">
        <p ref={setObservedElementRef} id="will-find">{t("you`ll-find")}</p>
        <div id="higher-images">
            <div ref={setObservedElementRef} id="first-box" className="higher-boxes">
                <img src="../Images/code.png" alt="code" />
                <p>{t("online-code-editor")}</p>
            </div>
            <div ref={setObservedElementRef} id="second-box" className="higher-boxes second-box">
                <img src="../Images/library.png" alt="library" />
                <p>{t("brief-overview-of-libraries")}</p>
            </div>
        </div>
        <div id="lower-images">
            <div ref={setObservedElementRef} id="third-box" className="lower-boxes">
                <img src="../Images/human.png" alt="human" />
                <p>{t("even-beginners-will-understand")}</p>
            </div>
            <div ref={setObservedElementRef} id="four-box" className="lower-boxes">
                <img src="../Images/terminal.png" alt="terminal" />
                <p>{t("online-compiler")}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainBox
