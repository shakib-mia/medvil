import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';

const Service = ({ image, heading, paragraph, link }) => {
  return (
    <div className='group/item custom-pattern relative overflow-hidden rounded p-3 duration-300 md:p-4'>
      <Image className='w-6 md:w-auto' src={image} alt={heading} />
      <h4 className='mt-2 md:mt-3'>{heading}</h4>
      <p className='mb-2 mt-1 text-lg text-grey-3 md:mb-4 md:mt-2'>
        {paragraph}
      </p>

      <ButtonLink link={link || '/'}>Read More</ButtonLink>

      <div className='absolute bottom-0 left-0 right-0 mx-auto h-[0.188rem] w-0 bg-primary duration-500 group-hover/item:w-full'></div>
    </div>
  );
};

export default Service;
