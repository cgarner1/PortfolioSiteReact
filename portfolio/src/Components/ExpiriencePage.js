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
                                <h1 className="header-text">Experience</h1>
                            </div>
                            <School imgsrc="/images/mfst1.jpg" major="Software Engineer Intern - High Availability Storage and Data Intellegence" date="May 2021 - Aug 2021" name="Microsoft">
                                I had the pleasure of interning at Microsoft in May 2021 within the HASD&I team within Azure. At this internship I gained expirience in data engineering, using internal
                                Microsoft tools along with openly available tools such as Azure Data Explorer. I also had the oportunity to gain expirience in Cloud Infrastructure, building VMs within
                                an Azure testing environment. On top of this, I gained valuable expirience honing my soft skills, as I had the chance to present to senior leadership, many times
                                over my three month period of work, along with collaborative skills in a fast paced engineering environment.
                            </School>

                            <School imgsrc="/images/metlife.jpg" major="Technical Intern - Data and Analytics Open Source" date="Jun 2019 - Aug 2019" name="MetLife">
                                In 2019, I interned at MetLife as a technical intern. I gained expirience primarily with Python, as I learned the MetLife Data Science workflow. I 
                                had the opportunity to build an internal tool for MetLife that assisted the team in documenting their trained machine learning models and build automated testing suites for
                                both my own project, and scripts within the data and analytics repository.
                            </School>

                        </div>
                    </section>
                </div>
            </div>

        </div>
        
        );
}