'use client';
import React, { useEffect } from 'react';
import specialist1 from '../../assets/images/specialists/Rectangle 9444.png';
import specialist2 from '../../assets/images/specialists/Rectangle 9444-1.png';
import specialist3 from '../../assets/images/specialists/Rectangle 9444-2.png';
import specialist4 from '../../assets/images/specialists/Rectangle 9444-3.png';
import Specialist from '../Specialist/Specialist';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const Specialists = () => {
  const specialists = [
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist1,
      designation: 'Cardiologist',
    },
    {
      name: 'Dr. Michel Smith',
      image: specialist2,
      designation: 'Oncologist',
    },
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist3,
      designation: 'Gynaecologist',
    },
    {
      name: 'Dr. Luther Mathews',
      image: specialist4,
      designation: 'Neurologist',
    },
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist1,
      designation: 'Cardiologist',
    },
    {
      name: 'Dr. Michel Smith',
      image: specialist2,
      designation: 'Oncologist',
    },
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist3,
      designation: 'Gynaecologist',
    },
    {
      name: 'Dr. Luther Mathews',
      image: specialist4,
      designation: 'Neurologist',
    },
  ];

  return (
    <section className='pb-10'>
      <h3 className='text-center text-secondary'>
        Meet Our <span className='text-primary'>Specialists</span>
      </h3>
      <p className='mx-auto px-2 text-center text-grey-2 lg:w-1/2 xl:w-1/3'>
        Get a full view so you know where to save. Track spending, detect fraud
        and keep tabs on rising lorem ipsum dolor sit.
      </p>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        className='container !p-3'
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {specialists.map((specialist, key) => (
          <SwiperSlide key={key}>
            <Specialist {...specialist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Specialists;
