import React from "react";
import './CoursePage.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../general components/ObserverFunction";
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import RouterCoursePages from "./CourseRouter.jsx";

function CoursePage() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    return (
        <>
        <div id="course-page">
            <p ref={setObservedElementRef1} className={isInView1 ? 'in-view' : ''} id="course-head">Basic Course</p>
            <div id="course-page-main-box">
                <div id="list-of-lessons">
                    <p>{t("introduction")}</p>
                    <ul>
                        <li className="lessons"><Link to='/course/data-types'>типы данных в Си</Link></li>
                        <li className="lessons"><Link to='/course/hello-world-course-page'>Hello World</Link></li>
                        <li className="lessons"><Link to='/course/loop'>работа с циклами</Link></li>
                        <li className="lessons">123</li>
                        <li className="lessons">321</li>
                    </ul>
                </div>
                <div id="course-page-lesson">
                    <RouterCoursePages />
                </div>
            </div>
        </div>
        </>
    )
}

export default CoursePage
