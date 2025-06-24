import React, {useEffect, useRef} from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const photos = [
    "/profile-imgs/photo1.jpg",
    "/profile-imgs/photo2.jpg",
    "/profile-imgs/photo3.jpg",
];

const Carousel = () => {
    const flickityRef = useRef(null);

    useEffect(() => {
        const flickity = new Flickity(flickityRef.current, {
            wrapAround: true,
            freeScroll: true,
            autoPlay: true,
        });

        return () => flickity.destroy();
    }, []);

    return (
        <div className="carousel w-full flickity-custom-carousel" ref={flickityRef}>
            {photos.map((photo, key) => (
                <div key={key} className="carousel-cell w-[90%] md:w-[75%] h-80 mr-2 bg-card rounded-lg overflow-hidden shadow-xs">
                    <img loading="lazy" src={photo} alt={photo} className="w-full h-full object-cover rounded-lg" />
                </div>
            ))}
        </div>
    );
};

export default Carousel;