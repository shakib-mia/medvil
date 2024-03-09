import React from 'react';
import whyChoose from '../../assets/images/why-choose.png';
import Image from 'next/image';
import Feature from '../Feature/Feature';
import threeDots from '../../assets/icons/three-dots.svg';
import specialist1 from './../../assets/images/specialists/Rectangle 9444.png';
import specialist2 from './../../assets/images/specialists/Rectangle 9444-1.png';
import specialist3 from './../../assets/images/specialists/Rectangle 9444-2.png';
import specialist4 from './../../assets/images/specialists/Rectangle 9444-3.png';
import AvailableDoctor from '../AvailableDoctor/AvailableDoctor';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
  const contents = [
    {
      serial: '01',
      heading: 'Personalized Service',
      paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare',
    },
    {
      serial: '02',
      heading: 'Qualified Nurses & Staff',
      paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare',
    },
    {
      serial: '03',
      heading: '24/7 Medical Consultation',
      paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare',
    },
  ];

  const doctors = [
    {
      image: specialist1,
      name: 'Dr. William Stanth',
      designation: 'General Practicioner',
    },
    {
      image: specialist2,
      name: 'Julia Smith',
      designation: 'Pediatrist',
    },
  ];

  return (
    <section
      id='why-choose'
      className='container grid grid-cols-1 items-center gap-4 py-9 md:gap-10 lg:grid-cols-2'
    >
      <aside>
        <h3>
          Why Choose <span className='text-primary'>Medvil?</span>
        </h3>

        <div className='mt-4 flex flex-col gap-3 md:mt-6 md:gap-8'>
          {contents.map((content) => (
            <Feature {...content} key={content.serial} />
          ))}
        </div>
      </aside>

      <aside className='relative'>
        <Image src={whyChoose} alt='why-choose' />
        <div
          className='absolute -bottom-8 -left-9 w-[280px] rounded-lg bg-white p-3'
          style={{ boxShadow: '0px 0px 80px 0px #036C5F1C' }}
        >
          <div className='flex justify-between'>
            <aside>
              <h6 className='mb-[2px]'>Available Doctors</h6>
              <small className='text-sm'>Select Doctors</small>
            </aside>
            <aside>
              <Image
                src={threeDots}
                alt={'threeDots'}
                className='mt-1 cursor-pointer'
              />
            </aside>
          </div>

          <div className='my-3 flex flex-col gap-3'>
            {doctors.map((doctor, key) => (
              <AvailableDoctor {...doctor} key={key} />
            ))}

            <Button
              className='flex h-4 w-[14.5rem] items-center gap-2 border border-transparent !border-opacity-30 bg-primary bg-opacity-30 py-[11px] !text-primary hover:border-primary hover:bg-transparent md:h-4 md:w-[14.5rem]'
              light
            >
              Answer the Question
              <aside className='flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-20'>
                <FontAwesomeIcon icon={faChevronRight} size='2xs' />
              </aside>
            </Button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default WhyChoose;
