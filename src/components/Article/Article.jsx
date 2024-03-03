import Image from 'next/image';
import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';

const Article = ({ image, heading, date, link }) => {
  return (
    <article>
      <Image
        src={image}
        alt={heading.split(' ').join('-')}
        className='h-auto w-full rounded-lg'
      />
      <p className='mt-2 text-base text-grey-2'>{date}</p>

      <h4 className='mb-[1.2rem] mt-2 border-b border-[#00000030] pb-4 text-secondary'>
        {heading}
      </h4>
      <ButtonLink link={link}>Read More</ButtonLink>
    </article>
  );
};

export default Article;
