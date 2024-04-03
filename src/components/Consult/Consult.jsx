import React from 'react';
import consultSvg from '@/assets/images/consult-svg.png';
import { FaRegCheckCircle } from 'react-icons/fa';
import Button from '../Button/Button';
import aboutImage from '@/assets/images/about-img.png';
import aboutImage2 from '@/assets/images/about-img-2.jpg';
import Image from 'next/image';

const Consult = () => {
  return (
    <div
      className='bg-no-repeat'
      style={{
        backgroundImage: `url(${consultSvg.src})`,
        backgroundPositionX: '-15%',
      }}
    >
      <div className='container grid grid-cols-1 items-center gap-10 py-[14rem] xl:grid-cols-2'>
        <aside className='relative'>
          <div className='absolute -left-1 -top-[10rem] w-[387px] rounded bg-green bg-opacity-90 p-4 text-white shadow-[10px_12px_12px_rgba(10.999999999999973_188.00000000000006_92.00000000000013_0.17)] xl:left-0'>
            <div className='flex items-center gap-2'>
              <h1>12</h1>
              <h5>{"Years'"} Experience in Medvil</h5>
            </div>
            <h4>We have lot’s of success Stories</h4>
          </div>
          <Image
            src={aboutImage}
            alt='about image'
            width={468}
            height={580}
            // layout='responsive'
            className='mx-auto xl:mx-0 xl:ml-auto'
          />
          <Image
            src={aboutImage2}
            alt='about image'
            width={198}
            height={185}
            // layout='responsive'
            className='absolute -bottom-5 -z-10 xl:left-0'
          />
        </aside>
        <aside>
          <p className='text-lg font-medium text-[#3F3A64]'>
            Medvil is the best solution
          </p>
          <h3 className='mb-3 mt-2 text-[#3F3A64]'>
            Consult with our <span className='text-green'>best Doctor</span> for
            Treatment
          </h3>

          <p className='text-[#7d7d7d]'>
            There are many variations of pass of Lorem Ipsum available, but the
            majority have suffered alterati in some for by injected humour or
            randomised words which {"don't"} look even slightly believable. If
            you are going to use a passage.
          </p>

          <div className='mt-[2rem] grid grid-cols-2'>
            <aside className='flex flex-col gap-3'>
              <div className='flex items-center gap-1'>
                <FaRegCheckCircle className='text-green' />
                <h6 className='text-[#3F3A64]'>Conducts eye health checkups</h6>
              </div>

              <div className='flex items-center gap-1'>
                <FaRegCheckCircle className='text-green' />
                <h6 className='text-[#3F3A64]'>Opperating & Delivery rooms</h6>
              </div>

              <div className='flex items-center gap-1'>
                <FaRegCheckCircle className='text-green' />
                <h6 className='text-[#3F3A64]'>Best lasik treatment</h6>
              </div>
            </aside>

            <aside className='flex flex-col gap-3'>
              <div className='flex items-center gap-1'>
                <FaRegCheckCircle className='text-green' />
                <h6 className='text-[#3F3A64]'>Qualified Team of professor</h6>
              </div>

              <div className='flex items-center gap-1'>
                <FaRegCheckCircle className='text-green' />
                <h6 className='text-[#3F3A64]'>Modern Anesthesia</h6>
              </div>

              <div className='flex items-center gap-1'>
                <FaRegCheckCircle className='text-green' />
                <h6 className='text-[#3F3A64]'>Expert Doctors</h6>
              </div>
            </aside>
          </div>
          <Button className='mt-2 !rounded-full !border-green !bg-green hover:!bg-transparent hover:!text-green'>
            More About Us
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default Consult;
