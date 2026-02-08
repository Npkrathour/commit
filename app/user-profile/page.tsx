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
        console.log("User profile fetched:", response.data);
      } catch (error: any) {
        if (error.response?.status === 401) {
          setUser(null);
        } else {
          console.error("Unexpected error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null;
  }
  return (
    <BackgroundDecor>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>User Profile</h1>
            <p>
              Name: {user.firstName} {user.lastName}
            </p>
            <p>Email: {user.email}</p>
            <img src={user.image} alt={`${user.firstName}'s profile`} />
          </div>
        )}
      </div>
    </BackgroundDecor>
  );
};

export default UserProfile;
