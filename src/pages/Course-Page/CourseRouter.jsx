import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loop from "./components/Loop"
import DataTypes from "./components/DataTypes"
import HelloWorldCoursePage from "./components/HelloWorld"


function RouterCoursePages() {
    return (
    <>
        <Routes>
            <Route path="/data-types" element={<DataTypes />} />
            <Route path="/hello-world-course-page" element={<HelloWorldCoursePage />} />
            <Route path="/loop" element={<Loop />} />
        </Routes>
    </>
    )
}

export default RouterCoursePages