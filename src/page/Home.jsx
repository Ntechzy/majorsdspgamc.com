import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import AboutSection from '../components/home/AboutSection'
import VideoSection from '../components/home/VideoSection'
import StatsSection from '../components/home/StatsSection'
import CollegeAffliliation from '../components/home/CollegeAffiliationMarquee'
import TestimonialsSection from '../components/home/TestimonialsSlider'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <FeaturesSection/>
    <AboutSection/>
    <StatsSection/>
    <VideoSection/>
    <TestimonialsSection/>
    <CollegeAffliliation/>
    </>
  )
}

export default Home
