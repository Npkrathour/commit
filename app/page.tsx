"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("auth");
    if (auth) {
      // User is logged in, redirect to user profile
      router.replace("/user-profile");
    } else {
      // User is not logged in, redirect to sign in
      router.replace("/sign-in");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  );
};

export default Home;
