"use client";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleUserProfile = () => {
    router.push("/user-profile");
  };
  return (
    <footer className="fixed left-0 right-0 bottom-2 w-full px-4">
      <div className="flex items-center justify-around w-full gap-4">
        <div className="flex items-center justify-around py-2 w-full border border-gray-200 bg-transparent backdrop-blur-md rounded-full">
          <div className="flex justify-center flex-col items-center">
            <AiFillBank className="cursor-pointer md:size-10 size-6" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex justify-center flex-col items-center">
            <AiFillBank className="cursor-pointer md:size-10 size-6" />
            <span className="text-xs">About</span>
          </div>
          <div
            onClick={handleUserProfile}
            className="flex justify-center flex-col items-center"
          >
            <AiFillBank className="cursor-pointer md:size-10 size-6" />
            <span className="text-xs">Profile</span>
          </div>
        </div>
        <div className="border border-gray-200 rounded-full p-4 flex items-center justify-center bg-transparent backdrop-blur-md">
          <IoSearchOutline className="cursor-pointer md:size-10 size-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
