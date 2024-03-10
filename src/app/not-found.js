'use client';
import BreadCumb from '@/components/BreadCumb/BreadCumb';
import Layouts from '@/components/Layouts/Layouts';
import React from 'react';
import notFoundImage from '../assets/images/404.png';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';
import { GrHomeRounded } from 'react-icons/gr';

const NotFound = () => {
  const router = useRouter();
  return (
    <Layouts title='404'>
      {/* <BreadCumb>
        <h3>404</h3>
        <p>Home &raquo; 404</p>
      </BreadCumb> */}

      <Image src={notFoundImage} alt='not found page' className='mx-auto' />

      <div className='container'>
        <div className='mx-auto mb-10 mt-5 px-2 lg:w-1/2'>
          <h4 className='text-center text-secondary'>
            We are Sorry! <br /> Your Page cannot be found!
          </h4>

          <p className='my-3 text-center font-medium text-grey-2'>
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </p>

          <div className='flex justify-center gap-2'>
            <Button
              className='flex items-center gap-1 !rounded-full'
              onClick={() => router.back()}
            >
              <FaArrowLeft />
              GO BACK
            </Button>

            <Button
              className='flex items-center gap-1 !rounded-full'
              outlined
              onClick={() => router.push('/')}
            >
              <GrHomeRounded />
              GO TO HOME
            </Button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default NotFound;
