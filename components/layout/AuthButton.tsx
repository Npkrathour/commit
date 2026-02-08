import React from "react";

const AuthButton = ({
  type,
  loading,
}: {
  type: "Reset" | "SignIn" | "SignUp" | "Register";
  loading: boolean;
}) => {
  return (
    <div>
      <button
        type="submit"
        disabled={loading}
        className="px-10 py-2 cursor-pointer underline-none hover:underline-none border border-gray-400 mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 rounded-md"
      >
        {loading ? "Loading..." : type}
      </button>
    </div>
  );
};

export default AuthButton;
