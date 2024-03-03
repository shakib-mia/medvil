import {
  faFacebookF,
  faPinterest,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const Specialist = ({ image, name, designation }) => {
  return (
    <div className='px-2'>
      <div className='rounded-md p-1 shadow-[0_0_24px_#036C5F1F]'>
        <div className='relative'>
          <Image src={image} className='h-auto w-full' alt={name} />
          <div className='absolute bottom-[-18px] right-3 h-[36px] gap-1 overflow-hidden border-primary transition duration-1000 hover:flex hover:h-auto hover:flex-col'>
            <a
              href='#'
              className='flex h-[36px] w-[36px] items-center justify-center rounded border-2 border-primary bg-primary text-white transition hover:bg-transparent hover:text-primary'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href='#'
              className='flex h-[36px] w-[36px] items-center justify-center rounded border-2 border-primary bg-primary text-white transition hover:bg-transparent hover:text-primary'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href='#'
              className='flex h-[36px] w-[36px] items-center justify-center rounded border-2 border-primary bg-primary text-white transition hover:bg-transparent hover:text-primary'
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a
              href='#'
              className='flex h-[36px] w-[36px] items-center justify-center rounded border-2 border-primary bg-primary text-white transition hover:bg-transparent hover:text-primary'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <h5 className='mt-3'>{name}</h5>
        <p className='text-grey-2'>{designation}</p>
      </div>
    </div>
  );
};

export default Specialist;
