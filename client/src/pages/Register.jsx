import React from 'react'
import RegisterHeader from '../components/register/RegisterHeader'
import RegisterForm from '../components/register/RegisterForm'
import AuthFooter from '../components/register/AuthFooter'

const Register = () => {
  return (
    <div  className="flex min-h-screen items-center justify-center bg-[#f7f4ed] px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">

<RegisterHeader/>
<RegisterForm/>
<AuthFooter/>
      </div>
    </div>
  )
}

export default Register
