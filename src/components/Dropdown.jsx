import React from "react";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
    return (
        <div className={classes.dropDownMenu}>
            <a className={`${classes.dropDownLink}`} href="#">
                About
            </a>
            <a className={`${classes.dropDownLink}`} href="#">
                Services
            </a>
            <a className={`${classes.dropDownLink}`} href="#">
                Projects
            </a>
            <a className={`${classes.dropDownLink}`} href="#">
                Contact
            </a>
        </div>
    );
};

export default Dropdown;
