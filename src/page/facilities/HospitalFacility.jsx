'use client';
import React from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Gallery from '../../components/shared/Gallery';
import { Image } from 'lucide-react'; // ✅ Import added

const HospitalFacility = () => {
  const campusImages = [
    { original: '/asset/hospital-img/img1.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img2.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img3.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img4.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img5.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img6.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img7.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img8.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img9.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img10.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img11.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img12.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img13.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img14.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img15.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img16.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img17.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img18.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img19.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img20.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img21.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img22.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img23.webp', alt: 'Main building' },
    { original: '/asset/hospital-img/img24.webp', alt: 'Main building' },
  ];

  return (
    <>
      <PageBanner title="Hospital Facility" path={['Hospital Facility']} />

      <Gallery
        title="College & Other Facilities"
        subtitle="Explore glimpses of our campus, facilities, and learning environment."
        images={campusImages}
        Icon={Image}
      />
    </>
  );
};

export default HospitalFacility;
