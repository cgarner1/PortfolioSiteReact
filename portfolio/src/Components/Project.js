import React from 'react'

export function Project(props) {
    return (
        <div className="projects-container">
            <section id={props.sectionId}></section>
            <div className="project-info-container">
                <div id="proj-section-header">
                    <h2>{props.sectionHeader}</h2>
                </div>

                <div className="project-content">
                    <div><img className="proj-img"></img></div>

                    <div className="proj-name-container">
                        {props.name}
                    </div>

                    <div className="proj-text-container">
                        {props.date}
                    </div>

                    <div className="proj-description-container">
                        {props.children}
                    </div>
                </div>
            </div>

        </div>
        
        );


}