import React from 'react';
import { Navbar, NavItem } from "./Navbar"
import School from "./SchoolInfo"


export function ExpiriencePage() {
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
                                I am currently enrolled in CMU's Master of Software Engineering - Scalable Systems program. Over the next year and a half, I will be taking courses
                                the include Software Architecture, Data Intensive Systems, Distributed Systems and many ohter assorted Software Engineering topics.
                                The skills I learn in these courses will be applied during a 14 week practicum, in which our abilities are tested
                                to build real world, business ready solutions to be integrated into large-scale company systems. 
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