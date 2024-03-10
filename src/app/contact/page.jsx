import Layouts from '@/components/Layouts/Layouts';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import phone from '../../assets/icons/phone.svg';
import location from '../../assets/icons/location.svg';
import mail from '../../assets/icons/mail.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
import InputField from '@/components/InputField/InputField';
import Button from '@/components/Button/Button';

const Page = () => {
  return (
    <Layouts title='Contact Us'>
      <div className='container flex flex-col gap-x-10 py-4 md:flex-row md:py-6 xl:py-10'>
        <aside className='w-full text-grey-3 lg:w-1/4'>
          <h4 className='text-secondary'>Contact Info</h4>
          <p className='mt-2'>
            Metus pretium lectus ut volutpat semper amet convallis cras.
          </p>

          <ul className='mt-[32px] flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <Image src={location} alt='location' />
              <p className='text-lg'>124, monika st suite567, new york, USA</p>
            </li>
            <li className='flex items-center gap-2'>
              <Image src={phone} alt='phone' />

              <p className='text-lg'>
                +3753674,3454384 <br />
                +3753674,3454384
              </p>
            </li>
            <li className='flex items-center gap-2'>
              <Image src={mail} alt='mail' />

              <p className='text-lg'>hello@medico.com</p>
            </li>
          </ul>
        </aside>
        <form className='mt-4 w-full md:mt-0 lg:w-3/4'>
          <h4 className='mb-2 text-secondary md:mb-3 xl:mb-6'>Contact Info</h4>
          <div className='flex flex-col gap-2 md:flex-row md:gap-3'>
            <InputField
              type='text'
              className='w-full lg:w-1/2'
              placeholder='Name'
            />
            <InputField
              type='text'
              className='w-full lg:w-1/2'
              placeholder='Email'
            />
          </div>
          <div className='mt-2 flex flex-col gap-2 md:mt-3 md:flex-row md:gap-3'>
            <InputField
              type='text'
              className='w-full lg:w-1/2'
              placeholder='Phone'
            />
            <InputField
              type='text'
              className='w-full lg:w-1/2'
              placeholder='Your Subjects'
            />
          </div>

          <InputField
            textarea={true}
            className={'mt-2 md:mt-3'}
            placeholder='Your Message'
            rows={6}
          />

          <Button className='mt-3 !w-full'>Send Message</Button>
        </form>
      </div>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d414.1983031683241!2d91.78842422958131!3d22.305571367630233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1710049551158!5m2!1sen!2sbd'
        className='container mb-4 aspect-[16/6] border-0 md:mb-6 xl:mb-10'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </Layouts>
  );
};

export default Page;
