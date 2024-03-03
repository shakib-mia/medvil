'use client';
import React from 'react';
import first from './../../assets/images/hero_line1_image_1.png';
import second from './../../assets/images/hero_line3_image.png';
import badge from './../../assets/images/hero_badge.png';
import styles from './Header.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import Sponsors from '../Sponsors/Sponsors';

const Header = () => {
  return (
    <header
      className={`flex h-[60vh] items-center md:h-[80vh] xl:h-screen ${styles.backgroundImage}`}
    >
      <div className='container flex flex-col gap-1'>
        <h1 className='flex items-center justify-center text-center font-bold md:gap-2'>
          <span className=''>Maintain</span>
          <div className='flex w-1/2 items-center gap-0'>
            <Image src={first} className='w-3/4' alt='first banner' />{' '}
            <Image src={badge} className='h-auto w-1/4' alt='badge' />
          </div>
        </h1>
        <h1 className='text-center font-bold'>
          That <span className='text-primary'>Wonderful,</span>
        </h1>
        <h1 className='flex items-center justify-evenly gap-0 text-center font-bold sm:justify-center sm:gap-2 md:justify-center lg:gap-4'>
          <Image src={second} className='w-1/3 md:w-auto' alt='second banner' />{' '}
          <aside>Clean Smile</aside>
        </h1>

        <div className='ml-auto mt-2 w-full text-center md:mt-0 md:text-left lg:w-1/2'>
          <p className='mb-2 text-grey-2 md:mb-4 md:w-9/12'>
            We understand that seeking medical care can be a stressful emotional
            experience, and we strive to create a welcoming and supportive
            environment that puts our patients at ease and every one.
          </p>

          <Button className='mx-auto md:ml-0'>Book Appointment</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
