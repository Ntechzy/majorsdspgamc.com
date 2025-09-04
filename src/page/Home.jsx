import React from "react";
import { Title, Meta, Link } from "react-head";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import AboutSection from "../components/home/AboutSection";
import VideoSection from "../components/home/VideoSection";
import StatsSection from "../components/home/StatsSection";
import CollegeAffliliation from "../components/home/CollegeAffiliationMarquee";
import AchievementsSection from "../components/home/AchievementSection";
import CardHoverEffect from "../components/home/CardHoverEffectDemo";
import TestimonialsVideos from "../components/home/VideoTestimonials";
import InstagramPostGrid from "../components/home/InstagramPostGrid";

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Title>Major S. D. Singh Ayurvedic Medical College | Farrukhabad, UP</Title>
      <Meta
        name="description"
        content="Established in 2006, Major S. D. Singh Ayurvedic Medical College & Hospital in Farrukhabad, Uttar Pradesh offers BAMS, MD/MS (Ayurveda) programs with modern facilities and NEET-based admissions."
      />
      <Meta
        name="keywords"
        content="Ayurvedic college Farrukhabad, BAMS college UP, MD Ayurveda UP, Ayurvedic medical college Uttar Pradesh"
      />
      <Link rel="canonical" href="https://majorsdspgamc.com/" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <Meta property="og:title" content="Major S. D. Singh Ayurvedic Medical College" />
      <Meta
        property="og:description"
        content="A reputed Ayurvedic institution in Farrukhabad offering BAMS and MD/MS programs, approved by NCISM with excellent infrastructure."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://majorsdspgamc.com/" />
      <Meta property="og:image" content="https://majorsdspgamc.com/og-image.jpg" />

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Major S. D. Singh Ayurvedic Medical College" />
      <Meta
        name="twitter:description"
        content="Join the leading Ayurvedic college in UP established in 2006. Programs include BAMS & MD/MS with modern campus and NEET-based admission."
      />
      <Meta name="twitter:image" content="https://majorsdspgamc.com/twitter-image.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          "name": "Major S. D. Singh Ayurvedic Medical College & Hospital",
          "url": "https://majorsdspgamc.com/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bewar Road, Fatehgarh, Farrukhabad",
            "addressLocality": "Farrukhabad",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "209601",
            "addressCountry": "IN"
          },
          "foundingDate": "2006",
          "department": [
            {
              "@type": "EducationalOrganization",
              "name": "Undergraduate – BAMS"
            },
            {
              "@type": "EducationalOrganization",
              "name": "Postgraduate – MD/MS (Ayurveda)"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4",
            "reviewCount": "15"
          }
        }
        `}
      </script>

      {/* Page Sections */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <CardHoverEffect />
      <AchievementsSection />
      <VideoSection />
      <TestimonialsVideos />
      <CollegeAffliliation />
      <InstagramPostGrid />
    </>
  );
};

export default Home;
