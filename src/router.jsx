import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from "./pages/Main-Page/Main-Page";
import StartPage from "./pages/Start-Page/StartPage";
import CoursePage from './pages/Course-Page/CoursePage.jsx'
import LibrariesPage from './pages/Libraries-Page/LibrariesPage.jsx'
import Header from "./general components/Header";
import './router.css';

function RouterPages() {
    return (
    <>
        <div id="header"><Header /></div>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/libraries" element={<LibrariesPage />} />
            <Route path="/course" element={<CoursePage />} />
        </Routes>
    </>
    )
}

export default RouterPages