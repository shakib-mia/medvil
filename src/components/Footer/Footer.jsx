import React from 'react';
import FooterBg from '../../assets/images/footer-bg.png';
import logo from '../../assets/images/white-logo.png';
import Image from 'next/image';
import location from '../../assets/icons/MapPinLine.png';
import email from '../../assets/icons/EnvelopeSimpleOpen.png';
import phone from '../../assets/icons/Phone.png';
import Button from '../Button/Button';
import { FaFacebookF } from 'react-icons/fa6';
import { RiYoutubeLine } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';
import QuickLinks from '../QuickLinks/QuickLinks';

const Footer = () => {
  return (
    <div
      className='bg-blue bg-cover bg-no-repeat pb-5 pt-8'
      style={{ backgroundImage: `url(${FooterBg.src})` }}
    >
      <div className='container'>
        <div className='flex flex-col flex-wrap justify-between gap-5 text-grey-5 md:flex-row md:gap-0 xl:gap-0'>
          <div className='w-full md:w-1/2 md:p-2 xl:w-1/5 xl:p-0'>
            <Image src={logo} alt='logo' />
            <p className='mb-4 mt-3 text-lg'>
              Astoundingly, all of them are in good health, even though they are
              both quasi-architects and true inventors.
            </p>

            <div className='flex gap-3'>
              <a
                href='https://www.facebook.com/RadditoLLC'
                className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xl text-blue transition hover:bg-primary hover:text-white'
              >
                <FaFacebookF />
              </a>
              <a
                href='https://www.youtube.com/@RadditoLLC'
                className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xl text-blue transition hover:bg-primary hover:text-white'
              >
                <RiYoutubeLine />
              </a>
              <a
                href='https://twitter.com/RadditoLLC'
                className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xl text-blue transition hover:bg-primary hover:text-white'
              >
                <FaTwitter />
              </a>
              <a
                href='https://www.linkedin.com/company/radditollc/'
                className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xl text-blue transition hover:bg-primary hover:text-white'
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className='w-full text-white md:w-1/2 md:p-2 xl:w-1/6 xl:p-0'>
            <h5>Quick Links</h5>

            <QuickLinks />
          </div>
          <div className='w-full md:w-1/2 md:p-2 xl:w-1/5 xl:p-0'>
            <h5>Contact info</h5>

            <ul className='mt-3 flex flex-col gap-2'>
              <li className='flex gap-1'>
                <Image
                  src={location}
                  alt='location'
                  width={24}
                  className='h-[24px]'
                />
                <aside>
                  <p className='mb-[4px] text-base'>Address</p>
                  <p className='text-base text-[#CCD7E5]'>
                    1234 Trussville Crossings Pkwy, london
                  </p>
                </aside>
              </li>
              <li className='flex gap-1'>
                <Image
                  src={email}
                  alt='email'
                  width={24}
                  className='h-[24px]'
                />
                <aside>
                  <p className='mb-[4px] text-base'>Email</p>
                  <a
                    href='mailto:support@raddito.com'
                    className='text-base text-[#CCD7E5]'
                  >
                    support@raddito.com
                  </a>
                </aside>
              </li>
              <li className='flex gap-1'>
                <Image
                  src={phone}
                  alt='phone'
                  width={24}
                  className='h-[24px]'
                />
                <aside>
                  <p className='mb-[4px] text-base'>Phone</p>
                  <p className='text-base text-[#CCD7E5]'>833-900-8338</p>
                </aside>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 md:p-2 xl:w-1/4 xl:p-0'>
            <h4 className='mb-3'>Newsletter</h4>
            <p className='text-[#F6F2FF]'>
              Join our newsletter to receive weekly health news.
            </p>

            <div className='my-3 flex overflow-hidden rounded'>
              <input
                type='text'
                className='p-2 text-grey-2 focus:outline-none'
                placeholder='Free Consultation'
              />
              <Button className='h-auto rounded-l-none border-l-0 hover:!bg-transparent'>
                Go
              </Button>
            </div>

            <h5 className='mb-2'>Open hours</h5>
            <p className='mb-1'>Mon - sat : 8:00 am to 6:00 pm</p>
            <p>Sunday: closed</p>
          </div>
        </div>
      </div>
      <hr className='my-3 bg-[#FFFFFF45]' />
      <div className='container text-center text-grey-5'>
        Copyright &copy;{new Date().getFullYear()} Developed by{' '}
        <a href='https://raddito.com/' className='font-semibold' rel='nofollow'>
          Raddito LLC
        </a>{' '}
        Designed by: Medvil Dental Hospital. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
