import React from "react"

export function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{ props.children }</ul>
        </nav>
        );
}

export function NavItem(props) {
    return (
        <li className = "nav-item">
            <a href="#" className="nav-item-button">{props.icon}</a>
        </li>
        );

}

