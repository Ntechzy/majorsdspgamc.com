import React from 'react'
import PageBanner from '../../components/shared/PageBanner'
import Gallery from '../../components/shared/Gallery'
import { Image } from 'lucide-react'
import NewsletterSection from '../../components/shared/NewsletterSection'


const ImageGallery = () => {
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
  const EducationImages = [
    {
      original: '/asset/gallery/img13.webp',
      alt: 'Main building',
    },
    {
      original: '/asset/gallery/img14.webp',
      alt: 'Library',
    },
    {
      original: '/asset/gallery/img15.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img16.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img17.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img18.webp',
      alt: 'Classroom',
    },
  ];
  const ceremonyImages = [
    {
      original: '/asset/gallery/img19.webp',
      alt: 'Main building',
    },
    {
      original: '/asset/gallery/img20.webp',
      alt: 'Library',
    },
    {
      original: '/asset/gallery/img21.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img22.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img23.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img24.webp',
      alt: 'Classroom',
    },
  ];
  const studentImages = [
    {
      original: '/asset/gallery/img25.webp',
      alt: 'Main building',
    },
    {
      original: '/asset/gallery/img26.webp',
      alt: 'Library',
    },
    {
      original: '/asset/gallery/img27.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img28.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img29.webp',
      alt: 'Classroom',
    },
    {
      original: '/asset/gallery/img30.webp',
      alt: 'Classroom',
    },
  ];
  return (
    <>
      <PageBanner title="Image Gallery" path={['Image Gallery']} />
      <Gallery
        title="Our Campus"
        subtitle="Discover the vibrant spaces where learning, growth, and innovation thrive."
        images={campusImages}
        Icon={Image}
      />
      <Gallery
        title="Education"
        subtitle="A glimpse into our academic excellence, classrooms, and practical learning sessions."
        images={EducationImages}
        Icon={Image}
      />
      <Gallery
        title="Ceremony"
        subtitle="Celebrating our proud moments, traditions, and milestones together."
        images={ceremonyImages}
        Icon={Image}
      />
       <Gallery
        title="Student"
        subtitle="Catch the energy, enthusiasm, and everyday life of our student community."
        images={studentImages}
        Icon={Image}
      />
      <NewsletterSection/>
    </>
  )
}

export default ImageGallery
