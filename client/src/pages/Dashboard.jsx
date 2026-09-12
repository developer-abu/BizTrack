import React from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardStats from '../components/dashboard/DashboardStats.jsx'
import QuickActions from '../components/dashboard/QuickActions '
import RecentSales from '../components/dashboard/RecentSales .jsx'
import AccountActions from '../components/dashboard/AccountActions .jsx'




const Dashboard = () => {
  return (
    <div>
      <DashboardHeader/>
      <DashboardStats/>
      <QuickActions/>
      <RecentSales/>
      <AccountActions/>

    </div>
  )
}

export default Dashboard
