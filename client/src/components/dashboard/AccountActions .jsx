import React, { useState } from "react";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";

const AccountActions = () => {

const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

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

const handleDeleteAccount = async () => {
  const confirmation = confirm(
    "Are you sure you want to permanently delete your account and all related data? This action cannot be undone."
  );
setIsDeletingAccount(true)
  if (!confirmation) {
    return;
  }

  try {
    const response = await api.delete("/delete");

    if (response.data.success) {
      navigate("/login")
    }

  } catch (error) {
   

    setLogoutMessage(
      error.response?.data?.message ||
        "Failed to delete account"
    );
  }finally{
    setIsDeletingAccount(false)
  }
};

  return (
    // Account actions section
    <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
      {/* Section heading */}
      <h2 className="text-xl font-bold text-gray-900">
        Account
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Manage your account.
      </p>

      {/* Account buttons */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">

        {/* Logout */}
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
        {/* Permanent account deletion */}
      

        <button
          type="button"
          onClick={handleDeleteAccount}
          disabled={isDeletingAccount}
          className="cursor-pointer rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
        >
          {isDeletingAccount ? "Deleting Account..." : "Delete Account"}
        </button>

      </div>
    </section>
  );
};

export default AccountActions;