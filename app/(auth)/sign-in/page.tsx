"use client";
import AuthButton from "@/components/layout/AuthButton";
import BackgroundDecor from "@/components/layout/BackgroundDecor";
import Header from "@/components/layout/Header";
import { Dot } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <BackgroundDecor>
      <Header className="absolute top-10 md:left-6 left-0" />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="w-full">
          <h1 className="text-3xl flex items-center w-full justify-center font-bold text-center mt-6 text-gray-800">
            Welcome <Dot className=" -ml-4 size-14 pt-2 text-blue-500" />
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-sm font-normal text-gray-700">Email</label>
              <input
                className="border border-gray-400 p-2 focus:outline-none rounded-sm text-sm"
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
              <label className="text-sm font-normal text-gray-700">
                Password
              </label>
              <input
                className="border border-gray-400 p-2 focus:outline-none rounded-sm text-sm"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <AuthButton type="SignIn" loading={false} />
            <p className="inline-flex gap-1 w-full pt-3 text-sm font-medium justify-center">
              Not Registered?{" "}
              <a href="/sign-up" className="text-blue-500  ">
                Create An Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </BackgroundDecor>
  );
};

export default SignInForm;
