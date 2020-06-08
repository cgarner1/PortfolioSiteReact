import React from "react"
import { TripleItemGrid } from "./TripleItemGrid"

export function HeaderText(props) {
    // props.title -> title of page
    // props.children -> data in text field
    return (
        <div className="header-grid">
            <div className="header-title-container">
                <h1 className="header-text">{props.title}</h1>
            </div>
            <div className="header-body-container">
                <div></div> 
                <p>{props.children}</p>
                <div></div>
            </div>
            <TripleItemGrid item1="Software Engineering" item2="Machine Learning" item3="Game Development"></TripleItemGrid>
        </div>
    );

}