"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = () => {
  const slides = [
    "Connect. Chat. Feel closer.",
    "Fast, secure, and personal chats.",
    "Talk anytime, anywhere.",
  ];
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={3000}
      className="home-slider px-12"
    >
      {slides.map((slidesItems, index) => (
        <div key={index}>
          <p className="text-lg font-bold text-black">{slidesItems}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
