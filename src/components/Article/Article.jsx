import Image from 'next/image';
import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import Link from 'next/link';

const Article = ({ image, heading, date, link }) => {
  return (
    <article>
      <div className='group'>
        <Image
          src={image}
          alt={heading.split(' ').join('-')}
          className='!h-[510px] w-full rounded-lg transition duration-700 group-hover:grayscale '
          width={'638'}
          height={'510'}
        />
        <p className='mt-2 text-base text-grey-2'>{date}</p>

        <Link
          href={link}
          className='el-messiri mb-[1.2rem] mt-2 inline-block border-b border-[#00000030] pb-4 text-xl font-bold text-secondary md:text-2xl xl:text-[2rem]'
        >
          {heading}
        </Link>
      </div>
      <ButtonLink link={link}>Read More</ButtonLink>
    </article>
  );
};

export default Article;
