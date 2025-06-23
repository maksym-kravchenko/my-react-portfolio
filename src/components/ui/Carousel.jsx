import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const Carousel = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    const flkty = new Flickity(flickityRef.current, {
      wrapAround: true,
      freeScroll: true,
      autoPlay: true,W
    });

    return () => flkty.destroy();
  }, []);

  return (
    <div className="carousel" ref={flickityRef}>
      <div className="">1</div>
      <div className="">2</div>
      <div className="">3</div>
    </div>
  );
};

export default Carousel;
