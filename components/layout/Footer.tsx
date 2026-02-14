"use client";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import Link from "next/link";
import { PiChatDots } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { useState } from "react";

const Footer = () => {
  const navItems = [
    {
      name: "Home",
      icon: <PiChatDots className="md:size-6 size-6" />,
      href: "/home",
    },
    {
      name: "About",
      icon: <HiOutlineHome className="md:size-6 size-6" />,
      href: "/about",
    },
    {
      name: "Profile",
      icon: <MdOutlineSettingsSuggest className="md:size-6 size-6" />,
      href: "/user-profile",
    },
  ];

  const [selected, setSelected] = useState("Home");
  const handleTabClick = (name: string) => {
    setSelected(name);
  };

  return (
    <footer className="fixed left-0 right-0 bottom-4 w-full z-50">
      <div className="flex px-2.5 items-center justify-around w-full gap-4 max-w-md mx-auto">
        <div className="flex items-center justify-between px-5 py-1 w-full border border-gray-200 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleTabClick(item.name)}
              className={`flex justify-center flex-col items-center cursor-pointer transition-colors ${
                selected === item.name
                  ? "text-blue-500 bg-transparent backdrop-blur-md border border-sky-100 px-10 py-1.5 rounded-full shadow"
                  : "hover:text-blue-500"
              }`}
            >
              {item.icon}
              <span className="text-[11px]">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="border border-gray-200 rounded-full p-4 flex items-center justify-center bg-white/90 backdrop-blur-md shadow-lg">
          <IoSearchOutline className="cursor-pointer md:size-6 size-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
