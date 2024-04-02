'use client';
import React, { useState } from 'react';
import headerBg from '@/assets/images/header-bg.jpg';
import doctor from '@/assets/images/doctor.png';
import Image from 'next/image';
import Button from '../Button/Button';
import { FaPlayCircle } from 'react-icons/fa';

const Header2 = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className='h-[140vh] bg-[size:auto_100%] bg-no-repeat xl:h-[75vh] xl:bg-[size:100%_100%]'
      style={{ backgroundImage: `url(${headerBg.src})` }}
    >
      <div className='container relative h-full overflow-hidden'>
        <div className='flex h-[85%] flex-wrap gap-3 py-3 text-lg text-green xl:h-full xl:items-end xl:justify-between'>
          <div className='h-fit w-full pb-0 pt-5 xl:w-4/6 xl:py-10 xl:pb-5'>
            <div className='mb-2 flex items-center gap-2'>
              👋
              <aside className='text-lg font-medium'>Hi, It’s our Medvil</aside>
            </div>

            <h2 className='font-bold capitalize text-[#3F3A64]'>
              High-quality medical care for everybody
            </h2>
            <p className='text-lg text-grey-2 xl:w-9/12'>
              In order to make your life better and happier, we are dedicated to
              giving you the greatest medical and healthcare services available.
            </p>

            <div className='mt-[2rem] flex flex-col gap-[2rem] xl:flex-row'>
              <Button className='w-full !rounded-full !border-green !bg-green hover:!bg-white hover:!text-green'>
                Explore More
              </Button>

              <Button
                className='flex w-full items-center gap-2 !rounded-full !border-green !bg-transparent !text-green hover:!bg-white hover:!text-green'
                onClick={() => setShowVideo(true)}
              >
                <FaPlayCircle />
                Explore More
              </Button>
            </div>
          </div>
          <aside className='h-0 w-full overflow-hidden xl:h-full xl:w-2/6'>
            <Image
              src={doctor}
              className='absolute bottom-0 left-0 right-0 mx-auto w-[30rem] xl:left-auto xl:ml-auto xl:w-[26.125rem]'
              alt='doctor'
            />
          </aside>
        </div>
      </div>

      {showVideo && (
        <div className='fixed left-0 top-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black-2 bg-opacity-30 backdrop-blur'>
          <div className='relative w-11/12 xl:h-1/2 xl:w-1/2'>
            <button
              onClick={() => setShowVideo(false)}
              className='absolute -right-3 -top-3 text-3xl text-white'
            >
              &times;
            </button>
            <iframe
              className='h-full w-full'
              src='https://www.youtube.com/embed/T7MelADka-I?si=OaPUuC6YvfhIuCQf'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header2;
