import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ className = "" }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <button className={` cursor-pointer ${className}`} onClick={handleBack}>
        <ChevronLeft className="size-8 bg-white rounded-full shadow-xl p-1" />
      </button>
    </div>
  );
};

export default Header;
