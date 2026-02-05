import React from "react";

export default function BackgroundDecor({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md mx-auto h-screen bg-white relative overflow-hidden border border-gray-300 px-5">
      {/* Background shapes */}
      <div className="absolute -top-20 -left-20 z-20 shadow-md w-60 h-56 bg-[#cce5ff] rounded-full"></div>
      <div className="absolute -top-24 -right-14 z-10 w-94 h-80 bg-[#65b1ff] rounded-br-[40%] rounded-bl-[115%] shadow"></div>

      {/* Page Content */}
      <div className="relative z-30 h-full w-full">{children}</div>
    </div>
  );
}
