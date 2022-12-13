import React from "react";
import egg from "../images/mobile/image-transform.jpg";
import cup from "../images/mobile/image-stand-out.jpg";
import classes from "./Main.module.css";

const Main = () => {
    return (
        <main className={classes.main}>
            <img
                className={`${classes.picture} ${classes.eggPicture}`}
                src={egg}
                alt="an egg"
            />
            <div className={classes.transform}>
                <div className={classes.transformContainer}>
                    <h2 className={classes.subtitle}>Transform your brand</h2>
                    <p className={classes.subtext}>
                        We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for
                        you.
                    </p>
                    <a
                        className={`${classes.mainLink} ${classes.transformLink}`}
                        href="#"
                    >
                        <span>Learn more</span>
                    </a>
                </div>
            </div>
            <img className={classes.picture} src={cup} alt="a cup" />
            <div className={classes.standout}>
                <div className={classes.standoutContainer}>
                    <h2 className={classes.subtitle}>
                        Stand out to the right audience
                    </h2>
                    <p className={classes.subtext}>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we’ll
                        build and extend your brand in digital places.
                    </p>
                    <a
                        className={`${classes.mainLink} ${classes.standOutLink}`}
                        href="#"
                    >
                        <span>Learn more</span>
                    </a>
                </div>
            </div>
            <div className={classes.graphicDesign}>
                <div className={classes.graphicDesignContainer}>
                    <h3 className={classes.graphicDesignTitle}>
                        Graphic design
                    </h3>
                    <p className={classes.graphicDesignText}>
                        Great design makes you memorable. We deliver artwork
                        that underscores your brand message and captures
                        potential clients’ attention.
                    </p>
                </div>
            </div>
            <div className={classes.photography}>
                <div className={classes.photographyContainer}>
                    <h3 className={classes.photographyTitle}>Photography</h3>
                    <p className={classes.photographyText}>
                        Increase your credibility by getting the most stunning,
                        high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Main;
