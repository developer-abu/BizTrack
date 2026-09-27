import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './../components/Layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import CallToActionSection from '../components/home/CallToActionSection';
import Footer from '../components/Layout/Footer';


const Home = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Helmet>
        <title>Home | BizTrack</title>
      </Helmet>
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
