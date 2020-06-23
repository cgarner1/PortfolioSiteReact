import React from "react"

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
            <a href="#" className="nav-item-link">{props.text}</a>
        </li>
        );

}

