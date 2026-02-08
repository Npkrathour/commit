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
      toast.success("Login successful!");
      router.push("/user-profile");

      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          user: response.data.user,
        }),
      );
      console.log("Login success:", response.data);
    } catch (err) {
      setError("Invalid username or password");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundDecor>
      <Header className="absolute top-10 md:left-6 left-0" />
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
