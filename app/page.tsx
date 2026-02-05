"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import CarouselSlider from "@/components/layout/Carousel";
import { useRouter } from "next/navigation";
import BackgroundDecor from "@/components/layout/BackgroundDecor";

const Login = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };
  return (
    <>
      <BackgroundDecor>
        {/* Content */}
        <div className="pt-52 mt-10 relative z-30">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={40}
            className="mx-auto rounded-3xl"
          />
          <h1 className="text-3xl flex items-center w-full justify-center font-bold text-center mt-6 text-gray-800">
            Say Hello <Dot className=" -ml-4 size-14 pt-2 text-blue-500" />
          </h1>
          <CarouselSlider />
          <div className="flex flex-col items-center  mt-2">
            <Button
              onClick={handleSignUp}
              size="lg"
              className="mt-8 bg-blue-400 text-white hover:bg-blue-500 px-6 py-3 rounded-md hover:shadow w-full"
            >
              Sign Up
            </Button>
            <Button
              onClick={handleSignIn}
              size="lg"
              className="mt-8 border bg-transparent w-full border-blue-500 hover:shadow text-gray-600 hover:border-blue-600 hover:bg-transparent px-6 py-3 rounded-md "
            >
              Sign In
            </Button>
          </div>
        </div>
      </BackgroundDecor>
    </>
  );
};

export default Login;
