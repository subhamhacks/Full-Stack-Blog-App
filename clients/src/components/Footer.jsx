import React from "react"
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={logo2} alt="Blog by Annetta"/>
            <span>
                Website created by Subham with React.js.<br />
                Contact: mohanty.subham07@gmail.com
            </span>
        </footer>
    );   
};

export default Footer
