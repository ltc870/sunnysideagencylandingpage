import React from "react";
import logo2 from "../images/logo2.svg";
import {
    faFacebookSquare,
    faInstagram,
    faTwitter,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <img
                className={classes.footerLogo}
                src={logo2}
                alt="sunnyside logo"
            />
            <nav className={classes.contact}>
                <a
                    className={`${classes.contactLink} ${classes.contactAbout}`}
                    href="#"
                >
                    About
                </a>
                <a
                    className={`${classes.contactLink} ${classes.contactServices}`}
                    href="#"
                >
                    Services
                </a>
                <a
                    className={`${classes.contactLink} ${classes.contactProjects}`}
                    href="#"
                >
                    Projects
                </a>
            </nav>
            <ul className={classes.socialMedia}>
                <li>
                    <a href="#" aria-label="Facebook link">
                        <FontAwesomeIcon
                            className={classes.socialLink}
                            icon={faFacebookSquare}
                        />
                    </a>
                </li>
                <li>
                    <a href="#" aria-label="Instagram link">
                        <FontAwesomeIcon
                            className={classes.socialLink}
                            icon={faInstagram}
                        />
                    </a>
                </li>
                <li>
                    <a href="#" aria-label="Twitter link">
                        <FontAwesomeIcon
                            className={classes.socialLink}
                            icon={faTwitter}
                        />
                    </a>
                </li>
                <li>
                    <a href="#" aria-label="Pinterest link">
                        <FontAwesomeIcon
                            className={classes.socialLink}
                            icon={faPinterest}
                        />
                    </a>
                </li>
            </ul>
            <div className={classes.attribution}>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://www.lawrencecaudle.com" target="_blank">
                    Lawrence Caudle
                </a>
                .
            </div>
        </footer>
    );
};

export default Footer;
