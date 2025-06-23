import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const photos = [
    "/profile-imgs/photo1.JPG",
    "/profile-imgs/photo2.JPG",
    "/profile-imgs/photo3.JPG",
];

const Carousel = () => {
    const flickityRef = useRef(null);

    useEffect(() => {
        const flkty = new Flickity(flickityRef.current, {
            cellAlign: "left",
            wrapAround: true,
            freeScroll: true,
            autoPlay: true,
            contain: true,
        });

        return () => flkty.destroy();
    }, []);

    return (
        <div className="carousel" ref={flickityRef}>
            <div className="carousel-cell">1</div>
            <div className="carousel-cell">2</div>
            <div className="carousel-cell">3</div>
        </div>
    );
};

export default Carousel;