import React from "react"

export default function SchoolInfo(props) {
    return (
        <div className="school-info-container">
            <img className="school-icon" src={process.env.PUBLIC_URL + props.imgsrc}></img>
            <h2>{props.name}</h2>
            <h3>Major: {props.major}</h3>
            <h3>{props.date}</h3>
        </div>
        )
}