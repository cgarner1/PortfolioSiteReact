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
                            <School imgsrc="/images/CMU.jpg" major="Masters of Software Engineering" date="Jun 2020 - Dec 2021" name="Carnegie Mellon University"></School>
                            <School imgsrc="/images/elon.jpg" major="Computer Science" date="Sep 2016 - May 2020" name="Elon University"></School>
                        </div>
                    </section>
                </div>
            </div>

        </div>
        
        );
}