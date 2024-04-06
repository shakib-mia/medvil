import Image from 'next/image';
import React from 'react';
import { FaCalendar, FaEye } from 'react-icons/fa6';
import Button from '../Button/Button';
import Link from 'next/link';

const RecentBlog = ({ date, viewCount, heading, link, image }) => {
  return (
    <Link href={link} className='group'>
      <Image
        className='!h-[314px] rounded-lg transition duration-700 group-hover:grayscale'
        width={424}
        height={314}
        layout='responsive'
        src={image}
        alt={heading}
      />

      <div className='mt-2 flex gap-3'>
        <div className='flex items-center gap-1 text-lg text-grey-2'>
          <FaCalendar />
          {date}
        </div>

        <div className='flex items-center gap-1 text-lg text-grey-2'>
          <FaEye />
          {viewCount}
        </div>
      </div>

      <h4 className='mb-3 mt-2 text-[#3F3A64]'>{heading}</h4>

      <Link
        href={link}
        className='inline-flex h-5 w-10 items-center justify-center rounded-full border !border-[#3F3A64] !bg-[#3F3A64] text-white transition hover:!bg-transparent hover:text-[#3F3A64]'
      >
        Read More
      </Link>
    </Link>
  );
};

export default RecentBlog;
