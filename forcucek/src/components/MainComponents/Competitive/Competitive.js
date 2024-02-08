import React from "react";
import { Routes, Route, NavLink, useMatch } from "react-router-dom";
import "./Competitive.css";
import SideBar from "../../CommonToAll/SideBar";
import CompetitiveSideBarList from "../../Data/SideBarList/CompetitiveSideBarList";
import Add from "../../CommonToAll/Add";
import Error from "../../CommonToAll/Error";
import FOSS from "../../Data/ContentsOfCompetitive/FOSS";
import FossPrograms from "../../Data/ContentsOfCompetitive/FossPrograms";
import SitesForFreeCourses from "../../Data/ContentsOfCompetitive/SitesForFreeCourses";
import SitesForProgrammers from "../../Data/ContentsOfCompetitive/SitesForProgrammers";
import SitesForPaidCourses from "../../Data/ContentsOfCompetitive/SitesForPaidCourses";
import CompetitiveCoding from "../../Data/ContentsOfCompetitive/CompetitiveCoding";

export default function Competitive() {
    let match = useMatch("/competitive/*");
    const list = CompetitiveSideBarList.map(listItem => (
        <NavLink
            key={listItem.path}
            to={`${match?.pathnameBase}/${listItem.path}`}
            className={({ isActive }) =>
                isActive ? "sideBarCompetitiveActive" : "sideBarCompetitive"
            }
        >
            {listItem.name}
        </NavLink>
    ));

    return (
        <div className="competitive">
            <div className="competitiveParent">
                <div>
                    <SideBar list={list} />
                </div>
                <main>
                    <Routes>
                        <Route path="/" element={<SitesForFreeCourses />} />
                        <Route path="/sitesForFreeCourses" element={<SitesForFreeCourses />} />
                        <Route path="/sitesForPaidCourses" element={<SitesForPaidCourses />} />
                        <Route path="/sitesForProgrammers" element={<SitesForProgrammers />} />
                        <Route path="/openSourceSoftware" element={<FOSS />} />
                        <Route path="/openSourcePrograms" element={<FossPrograms />} />
                        <Route path="/competitiveCodingWebsites" element={<CompetitiveCoding />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </main>
                <Add />
            </div>
        </div>
    );
}
