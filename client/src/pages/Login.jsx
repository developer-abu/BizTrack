import React from 'react'
import LoginFooter from '../components/login/LoginFooter'
import LoginInput from '../components/login/LoginInput'
import LoginHeader from '../components/login/LoginHeader'

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f4ed] px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <LoginHeader />
        <LoginInput />
        <LoginFooter />
      </div>
    </div>
  )
}

export default Login
