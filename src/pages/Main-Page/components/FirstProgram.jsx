import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/FirstProgram.css'

function FirstProgram() {
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
      <div id="your-first-prog">
            <p id="first-prog">{t("hello-world")}<span id="C-second">&nbsp;C</span></p>
            <div ref={setObservedElementRef} id="hello-world">
                <a target="_blank" href="https://onlinegdb.com/chRZK0iZy"><img  src="../Images/helloworld.png" alt="helloworld" /></a>
                <p>{t("how-it-looks-like")}<br />{t("by-the-way")}</p>
            </div>
            <div id="gccAndConsole">
                <div ref={setObservedElementRef} id="gcc">
                    <a target="_blank" href="https://onlinegdb.com/chRZK0iZy"><img  src="../Images/gcc.png" alt="gcc" /></a>
                    <p>{t("compiling-our-file")}<br /><span>{t("active")}</span></p>
                </div>
                <div ref={setObservedElementRef} id="console">
                    <a target="_blank" href="https://onlinegdb.com/chRZK0iZy"><img  src="../Images/console.png" alt="helloworld" /></a>
                    <p>{t("execution-code")}<br /><span>{t("active")}</span></p>
                </div>
            </div>
            <p id="it-easy">{t("easy")}<br />{t("press")}<span id="start">&lt;START&gt;</span>{t("guide-below")}</p>
            <div ref={setObservedElementRef} id="arrow-bottom">
                <img src="../Images/arrow-bottom.png" alt="arrow-bottom" />
            </div>
            <div id="for-start-button"><a ref={setObservedElementRef} id="start-button-second" href="#">START</a></div>
        </div>
    </>
  )
}

export default FirstProgram