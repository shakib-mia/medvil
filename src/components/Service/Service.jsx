import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Service = ({ image, heading, paragraph, link }) => {
  return (
    <div className='group/item custom-pattern relative overflow-hidden rounded p-4 duration-300'>
      <Image src={image} alt={heading} />
      <h4 className='mt-3'>{heading}</h4>
      <p className='mb-4 mt-2 text-lg text-grey-3'>{paragraph}</p>
      <Link className='link group text-primary' href={link || '/'}>
        <div className='relative inline-flex items-center gap-1'>
          Read More{' '}
          <span className='relative left-0 mt-[-0.375rem] inline-block text-[1.75rem] duration-500 group-hover:left-1'>
            &rarr;
          </span>
          <div className='absolute bottom-[0.25rem] inline-block h-[0.063rem] w-0 bg-primary duration-500 ease-out group-hover:w-full'></div>
        </div>
      </Link>

      <div className='absolute bottom-0 left-0 right-0 mx-auto h-[0.188rem] w-0 bg-primary duration-500 group-hover/item:w-full'></div>
    </div>
  );
};

export default Service;
