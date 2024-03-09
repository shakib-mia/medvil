import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const ButtonLink = ({ link, children }) => {
  return (
    <Link className='link group text-primary' href={link || '/'}>
      <div className='relative inline-flex items-center gap-1'>
        {children}{' '}
        {/* <span className='relative left-0 mt-[-0.375rem] inline-block text-[1.75rem] duration-500 group-hover:left-1'>
          &rarr;
        </span> */}
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className='fal relative left-0 mt-[-0.375rem] inline-block duration-500 group-hover:left-1'
        />
        <div className='absolute bottom-[0.25rem] inline-block h-[0.063rem] w-0 bg-primary duration-500 ease-out group-hover:w-[107%]'></div>
      </div>
    </Link>
  );
};

export default ButtonLink;
