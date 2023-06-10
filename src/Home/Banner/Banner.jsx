/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../../assets/banners/language-learn-transformed.jpeg";
import sliderImg2 from "../../assets/banners/istockphoto-1399155965-1024x1024-transformed.jpeg";
import sliderImg3 from "../../assets/banners/istockphoto-1131625839-1024x1024-transformed.jpeg";
const Banner = () => {
  return (
    <Carousel className="w-full h-[40px]">
      <div>
        <img src={sliderImg1} />
      </div>
      <div>
        <img src={sliderImg2} />
      </div>
      <div>
        <img src={sliderImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
