import React from 'react';
import heading from '@/assets/images/service-details-image/young-female-doctor-posing-corridor-hospital 1.jpg';
import quote from '@/assets/images/blog-details/unsplash_rAyCBQTH7ws.png';
import left from '@/assets/images/service-details-image/unsplash_7jjnJ-QA9fY.jpg';
import right from '@/assets/images/service-details-image/unsplash_NSBxHRFCvzc.jpg';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Link from 'next/link';

const ServiceDetails = () => {
  return (
    <>
      <Image src={heading} alt='blog-heading' />
      <h5 className='mb-2 mt-3 text-secondary'>
        Wide range of facilities and doctor services.
      </h5>

      <p className='text-grey-2'>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which {"don't"} look even slightly believable. If you
        are going to use a passage of Lorem Ipsum, you need to be sure there{' '}
        {"isn't"} anything embarrassing hidden
      </p>

      <h5 className='mb-2 mt-4 text-secondary'>
        Cardiology place medical hospital center.
      </h5>

      <p className='text-grey-2'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its It is a long established
        fact that a reader will be distracted.
      </p>
      <ul className='mt-3 flex flex-col gap-2 text-grey-2'>
        <li className='flex items-center gap-2'>
          <FaCheck className='text-primary' /> It is a long established fact
          that a reader will be distracted.
        </li>
        <li className='flex items-center gap-2'>
          <FaCheck className='text-primary' />
          It is a long established fact that a reader will be distracted by .
        </li>
        <li className='flex items-center gap-2'>
          <FaCheck className='text-primary' />
          It is a long established fact that a reader will be distracted by .
        </li>
      </ul>

      <div className='my-4 grid grid-cols-2 gap-3'>
        <Image className='h-full w-full' src={left} alt='left' />
        <Image className='h-full w-full' src={right} alt='right' />
      </div>

      <h5 className='mb-2 mt-4 text-secondary'>
        Wide range of facilities and Doctor services.
      </h5>

      <p className='text-grey-2'>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which {"don't"} look.
      </p>
      <ul className='mt-3 flex flex-col gap-2 text-grey-2'>
        <li className='flex items-center gap-2'>
          <FaCheck className='text-primary' /> It is a long established fact
          that a reader will be distracted.
        </li>
        <li className='flex items-center gap-2'>
          <FaCheck className='text-primary' />
          It is a long established fact that a reader will be distracted by .
        </li>
      </ul>

      <div className='mt-4 flex rounded-xl bg-grey-5 p-2 lg:p-3'>
        <div className='flex w-5/12 gap-1 border-r border-grey-3'>
          <FaArrowLeftLong className='text-xs lg:mt-[0.25rem] lg:text-base' />
          <Link href={'/contact'} className='text-secondary'>
            <p className='text-xs md:text-base'>Previous Services</p>
            <p className='el-messiri mt-1 text-lg font-semibold'>Contact </p>
          </Link>
        </div>
        <div className='flex w-7/12 justify-end gap-1 text-right'>
          <Link href={'/doctor-details'} className='text-secondary'>
            <p className='text-sm md:text-base'>Next Services</p>
            <p className='el-messiri mt-1 text-lg font-semibold'>
              Doctor Details
            </p>
          </Link>
          <FaArrowRightLong className='text-xs lg:mt-[0.25rem] lg:text-base' />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
