'use client';
import React from 'react';
import img6 from './../../assets/images/6352a0f3a3ecc1f81dff6dd1_Sponsor-Img-6.png';
import img5 from './../../assets/images/6352a0f6bf61d682874d1937_Sponsor-Img-5.png';
import img4 from './../../assets/images/6352a0f7f56e891c1e603cf7_Sponsor-Img-4.png';
import img3 from './../../assets/images/6352a0f991211c5fe86858c6_Sponsor-Img-3.png';
import img2 from './../../assets/images/6352a0fbef305ab20ede4aa8_Sponsor-Img-2.png';
import img1 from './../../assets/images/6352a0fd3d82991fbed3f46b_Sponsor-Img-1.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import styles from './Sponsors.module.css';
import { Autoplay } from 'swiper/modules';

const Sponsors = () => {
  const allSponsors = [
    { src: img6, alt: 'treva' },
    { src: img5, alt: 'kanba' },
    { src: img4, alt: 'hexlab' },
    { src: img3, alt: 'codelab' },
    { src: img2, alt: 'circle' },
    { src: img1, alt: 'zootv' },
  ];
  return (
    <section
      className='container flex flex-wrap justify-center gap-4 border-y border-primary-light py-3 md:justify-evenly md:py-8 xl:justify-between'
      id={styles.container}
    >
      <Swiper
        className='w-full'
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: allSponsors.length,
          },
        }}
      >
        {allSponsors.map(({ src, alt }) => (
          <SwiperSlide key={alt} className='xl:!w-auto'>
            <div className='mx-auto w-[110px] md:w-[160px] xl:w-[141px]'>
              <Image
                src={src}
                alt={alt}
                layout='responsive'
                width={160}
                height={90}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Sponsors;
