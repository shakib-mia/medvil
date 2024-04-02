'use client';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import plastic from '@/assets/images/plastic-surgery.jpg';
import nephrology from '@/assets/images/nephrology.png';
import cardiology from '@/assets/images/cardiology.png';
import Image from 'next/image';
import Button from '../Button/Button';
import videoPlaceholder from '@/assets/images/video-placeholder.jpg';
import Video from '../Video/Video';
import consultSvg from '@/assets/images/consult-svg.png';

const Services2 = () => {
  const items = [
    {
      image: plastic.src,
      heading: 'Plastic Surgery',
      text: 'Get some soul healing Health care and guidance for your future career and vocational directions.',
    },

    {
      image: nephrology.src,
      heading: 'Nephology',
      text: 'Get some soul healing Health care and guidance for your future career and vocational directions.',
    },

    {
      image: cardiology.src,
      heading: 'Cardiology',
      text: 'Get some soul healing Health care and guidance for your future career and vocational directions.',
    },
  ];

  return (
    <div className='pb-10'>
      <p className='text-center text-lg font-medium'>Our Services</p>
      <h3 className='text-center text-[#3F3A64]'>
        Medical <span className='text-green'>Shaped</span> Solution
      </h3>

      <div className='container mt-6 grid grid-cols-3 gap-3'>
        {items.map(({ image, heading, text }, key) => (
          <div className='p-5 shadow-[0_0_80px_#CCCDCD40]' key={key}>
            <Image src={image} alt={heading} width={80} height={80} />
            <h4 className='mb-2 mt-[2rem] text-[#3F3A64]'>{heading}</h4>
            <p className='mb-[2rem] text-grey-2'>{text}</p>
            <Button className='!rounded-full !border-[#3F3A64] !bg-[#3F3A64] hover:!border-green hover:!bg-green hover:!text-white'>
              Read More
            </Button>
          </div>
        ))}
      </div>

      <div className='relative overflow-hidden py-10'>
        <Image
          className='absolute right-0 top-0 rotate-45'
          src={consultSvg.src}
          width={520}
          height={500}
          alt='consult-svg'
        />
        <Video
          placeholder={videoPlaceholder}
          videoLink={
            'https://www.youtube.com/embed/lw7xIB0kPCo?si=UdUR3jai2_hGbI6y'
          }
        />
      </div>

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={24}
        modules={[Pagination]}
        className='container'
      >
        <SwiperSlide>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima laborum blanditiis magni quas deserunt dolorem, perspiciatis,
            amet voluptatibus dolorum eligendi nesciunt fugit quisquam illo
            voluptate tempora eum, ab veniam?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima laborum blanditiis magni quas deserunt dolorem, perspiciatis,
            amet voluptatibus dolorum eligendi nesciunt fugit quisquam illo
            voluptate tempora eum, ab veniam?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima laborum blanditiis magni quas deserunt dolorem, perspiciatis,
            amet voluptatibus dolorum eligendi nesciunt fugit quisquam illo
            voluptate tempora eum, ab veniam?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima laborum blanditiis magni quas deserunt dolorem, perspiciatis,
            amet voluptatibus dolorum eligendi nesciunt fugit quisquam illo
            voluptate tempora eum, ab veniam?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima laborum blanditiis magni quas deserunt dolorem, perspiciatis,
            amet voluptatibus dolorum eligendi nesciunt fugit quisquam illo
            voluptate tempora eum, ab veniam?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima laborum blanditiis magni quas deserunt dolorem, perspiciatis,
            amet voluptatibus dolorum eligendi nesciunt fugit quisquam illo
            voluptate tempora eum, ab veniam?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima laborum blanditiis magni quas deserunt dolorem, perspiciatis,
            amet voluptatibus dolorum eligendi nesciunt fugit quisquam illo
            voluptate tempora eum, ab veniam?
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Services2;
