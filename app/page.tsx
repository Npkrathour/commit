import Image from "next/image";
import logo from "@/assets/logo.png";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <>
      <div className="w-full max-w-md mx-auto h-screen bg-white relative overflow-hidden border border-gray-300">
        {/* Background shapes */}
        <div className="absolute -top-20 -left-20 z-20 shadow-md w-60 h-56 bg-[#cce5ff] rounded-full"></div>
        <div className="absolute -top-24 -right-14 z-10 w-94 h-80 bg-[#65b1ff] rounded-br-[40%] rounded-bl-[115%] shadow"></div>

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
          <div className="flex flex-col items-center px-10">
            <Button
              size="lg"
              className="mt-8 bg-blue-400 text-white hover:bg-blue-500 px-6 py-3 rounded-md hover:shadow w-full"
            >
              Sign Up
            </Button>
            <Button
              size="lg"
              className="mt-8 border bg-transparent w-full border-blue-500 hover:shadow text-gray-600 hover:border-blue-600 hover:bg-transparent px-6 py-3 rounded-md "
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
