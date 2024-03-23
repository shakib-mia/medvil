import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
import React from 'react';

const ButtonLink = ({ link, children }) => {
  return (
    <Link className='link group-[button] group text-primary' href={link || '/'}>
      <div className='relative inline-flex items-center gap-1'>
        {children}{' '}
        <HiArrowLongRight className='relative left-0 inline-block duration-500 group-hover:left-1' />
        <div className='absolute bottom-[0.25rem] inline-block h-[0.063rem] w-0 bg-primary duration-500 ease-out group-hover:w-[107%]'></div>
      </div>
    </Link>
  );
};

export default ButtonLink;
