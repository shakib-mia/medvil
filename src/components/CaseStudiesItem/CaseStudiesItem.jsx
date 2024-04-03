import Image from 'next/image';
import React from 'react';

const CaseStudiesItem = ({ image, text }) => {
  return (
    <a
      href='#'
      className='group relative h-auto w-full overflow-hidden rounded-lg xl:h-[26rem] xl:w-[26.5rem]'
    >
      <Image
        src={image.src}
        alt={text}
        width={330}
        height={417}
        layout='responsive'
        className='h-auto w-full'
      />
      <div className='absolute left-0 top-0 h-full w-full bg-[#353058BD] opacity-0 transition-[opacity] duration-700 group-hover:opacity-100'></div>
      <h5 className='absolute -left-[11rem] bottom-6 w-fit rounded-r-lg bg-white px-3 py-1 text-green transition-[left] duration-700 group-hover:left-0'>
        {text}
      </h5>
    </a>
  );
};

export default CaseStudiesItem;
