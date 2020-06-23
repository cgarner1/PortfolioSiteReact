import React from 'react'

export function Project(props) {
    return (
        <div className="projects-container">
            <div className="project-info-container">
                <div className="project-content">
                    <div><img className="proj-img"></img></div>
                    <div className="proj-text-container">
                        <h3>{props.name}</h3>
                        <h3>{props.date}</h3>
                        <p>{props.children}</p>
                    </div>
                </div>
            </div>

        </div>
        
        );


}