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
          <div className='absolute bottom-[-18px] right-3 overflow-x-hidden overflow-y-hidden transition duration-700 hover:h-[168px] hover:overflow-visible xl:h-[36px]'>
            <div className='flex flex-col gap-1 border-primary transition duration-1000'>
              <a
                href='#'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FontAwesomeIcon className='w-1' icon={faFacebookF} />
              </a>
              <a
                href='#'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FontAwesomeIcon className='w-2' icon={faTwitter} />
              </a>
              <a
                href='#'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FontAwesomeIcon className='w-2' icon={faPinterest} />
              </a>
              <a
                href='#'
                className='flex h-[36px] w-[36px] items-center justify-center rounded bg-primary text-white transition hover:scale-125'
              >
                <FontAwesomeIcon className='w-2' icon={faYoutube} />
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
