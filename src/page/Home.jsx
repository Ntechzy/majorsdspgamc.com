import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import AboutSection from '../components/home/AboutSection'
import VideoSection from '../components/home/VideoSection'
import StatsSection from '../components/home/StatsSection'
import CollegeAffliliation from '../components/home/CollegeAffiliationMarquee'
import AchievementsSection from '../components/home/AchievementSection'
import CardHoverEffect from '../components/home/CardHoverEffectDemo'
import TestimonialsVideos from '../components/home/VideoTestimonials'
import InstagramPostGrid from '../components/home/InstagramPostGrid'
import FloatingStatsSection from '../components/home/FloatingStatsSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <CardHoverEffect />
      {/* <FloatingStatsSection/> */}
      <AchievementsSection />
      <VideoSection />
      <TestimonialsVideos />
      <CollegeAffliliation />
      <InstagramPostGrid/>
    </>
  )
}

export default Home
