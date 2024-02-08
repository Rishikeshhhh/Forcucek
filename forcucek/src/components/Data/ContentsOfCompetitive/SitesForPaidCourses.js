import React from "react";
import { NavLink, useMatch, Routes, Route } from "react-router-dom";
import styles from "./contentCompetitive.module.css";
import TrickForFreeUdemyCourse from "./TrickForFreeUdemyCourse";

export default function SitesForPaidCourses() {
    const match = useMatch("your-base-path/*");
    const list = [
        {
            name: "Udemy",
            link: "https://www.udemy.com/",
            description: (
                <ul>
                    <li>
                        <NavLink onClick={() => window.scrollTo(0, 500)} activeClassName={styles.activeNavLink} className={styles.navLink} to={`${match?.pathnameBase}/tricksToGetAnyUdemyCoursesInFree`}>
                            Click here
                        </NavLink>{" "}
                        for 'Tricks to get any Udemy courses in free'.
                    </li>
                </ul>
            ),
        },
        {
            name: "Coursera",
            link: "https://www.coursera.org/",
            description: "",
        },
        // Add other sites as needed
    ];

    return (
        <article className={styles.divContainer}>
            <header>
                <h1 className={styles.h1}>Best Sites For Paid Online Courses</h1>
            </header>
            <ul>
                {list.map((listItem) => (
                    <li key={listItem.link}>
                        <a href={listItem.link} rel="noopener noreferrer" target="_blank">
                            {listItem.name}
                        </a>{" "}
                        {listItem.description}
                    </li>
                ))}
            </ul>
            <p>All of the above websites are best, just pick any of them and start learning. Don't waste time on choosing platforms.</p>
            <hr />
            <div className={styles.listCard}>
                <Routes>
                    <Route path={`${match?.pathnameBase}/tricksToGetAnyUdemyCoursesInFree`} element={<TrickForFreeUdemyCourse />} />
                </Routes>
            </div>
        </article>
    );
}
