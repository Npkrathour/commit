"use client";

import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  // Auth pages where footer should not be shown
  const authPages = ["/sign-in", "/sign-up"];
  const isAuthPage = authPages.some((page) => pathname.startsWith(page));

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("auth");
    setIsAuthenticated(!!auth);
  }, [pathname]);

  return (
    <>
      {children}
      {isAuthenticated && !isAuthPage && <Footer />}
    </>
  );
}
