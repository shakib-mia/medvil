import Achievements from '@/components/Achievements/Achievements';
import CTA from '@/components/CTA/CTA';
import CaseStudies from '@/components/CaseStudies/CaseStudies';
import Consult from '@/components/Consult/Consult';
import Consultation from '@/components/Consultation/Consultation';
import Experts from '@/components/Experts/Experts';
import Header2 from '@/components/Header2/Header2';
import Navbar from '@/components/Navbar2/Navbar2';
import Partners from '@/components/Partners/Partners';
import RecentBlogs from '@/components/RecentBlogs/RecentBlogs';
import Services2 from '@/components/Services2/Services2';
import WhyChoose2 from '@/components/WhyChoose2/WhyChoose2';
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
      <div className='container hidden xl:block' id='contact-bar'>
        <div className='flex items-center justify-between py-2'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <FaEnvelope className='text-green' />
              <a
                className='font-medium transition hover:text-green'
                href='mailto:contact@medvil.co.uk'
              >
                contact@medvil.co.uk
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <FaPhone className='text-green' />
              <a
                className='font-medium transition hover:text-green'
                href='+99 - 543 534 5654'
              >
                +99 - 543 534 5654
              </a>
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex gap-3'>
              <a className='transition hover:text-green' href='#'>
                <FaFacebook className='text-2xl' />
              </a>
              <a className='transition hover:text-green' href='#'>
                <FaTwitter className='text-2xl' />
              </a>
              <a className='transition hover:text-green' href='#'>
                <FaPinterest className='text-2xl' />
              </a>
              <a className='transition hover:text-green' href='#'>
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
      <CTA />
      <Consult />
      <Services2 />
      <Achievements />
      <WhyChoose2 />
      <Experts />
      <CaseStudies />
      <RecentBlogs />
      <Partners />
      <Consultation />
    </div>
  );
};

export default page;
