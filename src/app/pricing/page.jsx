'use client';
import Layouts from '@/components/Layouts/Layouts';
import Plan from '@/components/Plan/Plan';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const page = () => {
  const plans = [
    {
      planName: 'Silver',
      price: '0.0',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      offers: [
        {
          text: 'Suite room (for 4 person)',
          available: true,
        },
        {
          text: '2 meals a day',
          available: true,
        },
        {
          text: 'Doctor consultation per week',
          available: false,
        },
        {
          text: 'Morning & evening checkup',
          available: false,
        },
        {
          text: 'Diagnosis of disease complaints',
          available: false,
        },
        {
          text: 'Laboratory examination',
          available: false,
        },
        {
          text: 'unlimited user',
          available: false,
        },
        {
          text: 'Additional help tools',
          available: false,
        },
      ],
    },

    {
      planName: 'Gold',
      price: '40.00',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      offers: [
        {
          text: 'Suite room (for 4 person)',
          available: true,
        },
        {
          text: '2 meals a day',
          available: true,
        },
        {
          text: 'Doctor consultation per week',
          available: true,
        },
        {
          text: 'Morning & evening checkup',
          available: true,
        },
        {
          text: 'Diagnosis of disease complaints',
          available: false,
        },
        {
          text: 'Laboratory examination',
          available: false,
        },
        {
          text: 'unlimited user',
          available: false,
        },
        {
          text: 'Additional help tools',
          available: false,
        },
      ],
    },

    {
      planName: 'Diamond',
      price: '90.00',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      offers: [
        {
          text: 'Suite room (for 4 person)',
          available: true,
        },
        {
          text: '2 meals a day',
          available: true,
        },
        {
          text: 'Doctor consultation per week',
          available: true,
        },
        {
          text: 'Morning & evening checkup',
          available: true,
        },
        {
          text: 'Diagnosis of disease complaints',
          available: true,
        },
        {
          text: 'Laboratory examination',
          available: true,
        },
        {
          text: 'unlimited user',
          available: true,
        },
        {
          text: 'Additional help tools',
          available: true,
        },
      ],
    },
  ];

  return (
    <Layouts title='Pricing'>
      <div className='container py-4 text-justify text-secondary md:py-6 lg:py-10'>
        <p className='text-center'>Price</p>
        <h4 className='mt-2 text-center text-xl font-bold md:text-2xl xl:text-5xl'>
          Price <span className='text-primary'>Plans</span>
        </h4>

        <Swiper
          spaceBetween={24}
          className='mt-2 md:mt-4 lg:mt-6'
          // slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              initialSlide: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              // initialSlide={1}
            },
          }}
          modules={[Pagination]}
        >
          {plans.map((plan, key) => (
            <SwiperSlide key={key}>
              <Plan {...plan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layouts>
  );
};

export default page;
