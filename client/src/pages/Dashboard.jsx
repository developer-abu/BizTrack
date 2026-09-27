import React from 'react'
import { Helmet } from 'react-helmet-async'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import QuickActions from '../components/dashboard/QuickActions '
import AccountActions from '../components/dashboard/AccountActions .jsx'
import ShopDetails from '../components/dashboard/ShopDetails.jsx'
import api from '../api/axios.js'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from "react-router-dom";
const Dashboard = () => {
const location = useLocation();

  const [shop, setShop] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const response = await api.get("/me");

        setShop(response.data.data);
      } catch (error) {
        console.error("Failed to fetch shop details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShop();
  }, [location.key]);


  return (
    <div className="min-h-screen bg-[#f7f4ed] pb-12">
      <Helmet>
        <title>Dashboard | BizTrack</title>
      </Helmet>
      <DashboardHeader/>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
     {isLoading ? (
  <p className="py-6 text-center">Loading shop details...</p>
) : (
  <ShopDetails shop={shop} />
)}
        <QuickActions/>
        <AccountActions/>
      </main>

    </div>
  )
}

export default Dashboard
