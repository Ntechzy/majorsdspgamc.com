import React from 'react'
import PageBanner from '../../components/shared/PageBanner'
import Gallery from '../../components/shared/Gallery'

const CollegeFacilities = () => {
   const campusImages = [
    {
      original: '/asset/gallery/img1.webp',
      alt: 'Main building',
    },
    {
      original: '/asset/gallery/img2.webp',
      alt: 'Library',
    },
    {
      original: '/asset/gallery/img3.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img4.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img5.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img6.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img7.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img8.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img9.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img10.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img11.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img12.webp',
      alt: 'Classroom',
    },
  ];
  return (
    <>
    <PageBanner title="College & Other Facilities" path={['College & Other Facilities']} />
       <Gallery
        title="Our Campus"
        subtitle="Explore glimpses of our campus, facilities, and learning environment."
        images={campusImages}
        Icon={Image}
      />
    </>
  )
}

export default CollegeFacilities
