// 'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const Video = ({ placeholder, videoLink }) => {
  const [showVideo, setShowVideo] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);

  useEffect(() => {
    // Function to call when key is pressed
    const handleKeyPress = (event) => {
      console.log(event.keyCode);
      // console.log(`Key pressed: ${event.key}`);
      if (event.key === 'Escape' || event.keyCode === 27) {
        // console.log(true);
        setShowVideo(false);
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='container'>
      <div className='relative'>
        <Image
          src={placeholder}
          alt='video-placeholder'
          className='rounded-xl'
        />

        <button
          onClick={() => setShowVideo(true)}
          className={`absolute bottom-0 left-0 right-0 top-0 m-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 ${pathname === '/home-v2' ? 'border-green bg-green' : 'border-primary bg-primary'} text-white transition hover:scale-150`}
        >
          <FaPlay />
        </button>
      </div>

      {showVideo && (
        <div className='fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur'>
          <div className='relative aspect-[560/312] w-11/12 lg:w-1/2'>
            <iframe
              //   width='560'
              //   height='315'
              src={videoLink}
              title='YouTube video player'
              frameborder='0'
              className='z-10 h-full w-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className={`absolute -right-0 -top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 ${pathname === '/home-v2' ? 'border-green bg-green' : 'border-primary bg-primary'} text-xl text-white transition hover:bg-transparent hover:text-primary lg:-right-6 lg:-top-6`}
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
