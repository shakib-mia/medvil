import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';

const Expert = ({ image, name, designation, fee }) => {
  return (
    <div className='group relative overflow-hidden rounded-md'>
      <Image
        width={312}
        height={232}
        layout='responsive'
        src={image.src}
        alt={name}
        className='h-auto w-full'
      />
      <div className='absolute left-0 top-0 hidden h-[232px] w-[312px] bg-black-1 bg-opacity-20 group-hover:block'>
        <div className='relative h-full w-full'>
          <Button className='!absolute !bottom-3 !h-[3rem] !w-[10rem] !rounded-l-none border-l-0 !border-green !bg-green hover:!bg-white hover:!text-green'>
            Make Appointment
          </Button>
        </div>
      </div>
      <Link
        href={'/doctors-details'}
        className='inline-block w-full bg-white p-2'
      >
        <h6 className='text-lg font-semibold'>{name}</h6>
        <div className='flex justify-between'>
          <p className='text-base text-grey-2'>{designation}</p>
          <p className='text-base text-green'>Fee: {`$${fee}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default Expert;
