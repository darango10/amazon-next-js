import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full bg-gradient-to-t from-gray-100 to-transparent h-32 bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
};
