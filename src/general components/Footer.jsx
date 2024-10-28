import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './styles/Footer.css'

function Footer() {
  // translator
  const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // функция для смены языка
  };
  return (
    <>
    <div id="main-Obertka-Footer">
      <div id='mini-Obertka-Footer'>
        <div id="footer-start">
            <a className="head-of-list" href="#"><span>{t("start")}</span></a>
            <ul>
                <li><a className="list" href="#">{t("language-C")}</a></li>
                <li><a className="list" href="#">{t("code-editor")}</a></li>
                <li><a className="list" href="#">{t("compiler")}</a></li>
                <li><a className="list" href="#">{t("writing-logic")}</a></li>
                <li><a className="list" href="#">{t("first-program")}</a></li>
            </ul>
        </div>
        <div id="footer-libraries">
            <a className="head-of-list" href="#">{t("libraries")}</a>
            <ul>
                <li><a className="list" href="#">&lt;stdio.h&gt;</a></li>
                <li><a className="list" href="#">&lt;math.h&gt;</a></li>
                <li><a className="list" href="#">&lt;string.h&gt;</a></li>
                <li><a className="list" href="#">&lt;time.h&gt;</a></li>
                <li><a className="list" href="#">&lt;{t("more")}gt;</a></li>
            </ul>
        </div>
        <div id="footer-contact">
            <p id="contact">CONTACT</p>
            <a href="mailto:alwaysal0dev@gmail.com">alwaysal0dev@gmail.com</a>
        </div>
      </div>
      <div id="copyright">Copyright 2024 &copy; always_al/<br />{t("development")}</div>
      <a id="github" target="_blank" href="https://github.com/alwaysal0" rel="noopener noreferrer" >
          <img src='../../Images/github-logo-108.png' alt="github" />
      </a>
    </div>
    </>
  )
}

export default Footer