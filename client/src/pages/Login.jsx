import React from 'react'
import LoginFooter from '../components/login/LoginFooter'
import LoginInput from '../components/login/LoginInput'

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">

<LoginInput/>
<LoginFooter/>
      </div>
    </div>
  )
}

export default Login
