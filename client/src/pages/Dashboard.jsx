import React from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardStats from '../components/dashboard/DashboardStats.jsx'
import QuickActions from '../components/dashboard/QuickActions '
import RecentSales from '../components/dashboard/RecentSales .jsx'
import AccountActions from '../components/dashboard/AccountActions .jsx'
import ShopDetails from '../components/dashboard/ShopDetails.jsx'




const Dashboard = () => {
  return (
    <div>
      <DashboardHeader/>
      <ShopDetails/>
      <DashboardStats/>
      <QuickActions/>
      <RecentSales/>
      <AccountActions/>

    </div>
  )
}

export default Dashboard
