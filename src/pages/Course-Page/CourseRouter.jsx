import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loop from "./components/Loop"
import DataTypes from "./components/DataTypes"
import HelloWorldCoursePage from "./components/HelloWorld"
import Arrays from "./components/Arrays";


function RouterCoursePages() {
    return (
    <>
        <Routes>
            <Route path="/data-types" element={<DataTypes />} />
            <Route path="/hello-world-course-page" element={<HelloWorldCoursePage />} />
            <Route path="/loop" element={<Loop />} />
            <Route path="/arrays" element={<Arrays />} />
        </Routes>
    </>
    )
}

export default RouterCoursePages