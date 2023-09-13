import React from "react";
//npm install react-router-dom --save

import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Arrow functional component
const NavBar=()=>{
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        <span><FontAwesomeIcon icon="camera-retro"/></span>Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link"><span><FontAwesomeIcon icon="sign-in"/></span>Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About-Us</Link>
                </li>
            </ul>
        </nav>

    );
}
export default NavBar;