import Image from 'next/image';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { PiArrowBendUpLeftBold } from 'react-icons/pi';
import avatar from '@/assets/images/avatar.jpg';
// import reply from '../reply/reply';

const Reply = ({ reply }) => {
  //   console.log(reply);
  return (
    <>
      <section className='mt-4 pl-8'>
        <div className='flex gap-2'>
          <Image
            src={reply.image || avatar}
            alt={reply.name}
            width={63}
            height={63}
          />
          <aside className='pt-1'>
            <div className='flex items-center gap-2'>
              <h6>{reply.name}</h6>
              {/* <aside className='flex items-center gap-1'>
                <PiArrowBendUpLeftBold className='text-primary' />
                Reply
              </aside> */}
            </div>

            <div className='flex items-center gap-1'>
              <CiCalendar className='text-primary' />
              <p>{reply.date}</p>
            </div>
          </aside>
        </div>

        <div className='ml-auto mt-2 w-11/12 pl-2 text-secondary'>
          {reply.text}
        </div>
      </section>
    </>
  );
};

export default Reply;
