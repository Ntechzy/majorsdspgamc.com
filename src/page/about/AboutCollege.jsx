import React from 'react'
import PageBanner from '../../components/shared/PageBanner'
import NewsletterSection from '../../components/shared/NewsletterSection'
import AchievementSection from '../../components/home/AchievementSection'
import WhyChooseUs from '../../components/about/WhyChooseUs'
import CollegeVideo from '../../components/about/CollegeVideo'
import JoinUs from '../../components/about/JoinUs'

const AboutCollege = () => {
  return (
    <>
  <PageBanner title="About College" path={["About College"]} />
  <WhyChooseUs/>
  <JoinUs/>
  <AchievementSection/>
  <CollegeVideo/>
  <NewsletterSection/>
  
    </>
  )
}

export default AboutCollege
