"use client";

import BackgroundDecor from "@/components/layout/BackgroundDecor";
import React from "react";

const HomePage = () => {
  return (
    <BackgroundDecor>
      <div className="p-4 min-h-screen pb-20">
        <h1 className="text-3xl font-bold text-center mt-10">Welcome Home</h1>
        <p className="text-center text-gray-600 mt-4">
          This is your home page. Explore and enjoy!
        </p>
      </div>
    </BackgroundDecor>
  );
};

export default HomePage;
