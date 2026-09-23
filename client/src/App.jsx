import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AddProduct from './pages/AddProduct'
import VerifyEmail from './pages/VerifyEmail'
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import LoginRegisterRouteAccess from './protectedRoute/LoginRegisterRouteAccess'
import SeeProduct from './pages/SeeProduct'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
  
    <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/products/create' element={<AddProduct/>}/>
        <Route path='/see-products' element={<SeeProduct/>}/>
    </Route>

    <Route element={<LoginRegisterRouteAccess/>}>
      <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    </Route>
 
    <Route path="/verify-email" element={<VerifyEmail/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
