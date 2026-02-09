import React from "react";
import Footer from "@/components/layout/Footer";
import BackgroundDecor from "@/components/layout/BackgroundDecor";

const Dashboard = () => {
  return (
    <BackgroundDecor>
      <div className="min-h-screen pb-16">
        <h1 className="text-3xl font-bold text-center mt-10">
          Welcome to the Dashboard
        </h1>
      </div>
      <Footer />
    </BackgroundDecor>
  );
};

export default Dashboard;
