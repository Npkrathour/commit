"use client";

import BackgroundDecor from "@/components/layout/BackgroundDecor";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    // Clear cookie
    document.cookie = "accessToken=; path=/; max-age=0; SameSite=Strict";
    // Clear localStorage
    localStorage.removeItem("auth");
    // Force hard navigation to clear all state
    window.location.href = "/sign-in";
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("/auth/me");
        setUser(response.data);
        console.log("User profile fetched:", response.data);
      } catch (error: any) {
        if (error.response?.status === 401) {
          setUser(null);
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <BackgroundDecor>
        <div className="p-4 min-h-screen pb-20">
          {/* Header skeleton */}
          <div className="flex justify-between items-center mb-4">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Profile image skeleton */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse"></div>
          </div>

          {/* User info skeleton */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-14 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-12 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Loading text */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Loading profile...
          </p>
        </div>
      </BackgroundDecor>
    );
  }

  return (
    <BackgroundDecor>
      <div className="p-4 my-2  glass-card rounded-lg ">
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            className="w-20 h-20 rounded-full object-cover border border-gray-200"
            src={user.image || ""}
            alt="Profile Image"
          />
          <p className="text-sm font-semibold pt-0">{user.firstName}</p>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="my-2  h-32 backdrop-blur-xs border border-blue-400 rounded-lg ">
        <div className="p-2">
          <h2 className="text-lg font-semibold">User Details</h2>
          <p>
            <span className="font-medium">First Name:</span> {user.firstName}
          </p>
          <p>
            <span className="font-medium">Last Name:</span> {user.lastName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user.email}
          </p>
        </div>
        <div className="p-2 mt-3">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </BackgroundDecor>
  );
};

export default UserProfile;
