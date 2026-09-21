import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios.js";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const HandleLogOut = async ()=>{

    
    const userResponse = confirm("Are you sure?");
    if(!userResponse){
       setLogoutMessage("You have not logged out"); 
       setTimeout(() => {
        setLogoutMessage("")
      }, 2000);

      return
      
    }


try {
      setIsLoggingOut(true);

      await api.post("/logout");

    setLogoutMessage("Logged out successfully");

    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 2000);

    } catch (error) {
     setLogoutMessage(
      error.response?.data?.message ||
      "Logout failed"
    );
    } finally {
      setIsLoggingOut(false);
    }
  };
  
  return (
    // Dashboard header
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          BizTrack
        </Link>

        {/* Dashboard title */}
        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>

        {/* Logout button */}
      <div className="relative">
  <button
    onClick={HandleLogOut}
    type="button"
    disabled={isLoggingOut}
    className="cursor-pointer rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
  >
    {isLoggingOut ? "Logging out..." : "Logout"}
  </button>

  {logoutMessage && (
    <p
      className={`absolute left-0 top-full mt-2 whitespace-nowrap text-xs font-medium ${
        logoutMessage === "Logged out successfully"
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {logoutMessage}
    </p>
  )}
</div>
      </div>
    </header>
  );
};

export default DashboardHeader;