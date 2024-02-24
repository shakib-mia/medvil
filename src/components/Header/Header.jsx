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
    <header className={`flex h-screen items-center ${styles.backgroundImage}`}>
      <div className='container'>
        <h1 className='flex items-center justify-center gap-4 text-center font-bold'>
          Maintain
          <div className='flex gap-0'>
            <Image src={first} alt='first banner' />{' '}
            <Image src={badge} alt='badge' />
          </div>
        </h1>
        <h1 className='text-center font-bold'>
          That <span className='text-primary'>Wonderful,</span>
        </h1>
        <h1 className='flex items-center justify-center gap-4 text-center font-bold'>
          <Image src={second} alt='second banner' /> Clean Smile
        </h1>

        <div className='ml-auto w-1/2'>
          <p className='mb-4 w-9/12 text-grey-2'>
            We understand that seeking medical care can be a stressful emotional
            experience, and we strive to create a welcoming and supportive
            environment that puts our patients at ease and every one.
          </p>

          <Button>Book Appointment</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
