import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import './css/Header.css'
import logo from '../Images/logo-site.webp'
import arrowBottom from '../Images/arrow-bottom.png'

function Header() {
  // translator
  const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // функция для смены языка
  };
  const [isLanguageListVisible, setIsLanguageListVisible] = useState(false);
  const toggleLanguageList = () => {
    setIsLanguageListVisible(prevState => !prevState);
  };
  const [isListVisible, setIsListVisible] = useState(false);
  const toggleList = () => {
    setIsListVisible(prevState => !prevState);
  };
  return (
    <>
      <div id='header' className={isListVisible ? 'active' : ''}>
          <div id="logo-name">
                <img id="logo-photo" src={logo} alt="logo-site"/>
                <p>{t("wiki")}</p>
            </div>
            <div id="hamburger" onClick={toggleList}>
                <img id='photo-hamburger' src={arrowBottom} alt="hamburger" className={isListVisible ? 'active' : ''}/>
            </div>
            <div id="right-head" className={isListVisible ? 'active' : ''}>
                <div className="rightButtons"><a href="Cwiki.html">{t("main")}</a></div>
                <div className="rightButtons"><a href="start-page/start.html">{t("start")}</a></div>
                <div className="rightButtons"><a href="#">{t("libraries")}</a></div>
                <div className="rightButtons"><a href="#">{t("course")}</a></div>
                <div onClick={toggleLanguageList}id='div-of-language'>
                  <div id='language'><span>{i18n.language.toUpperCase()}</span></div>
                  <ul id='list-of-languages' className={isLanguageListVisible ? 'list-visible' : ''}>
                    <li onClick={() => changeLanguage('en')}><p>EN</p></li>
                    <li id='lastLi' onClick={() => changeLanguage('ru')}><p>RU</p></li>
                  </ul>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
