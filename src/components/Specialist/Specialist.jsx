import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Specialist = ({
  image,
  name,
  designation,
  fbLink,
  twitterLink,
  pinterestLink,
  youtubeLink,
}) => {
  return (
    <div className='px-2'>
      <div className='rounded-md p-1 shadow-[0_0_24px_#036C5F1F]'>
        <div className='relative'>
          <Image src={image} className='h-auto w-full' alt={name} />
          <div className='absolute bottom-[-18px] right-3 overflow-x-hidden overflow-y-hidden transition duration-700 hover:h-[168px] hover:overflow-visible xl:h-[36px]'>
            <div className='flex flex-col gap-1 border-primary transition duration-1000'>
              <a
                href={fbLink}
                target='_blank'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FaFacebookF />
              </a>
              <a
                href={twitterLink}
                target='_blank'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FaTwitter />
              </a>
              <a
                href={pinterestLink}
                target='_blank'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FaPinterest />
              </a>
              <a
                href={youtubeLink}
                target='_blank'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <h5 className='mt-3'>{name}</h5>
        <p className='text-grey-2'>{designation}</p>
      </div>
    </div>
  );
};

export default Specialist;