import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecentPost = ({ image, date, heading, link }) => {
  return (
    <Link href={link} className='flex items-center gap-2'>
      <Image
        src={image}
        alt={heading}
        className='h-[5.3125rem] w-[5.3125rem] rounded-lg'
        width={85}
        height={85}
      />

      <aside>
        <p className='text-xs text-primary'>{date}</p>
        <h6 className='text-base text-secondary'>{heading}</h6>
      </aside>
    </Link>
  );
};

export default RecentPost;
