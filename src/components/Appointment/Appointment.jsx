import React from 'react';
import cta from '../../assets/icons/cta.png';
import Image from 'next/image';
import comfortableManner from '../../assets/images/comfortabl-manner.jpg';
import Button from '../Button/Button';
import AppointmentItem from '../AppointmentItem/AppointmentItem';
import dentalService from '../../assets/images/dental-services.jpg';
import dentalTeam from '../../assets/images/dental-team.jpg';
import dentalTreatment from '../../assets/images/dental-treatment.jpg';
import { FaCalendarAlt } from 'react-icons/fa';

const Appointment = () => {
  const appointmentItems = [
    {
      image: dentalTeam,
      heading: 'Best quality dental team',
      paragraph:
        'Choose from many options including free courses and university degrees',
    },
    {
      image: dentalService,
      heading: 'Evaluate the art  dental services',
      paragraph:
        'It is a long established fact that a reader will be distracted by the readable content ',
    },
    {
      image: dentalTreatment,
      heading: 'Discount all dental treatment',
      paragraph:
        'Hidden in the middle of text. the lorem Ipsum generators the Internet tend to repeat predefined ',
    },
  ];
  return (
    <div className='bg-primary bg-opacity-5 py-10'>
      <div className='container'>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <div className='w-full text-center md:w-1/2 md:text-left'>
            <h3 className='text-secondary'>
              We treat you in a{' '}
              <span className='text-primary'>best comfortable</span> manner.
            </h3>
            <p className='text-base text-grey-2'>
              lorem voluptatem accusantium doloremque lorem sit laudantium totam
              rem aperiam eaque ipsa quae ab illo inventore lorem.
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0'>
              <Image
                src={cta}
                className='animate-slow-spin duration-[2s]'
                width={117}
                alt='cta-button'
              />
              <Button className='flex gap-1'>
                <FaCalendarAlt /> Book Appointment
              </Button>
            </div>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 items-center gap-4 md:gap-10 lg:grid-cols-2'>
          <Image
            src={comfortableManner}
            alt='comfortable-manner'
            className='w-full'
          />
          <aside className='flex flex-col gap-[32px]'>
            {appointmentItems.map((item, key) => (
              <AppointmentItem {...item} key={key} />
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
