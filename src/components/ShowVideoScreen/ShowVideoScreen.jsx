'use client';
import React from 'react';

const ShowVideoScreen = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      {showVideo && (
        <div className='fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black-2 bg-opacity-30 backdrop-blur z-[20]'>
          <div className='relative h-1/2 w-1/2'>
            <button
              onClick={() => setShowVideo(false)}
              className='absolute -right-3 -top-3 text-3xl text-black-1'
            >
              &times;
            </button>
            <iframe
              className='h-full w-full'
              src='https://www.youtube.com/embed/T7MelADka-I?si=OaPUuC6YvfhIuCQf'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowVideoScreen;
