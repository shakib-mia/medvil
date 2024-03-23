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
        Happy <span className='text-primary'>Voices</span>
      </h3>

      <p className='mx-auto mt-2 text-center text-base leading-6 text-grey-2 md:px-3 lg:w-7/12'>
        Discover what our valued clients have to say about their experience at
        Medvil Dental Hospital. Read heartfelt testimonials showcasing the
        transformative impact of our care. Your smiles inspire us, and your
        words reflect the true essence of our commitment to exceptional
        dentistry.
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
