'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import feedback1 from '@/assets/images/doctors-feedbacks/Ellipse 3495.jpg';
import feedback2 from '@/assets/images/doctors-feedbacks/Ellipse 3495-1.jpg';
import feedback3 from '@/assets/images/doctors-feedbacks/Ellipse 3495-2.jpg';
import DoctorsFeedbackItem from '../DoctorsFeedbackItem/DoctorsFeedbackItem';

const DoctorFeedbacks = () => {
  const items = [
    {
      image: feedback1,
      name: 'Effie Gamez',
      designation: 'Doctor',
      text: `There are many variations of passages of Lorem Ipsum availa but the majority have suffered alteration in some form`,
    },
    {
      image: feedback2,
      name: 'Incent Rice',
      designation: 'Doctor',
      text: `There are many variations of passages of Lorem Ipsum availa but the majority have suffered alteration in some form`,
    },
    {
      image: feedback3,
      name: 'Donna Polk',
      designation: 'Doctor',
      text: `There are many variations of passages of Lorem Ipsum availa but the majority have suffered alteration in some form`,
    },
  ];

  return (
    <div className='container mt-[9.5rem]'>
      <Swiper
        slidesPerView={3}
        className='md:!overflow-visible'
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
            // initialSlide: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            // initialSlide: 3,
          },
        }}
      >
        {items.map((item, key) => (
          <SwiperSlide key={key}>
            <DoctorsFeedbackItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorFeedbacks;
