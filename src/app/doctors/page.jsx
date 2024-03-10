import BreadCumb from '@/components/BreadCumb/BreadCumb';
import Layouts from '@/components/Layouts/Layouts';
import Specialist from '@/components/Specialist/Specialist';
import React from 'react';
import specialist1 from '../../assets/images/specialists/Rectangle 9444.png';
import specialist2 from '../../assets/images/specialists/Rectangle 9444-1.png';
import specialist3 from '../../assets/images/specialists/Rectangle 9444-2.png';
import specialist4 from '../../assets/images/specialists/Rectangle 9444-3.png';

const Doctors = () => {
  const specialists = [
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist1,
      designation: 'Cardiologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
    {
      name: 'Dr. Michel Smith',
      image: specialist2,
      designation: 'Oncologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist3,
      designation: 'Gynaecologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
    {
      name: 'Dr. Luther Mathews',
      image: specialist4,
      designation: 'Neurologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist1,
      designation: 'Cardiologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
    {
      name: 'Dr. Michel Smith',
      image: specialist2,
      designation: 'Oncologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
    {
      name: 'Dr. Rehana Bilkis',
      image: specialist3,
      designation: 'Gynaecologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
    {
      name: 'Dr. Luther Mathews',
      image: specialist4,
      designation: 'Neurologist',
      fbLink: 'https://facebook.com/',
      twitterLink: 'https://twitter.com/',
      pinterestLink: 'https://www.pinterest.com/',
      youtubeLink: 'https://www.youtube.com/',
    },
  ];

  return (
    <Layouts title='Doctors'>
      <div className='py-4 md:py-6 xl:py-10'>
        <h3 className='text-center text-secondary'>
          Meet Our <span className='text-primary'>Specialists</span>
        </h3>
        <p className='mx-auto px-2 text-center text-grey-2 lg:w-1/2 xl:w-1/3'>
          Get a full view so you know where to save. Track spending, detect
          fraud and keep tabs on rising lorem ipsum dolor sit.
        </p>

        <div className='container mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {specialists.map((specialist, key) => (
            <Specialist {...specialist} key={key} />
          ))}
        </div>
      </div>
    </Layouts>
  );
};

export default Doctors;
