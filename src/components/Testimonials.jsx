import React from "react";
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
import milk from "../images/mobile/image-gallery-milkbottles.jpg";
import milk2 from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/mobile/image-gallery-orange.jpg";
import orange2 from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/mobile/image-gallery-cone.jpg";
import cone2 from "../images/desktop/image-gallery-cone.jpg";
import sugar from "../images/mobile/image-gallery-sugar-cubes.jpg";
import sugar2 from "../images/desktop/image-gallery-sugarcubes.jpg";
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
                <img
                    className={classes.galleryPicture}
                    src={milk}
                    srcSet={`${milk} 376w, ${milk2} 720w`}
                    sizes="(min-width: 800px) 720px, 376px"
                    alt="milk bottles"
                />

                <img
                    className={classes.galleryPicture}
                    src={orange}
                    srcSet={`${orange} 376w, ${orange2} 720w`}
                    sizes="(min-width: 800px) 720px, 376px"
                    alt="an orange on a white plate with green trim"
                />

                <img
                    className={classes.galleryPicture}
                    src={cone}
                    srcSet={`${cone} 376w, ${cone2} 720w`}
                    sizes="(min-width: 800px) 720px, 376px"
                    alt="an ice cream cone"
                />

                <img
                    className={classes.galleryPicture}
                    src={sugar}
                    srcSet={`${sugar} 376w, ${sugar2} 720w`}
                    sizes="(min-width: 800px) 720px, 376px"
                    alt="sugar cubes stacked atop each other"
                />
            </div>
        </section>
    );
};

export default Testimonials;
