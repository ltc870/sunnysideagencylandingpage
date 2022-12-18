import React from "react";
import milk from "../images/mobile/image-gallery-milkbottles.jpg";
import milk2 from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/mobile/image-gallery-orange.jpg";
import orange2 from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/mobile/image-gallery-cone.jpg";
import cone2 from "../images/desktop/image-gallery-cone.jpg";
import sugar from "../images/mobile/image-gallery-sugar-cubes.jpg";
import sugar2 from "../images/desktop/image-gallery-sugarcubes.jpg";
import classes from "./Gallery.module.css";

const Gallery = () => {
    return (
        <section>
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

export default Gallery;
