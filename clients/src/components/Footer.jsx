import React from "react"
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Blog by Annetta"/>
            <span>
                Website created by Annetta with React.js.<br />
                Contact: annetta@berkeley.edu
            </span>
        </footer>
    );   
};

export default Footer