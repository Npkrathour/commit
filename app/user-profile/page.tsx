"use client";

import BackgroundDecor from "@/components/layout/BackgroundDecor";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("/auth/me");
        setUser(response.data);
      } catch (error: any) {
        if (error.response?.status === 401) {
          setUser(null);
          // router.push("/login");
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // 1️⃣ Loading state (NO BackgroundDecor)
  if (loading) {
    return <p className="p-4">Loading...</p>;
  }

  // 2️⃣ Not authenticated
  if (!user) {
    return null; // or redirect
  }

  return (
    <BackgroundDecor>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </BackgroundDecor>
  );
};

export default UserProfile;
