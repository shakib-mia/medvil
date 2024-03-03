'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import bg from '../../assets/images/bg-image.png';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import garcia from '../../assets/images/testimonial/garcia.jpg';
import jacklin from '../../assets/images/testimonial/jacklin.jpg';

const Feedback = () => {
  const feedbacks = [
    {
      heading: 'Great Quality!',
      comment:
        'Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.',
      name: 'Justin L. Garcia',
      image: garcia,
      designation: 'Co-Founder',
    },

    {
      heading: 'Great Quality!',
      comment:
        'Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.',
      name: 'Justin L. Jacklin',
      image: jacklin,
      designation: 'Doctor',
    },
    {
      heading: 'Great Quality!',
      comment:
        'Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.',
      name: 'Justin L. Jacklin',
      image: jacklin,
      designation: 'Doctor',
    },
    {
      heading: 'Great Quality!',
      comment:
        'Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.',
      name: 'Justin L. Jacklin',
      image: jacklin,
      designation: 'Doctor',
    },
  ];

  return (
    <div className='container py-10'>
      <h3 className='text-center text-secondary'>
        Patients <span className='text-primary'>Feedback</span>
      </h3>

      <p className='mx-auto text-center text-base text-grey-2 md:px-3 lg:w-1/2'>
        Get a full view so you know where to save. Track spending, detect fraud
        and keep tabs on rising lorem ipsum dolor sit.
      </p>

      <Swiper
        spaceBetween={24}
        className='container mt-6'
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
      >
        {' '}
        {feedbacks.map((feedback, key) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${bg.src})` }}
            className='rounded-lg'
            key={key}
          >
            <FeedbackItem {...feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
