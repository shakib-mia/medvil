'use client';
import React, { useState } from 'react';
import healthySmilesBg from '../../assets/images/healthy-smiles-bg.png';
import healthySmiles from '../../assets/images/healthy-smiles.png';
import Image from 'next/image';
import Button from '../Button/Button';
import play from '../../assets/icons/play.jpg';
import Stat from '../Stat/Stat';

const HealthySmiles = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className='relative h-full'>
      <Image
        src={healthySmilesBg}
        alt='healthy smiles bg'
        className='absolute left-0 top-0 z-0 h-full w-full'
      />

      <div className='container relative z-10 h-full w-full py-4 md:py-9'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:gap-0'>
          <aside className='relative mx-auto h-fit w-fit md:mx-0'>
            <Image src={healthySmiles} alt='healthy smiles' />
            <div className='absolute bottom-1 right-6 h-[3.75rem] w-[3.75rem] overflow-visible rounded-full md:bottom-3 md:right-[5.875rem]'>
              <div className='relative'>
                <div className='absolute left-0 top-0 z-0 h-full w-full animate-ping rounded-full bg-white opacity-30'></div>
                <label htmlFor='video-check'>
                  <Image
                    src={play}
                    alt='play'
                    className='relative z-0 cursor-pointer rounded-full'
                  />
                </label>
                <input
                  type='checkbox'
                  name=''
                  id='video-check'
                  className='hidden'
                  onChange={(e) => setShowVideo(e.target.checked)}
                />
              </div>
            </div>

            {showVideo && (
              <div className='fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black-2 bg-opacity-30 backdrop-blur'>
                <div className='relative h-1/2 w-1/2'>
                  <button
                    onClick={() => setShowVideo(false)}
                    className='absolute -right-3 -top-3 text-3xl text-black-1'
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
          </aside>
          <aside className='text-center md:text-left'>
            <h3 className='text-secondary'>
              This is where <span className='text-primary'>healthy</span> smiles
              in <span className='text-primary'>Medvil</span> begin.
            </h3>
            <p className='mb-2 text-base text-grey-2'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <p className='text-base text-grey-2'>
              We encourage all of our patients to visit us at least once every
              six months. During these routine appointments, we will provide a
              thorough dental cleaning and exam to make
            </p>

            <ul className='mx-4 my-3 flex flex-col gap-2 font-medium text-secondary lg:mx-0'>
              <li className='flex gap-1'>
                <div className='flex h-3 w-3 items-center justify-center rounded-full bg-primary text-white'>
                  &#x2713;
                </div>{' '}
                Trust care is health care,but easy.
              </li>
              <li className='flex gap-1'>
                <div className='flex h-3 w-3 items-center justify-center rounded-full bg-primary text-white'>
                  &#x2713;
                </div>{' '}
                Top consulted specialist.
              </li>
              <li className='flex gap-1'>
                <div className='flex h-3 w-3 items-center justify-center rounded-full bg-primary text-white'>
                  &#x2713;
                </div>{' '}
                Feel like Home Services
              </li>
            </ul>

            <Button className='mx-auto md:mx-0'>More About Us</Button>
          </aside>
        </div>
        <Stat />
      </div>
    </section>
  );
};

export default HealthySmiles;
