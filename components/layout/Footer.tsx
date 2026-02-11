"use client";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed left-0 right-0 bottom-2 w-full px-4 z-50">
      <div className="flex items-center justify-around w-full gap-4 max-w-md mx-auto">
        <div className="flex items-center justify-around py-2 w-full border border-gray-200 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
          <Link
            href="/home"
            className="flex justify-center flex-col items-center cursor-pointer hover:text-blue-500 transition-colors"
          >
            <AiFillBank className="md:size-10 size-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            href="/about"
            className="flex justify-center flex-col items-center cursor-pointer hover:text-blue-500 transition-colors"
          >
            <AiFillBank className="md:size-10 size-6" />
            <span className="text-xs">About</span>
          </Link>
          <Link
            href="/user-profile"
            className="flex justify-center flex-col items-center cursor-pointer hover:text-blue-500 transition-colors"
          >
            <AiFillBank className="md:size-10 size-6" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
        <div className="border border-gray-200 rounded-full p-4 flex items-center justify-center bg-white/90 backdrop-blur-md shadow-lg">
          <IoSearchOutline className="cursor-pointer md:size-10 size-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
