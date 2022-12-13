import React, { useState } from "react";
import Dropdown from "./Dropdown";
import hamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
import classes from "./Navigation.module.css";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <div className={classes.navigation}>
            <img className={classes.logo} src={logo} alt="logo" />
            <nav className={classes.navigationMenu}>
                <button
                    className={classes.hamburgerMenu}
                    onClick={handleOnClick}
                >
                    <img src={hamburger} alt="menu" />
                </button>
                {isOpen && <Dropdown />}
                <a className={classes.desktopNav} href="#">
                    About
                </a>
                <a className={classes.desktopNav} href="#">
                    Services
                </a>
                <a className={classes.desktopNav} href="#">
                    Projects
                </a>
                <a className={classes.desktopNav} href="#">
                    Contact
                </a>
            </nav>
        </div>
    );
};

export default Navigation;
