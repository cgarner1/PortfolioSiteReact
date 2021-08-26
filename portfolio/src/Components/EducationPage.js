import React from 'react';
import { Navbar, NavItem } from "./Navbar"
import School from "./SchoolInfo"


export function EducationPage() {
    return (
        <div className="page-content">
            <div className="main-content">
                <div className="negative-left"></div>
                <div className="middle-grid">
                    <section id="home-content">
                        <div className="viewport-entry">

                            {/* VIEWPORT ENTRY*/}
                            <div className="header-title-container">
                                <h1 className="header-text">EDUCATION</h1>
                            </div>
                            <School imgsrc="/images/CMU.jpg" major="Master of Software Engineering" date="Jun 2020 - Dec 2021" name="Carnegie Mellon University">
                                I am currently enrolled in CMU's Master of Software Engineering - Scalable Systems program. Over the past year, I have participated in developing my
                                technical, leadership, and soft skills in classes focused on microservices, devOps practices, design patterns, high scalable/available architecture,
                                agile methodoligies and more. These classes allowed me to use a wide range of technologies: docker, kubernetes, AWS, ElasticSearch, React, Express, and 
                                many more open source technologies. I will be completing my degree by completing a my practicum: developing a highly scalable web service with a team of
                                like minded CMU students for a company local to Pittsburgh using GoLang and React.
                            </School>
                            <School imgsrc="/images/elon.jpg" major="B.S. Computer Science" date="Sep 2016 - May 2020" name="Elon University">
                                Over the four years of my Elon University expirience, I was provided ample opportunities to refine my knowledge and ability in the area of
                                Computer Science. Meaningful electives in courses such as Machine Learning and Web Development allowed me to further my immediate technical skills,
                                while leadership opportunities such as the founding of Computer Science Club (and taking the role of Vice President of said organization) gave me
                                significant time to hone my skills in networking, managment, and leadership.
                            </School>
                        </div>
                    </section>
                </div>
            </div>

        </div>
        
        );
}