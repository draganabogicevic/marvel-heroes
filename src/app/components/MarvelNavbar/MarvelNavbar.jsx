import React from "react";
import { Link } from "react-router-dom";

import "./MarvelNavbar.scss";

const MarvelNavbar = (props) => {
    return (
        <nav
            className="MarvelNavbar px-3 d-flex align-items-center"
        >
            <Link to="/">HERO TEAM</Link>
        </nav >
    );
}

export default MarvelNavbar;