"use client";

import BackgroundDecor from "@/components/layout/BackgroundDecor";
import React from "react";

const AboutPage = () => {
  return (
    <BackgroundDecor>
      <div className="p-4 min-h-screen pb-20">
        <h1 className="text-3xl font-bold text-center mt-10">About Us</h1>
        <p className="text-center text-gray-600 mt-4">
          Learn more about our application and what we do.
        </p>
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to providing the best experience for our users. Our
            platform is designed to be intuitive, fast, and reliable.
          </p>
        </div>
      </div>
    </BackgroundDecor>
  );
};

export default AboutPage;
