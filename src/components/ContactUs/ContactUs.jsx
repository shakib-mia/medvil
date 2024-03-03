import React from 'react';
import contactBg from '../../assets/images/contact-bg.png';
import contact from '../../assets/images/contact.png';
import Button from '../Button/Button';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div
      className='mt-9 bg-cover xl:h-screen'
      style={{ backgroundImage: `url(${contactBg.src})` }}
    >
      <div className='container flex h-full flex-col justify-between'>
        <div className='mx-auto text-center lg:w-2/3'>
          <h3 className='text-secondary'>
            Are You Having <span className='text-primary'>Issues</span> With
            Your Teeth?
          </h3>
          <p className='mx-auto mb-3 mt-2 w-3/4 text-grey-2'>
            Get a full view so you know where to save. Track spending, detect
            fraud and keep tabs on rising lorem ipsum dolor sit.
          </p>

          <Button className='mx-auto'>Contact Us Now</Button>
        </div>

        <Image src={contact} alt='contact' className='mt-6' />
      </div>
    </div>
  );
};

export default ContactUs;
