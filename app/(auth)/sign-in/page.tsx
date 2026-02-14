"use client";
import AuthButton from "@/components/layout/AuthButton";
import BackgroundDecor from "@/components/layout/BackgroundDecor";
import Header from "@/components/layout/Header";
import { Dot } from "lucide-react";
import { use, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import loginImg from "@/assets/login.png";
import Image from "next/image";
import axiosInstance from "@/lib/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface FormData {
  username: string;
  password: string;
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.post("/auth/login", {
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      });

      // Store token in cookie for middleware access
      document.cookie = `accessToken=${response.data.accessToken}; path=/; max-age=${30 * 60}; SameSite=Strict`;

      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          user: response.data.user,
        }),
      );

      toast.success("Login successful!");
      console.log("Login success:", response.data);

      // Force hard navigation to ensure middleware picks up the cookie
      window.location.href = "/user-profile";
    } catch (err) {
      setError("Invalid username or password");
      console.error(err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <BackgroundDecor>
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div className="w-full max-w-sm space-y-6 animate-pulse">
            {/* Image skeleton */}
            <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full"></div>

            {/* Title skeleton */}
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>

            {/* Form skeleton */}
            <div className="space-y-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="h-12 bg-gray-300 rounded w-full mt-4"></div>
            </div>

            {/* Loading text */}
            <p className="text-center text-gray-500 text-sm">
              Signing you in...
            </p>
          </div>
        </div>
      </BackgroundDecor>
    );
  }

  return (
    <BackgroundDecor>
      {/* <Header className="absolute top-10 md:left-6 left-0" /> */}
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="w-full">
          <Image
            src={loginImg}
            alt="Sign In"
            className="size-60 mx-auto"
            width={200}
            height={200}
          />
          <h1 className="text-3xl flex items-center w-full justify-center font-bold text-center text-gray-800">
            Welcome <Dot className=" -ml-4 size-14 pt-2 text-blue-500" />
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-sm font-normal text-sky-900">Email</label>
              <input
                className="border border-sky-600 p-2 focus:outline-none rounded-sm text-sm"
                {...register("username", {
                  required: "Email is required",
                })}
                placeholder="Enter Email"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal text-sky-900">
                Password
              </label>
              <input
                className="border border-sky-600 p-2 focus:outline-none rounded-sm text-sm"
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
