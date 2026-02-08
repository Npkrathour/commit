"use client";
import AuthButton from "@/components/layout/AuthButton";
import BackgroundDecor from "@/components/layout/BackgroundDecor";
import Header from "@/components/layout/Header";
import { Dot } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import signUp from "@/assets/signUp.png";
import registerImg from "@/assets/register.png";
import Image from "next/image";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log("Form submitted", {
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <BackgroundDecor>
      <Header className="absolute top-10 md:left-6 left-0" />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="w-full">
          <Image
            src={registerImg}
            alt="Sign Up"
            className="size-56 mx-auto"
            width={200}
            height={200}
          />

          <h1 className="text-3xl flex items-center w-full justify-center font-bold text-center text-gray-800">
            Welcome <Dot className=" -ml-4 size-14 pt-2 text-blue-500" />
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-sm font-normal text-sky-900">
                Username
              </label>
              <input
                className="border border-sky-600 p-2 focus:outline-none rounded-sm text-sm"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 5,
                    message: "Username must be at least 5 characters",
                  },
                })}
                placeholder="Enter Username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-sm font-normal text-sky-900">Email</label>
              <input
                className="border border-sky-600 p-2 focus:outline-none rounded-sm text-sm"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal text-sky-900">
                Password
              </label>
              <input
                className="border border-sky-600 p-2 focus:outline-none rounded-sm text-sm"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <AuthButton type="Register" loading={false} />
            <p className="inline-flex gap-1 w-full pt-3 text-sm font-medium justify-center">
              Already have an account?{" "}
              <a href="/sign-in" className="text-blue-500  ">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </BackgroundDecor>
  );
};

export default SignUpForm;
