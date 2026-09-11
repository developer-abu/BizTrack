import React from 'react'
import Navbar from './../components/Layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import CallToActionSection from '../components/home/CallToActionSection';
import Footer from '../components/Layout/Footer';


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <CallToActionSection/>
      <Footer/>
    </div>
  )
}

export default Home
