import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import logo from './IMG/logo-site.webp'
import arrowBottom from './IMG/arrow-bottom.png'
import './styles/Header.css'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/start'); // Перенаправляем на страницу "Старт"
    };
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
                <div className="rightButtons">
                  <Link to='/'>{t("main")}</Link>
                </div>
                <div className="rightButtons">
                  <Link to='/start'>{t("start")}</Link>
                </div>
                <div className="rightButtons">
                  <Link to='/libraries'>{t("libraries")}</Link>
                </div>
                <div className="rightButtons">
                  <Link to='/course'>{t("course")}</Link>
                </div>
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
