import React from "react";
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
import milk from "../images/mobile/image-gallery-milkbottles.jpg";
import orange from "../images/mobile/image-gallery-orange.jpg";
import cone from "../images/mobile/image-gallery-cone.jpg";
import sugar from "../images/mobile/image-gallery-sugar-cubes.jpg";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
    return (
        <section className={classes.testimonialSection}>
            <h3 className={classes.testimonialHeading}>Client testimonials</h3>
            <div className={classes.testimonialContainer}>
                <div className={classes.testimonialBox}>
                    <img
                        className={classes.testimonialPicture}
                        src={emily}
                        alt="Emily"
                    />
                    <p className={classes.testimonialText}>
                        We put our trust in Sunnyside and they delivered, making
                        sure our needs were met and deadlines were always hit.
                    </p>
                    <p className={classes.testimonialName}>Emily R.</p>
                    <p className={classes.testimonialPosition}>
                        Marketing Director
                    </p>
                </div>
                <div className={classes.testimonialBox}>
                    <img
                        className={classes.testimonialPicture}
                        src={thomas}
                        alt="Thomas"
                    />
                    <p className={classes.testimonialText}>
                        Sunnyside’s enthusiasm coupled with their keen interest
                        in our brand’s success made it a satisfying and
                        enjoyable experience.
                    </p>
                    <p className={classes.testimonialName}>Thomas S.</p>
                    <p className={classes.testimonialPosition}>
                        Chief Operating Officer
                    </p>
                </div>
                <div className={classes.testimonialBox}>
                    <img
                        className={classes.testimonialPicture}
                        src={jennie}
                        alt="Jennie"
                    />
                    <p className={classes.testimonialText}>
                        Incredible end result! Our sales increased over 400%
                        when we worked with Sunnyside. Highly recommended!
                    </p>
                    <p className={classes.testimonialName}>Jennie F.</p>
                    <p className={classes.testimonialPosition}>
                        Business Owner
                    </p>
                </div>
            </div>
            <div className={classes.gallery}>
                <div>
                    <img
                        className={classes.galleryPicture}
                        src={milk}
                        alt="milk bottles"
                    />
                </div>
                <div>
                    <img
                        className={classes.galleryPicture}
                        src={orange}
                        alt="an orange"
                    />
                </div>
                <div>
                    <img
                        className={classes.galleryPicture}
                        src={cone}
                        alt="an ice cream cone"
                    />
                </div>
                <div>
                    <img
                        className={classes.galleryPicture}
                        src={sugar}
                        alt="sugar cubes"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
