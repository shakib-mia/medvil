import Header2 from '@/components/Header2/Header2';
import Navbar from '@/components/Navbar2/Navbar2';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';

const page = () => {
  return (
    <div>
      <div className='container hidden xl:block'>
        <div className='flex items-center justify-between py-2'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <FaEnvelope className='text-green' />
              <a
                className='hover:text-green font-medium transition'
                href='mailto:contact@medvil.co.uk'
              >
                contact@medvil.co.uk
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <FaPhone className='text-green' />
              <a
                className='hover:text-green font-medium transition'
                href='+99 - 543 534 5654'
              >
                +99 - 543 534 5654
              </a>
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex gap-3'>
              <a className='hover:text-green transition' href='#'>
                <FaFacebook className='text-2xl' />
              </a>
              <a className='hover:text-green transition' href='#'>
                <FaTwitter className='text-2xl' />
              </a>
              <a className='hover:text-green transition' href='#'>
                <FaPinterest className='text-2xl' />
              </a>
              <a className='hover:text-green transition' href='#'>
                <FaInstagram className='text-2xl' />
              </a>
            </div>

            <div className='flex items-center gap-3'>
              <input type='text' placeholder='Search' />
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <Header2 />
    </div>
  );
};

export default page;
