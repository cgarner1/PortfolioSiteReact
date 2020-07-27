import React from "react"
import {NavLink} from "react-router-dom"

export function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item-title">{props.title}</li>
                <div className="nav-link-container">{props.children}</div>
            </ul>
        </nav>
        );
}

export function NavItem(props) {
    return (
        <li className = "nav-item">
            <NavLink to={props.link} className="nav-item-link">{props.text}</NavLink>
        </li>
        );

}

