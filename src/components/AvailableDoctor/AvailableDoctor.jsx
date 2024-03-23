import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AvailableDoctor = ({ image, name, designation }) => {
  return (
    <div className='flex gap-1'>
      <Image
        src={image}
        width={48}
        height={48}
        className='rounded-full'
        alt={name}
      />
      <aside>
        <Link
          href={'/doctor-details'}
          className='mb-[4px] text-sm font-bold text-secondary'
        >
          {name}
        </Link>
        <p className='text-grey-3'>{designation}</p>
      </aside>
    </div>
  );
};

export default AvailableDoctor;
