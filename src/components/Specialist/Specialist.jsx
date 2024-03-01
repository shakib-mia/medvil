import Image from 'next/image';
import React from 'react';

const Specialist = ({ image, name, designation }) => {
  return (
    <div className='px-2'>
      <div className='rounded-md p-1 shadow-[0_0_17px_#036C5F1F]'>
        <Image src={image} className='h-auto w-full' alt='' />
        <h5 className='mt-3'>{name}</h5>
        <p className='text-grey-2'>{designation}</p>
      </div>
    </div>
  );
};

export default Specialist;
