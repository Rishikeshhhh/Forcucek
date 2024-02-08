import React from "react";
import { Routes, Route, NavLink, useMatch } from "react-router-dom";

import "./Courses.css";
import SideBar from "../../CommonToAll/SideBar";
import CoursesSideBarList from "../../Data/SideBarList/CoursesSideBarList";
import Add from "../../CommonToAll/Add";
import Error from "../../CommonToAll/Error";
import C_Cpp from "../../Data/ContentsOfCourses/C_Cpp";
import Java from "../../Data/ContentsOfCourses/Java";
import Html_Css from "../../Data/ContentsOfCourses/Html_Css";
import JavaScript from "../../Data/ContentsOfCourses/JavaScript";

export default function Courses() {
    let match = useMatch("courses/*");
    const list = CoursesSideBarList.map((listItem) => (
        <NavLink
            end
            activeClassName="sideBarCoursesActive"
            className="sideBarCourses"
            key={listItem.href}
            to={`${match.pathname}/${listItem.href}`}
        >
            {listItem.name}
        </NavLink>
    ));

    return (
        <div className="courses">
            <div className="coursesParent">
                <div>
                    <SideBar list={list} />
                </div>
                <main className="switchTag">
                    <Routes>
                        <Route path="/" element={<C_Cpp />} />
                        <Route path="c_cpp" element={<C_Cpp />} />
                        <Route path="java" element={<Java />} />
                        <Route path="html_css" element={<Html_Css />} />
                        <Route path="javaScript" element={<JavaScript />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </main>
                <Add />
            </div>
        </div>
    );
}
