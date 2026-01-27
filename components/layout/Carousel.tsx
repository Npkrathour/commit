"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={3000}
      className="home-slider px-12"
    >
      <div>
        <p className="text-lg font-bold text-black  ">
          Connect. Chat. Feel closer.
        </p>
      </div>
      <div>
        <p className="text-lg font-bold text-black  ">
          Fast, secure, and personal chats.
        </p>
      </div>
      <div>
        <p className="text-lg font-bold text-black  ">
          Talk anytime, anywhere.
        </p>
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
