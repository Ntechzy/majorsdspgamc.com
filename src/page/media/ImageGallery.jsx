import React from 'react'
import PageBanner from '../../components/shared/PageBanner'
import Gallery from '../../components/shared/Gallery'
import { Image } from 'lucide-react'


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
        subtitle="Explore glimpses of our campus, facilities, and learning environment."
        images={campusImages}
        Icon={Image}
      />
      <Gallery
        title="Education"
        subtitle="Explore glimpses of our campus, facilities, and learning environment."
        images={EducationImages}
        Icon={Image}
      />
      <Gallery
        title="Ceremony"
        subtitle="Explore glimpses of our campus, facilities, and learning environment."
        images={ceremonyImages}
        Icon={Image}
      />
       <Gallery
        title="Student"
        subtitle="Explore glimpses of our campus, facilities, and learning environment."
        images={studentImages}
        Icon={Image}
      />
    </>
  )
}

export default ImageGallery
