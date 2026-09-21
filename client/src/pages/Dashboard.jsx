import React from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardStats from '../components/dashboard/DashboardStats.jsx'
import QuickActions from '../components/dashboard/QuickActions '
import RecentSales from '../components/dashboard/RecentSales .jsx'
import AccountActions from '../components/dashboard/AccountActions .jsx'
import ShopDetails from '../components/dashboard/ShopDetails.jsx'
import { useLocation } from 'react-router-dom'




const Dashboard = () => {
  const location = useLocation();
  const shop = location.state?.shop
  return (
    <div>
      <DashboardHeader/>
      <ShopDetails shop={shop}/>
      <DashboardStats/>
      <QuickActions/>
      <RecentSales/>
      <AccountActions/>

    </div>
  )
}

export default Dashboard
