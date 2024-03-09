'use client';
import React from 'react';
import partner1 from '@/assets/images/partners/partner1.jpg';
import partner2 from '@/assets/images/partners/partner2.jpg';
import partner3 from '@/assets/images/partners/partner3.jpg';
import partner4 from '@/assets/images/partners/partner4.jpg';
import partner5 from '@/assets/images/partners/partner5.jpg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Partners = () => {
  return (
    <div className='pb-7'>
      <h4 className='mb-2 text-center md:mb-6'>Partners of Orthodonitics </h4>
      <Swiper
        spaceBetween={10}
        autoplay
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
        loop
        className='container flex justify-between'
      >
        <SwiperSlide>
          <Image
            src={partner1}
            className='mx-auto h-3 w-auto md:h-6'
            alt={partner1.name}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={partner2}
            className='mx-auto h-3 w-auto md:h-6'
            alt={partner2.name}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={partner3}
            className='mx-auto h-3 w-auto md:h-6'
            alt={partner3.name}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={partner4}
            className='mx-auto h-3 w-auto md:h-6'
            alt={partner4.name}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={partner5}
            className='mx-auto h-3 w-auto md:h-6'
            alt={partner5.name}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
