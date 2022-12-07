import React from "react";
import Navigation from "./Navigation";
import arrow from "../images/icon-arrow-down.svg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <Navigation />
            <h1 className={classes.headerTitle}>We are creatives</h1>
            <img className={classes.arrow} src={arrow} alt="downward arrow" />
        </header>
    );
};

export default Header;
