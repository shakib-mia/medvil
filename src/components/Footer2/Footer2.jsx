'use client';
import React, { useEffect, useState } from 'react';
import footerBg from '@/assets/images/home-v2-footer-bg.png';
import newsLetter from '@/assets/images/newsletter-bg.png';
import Button from '../Button/Button';
import { FaFacebookF, FaInstagram, FaTwitter, FaVideo } from 'react-icons/fa6';
import { CiMobile1 } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { url } from '@/constants';

async function getPosts() {
  const { data } = await axios.get(url + 'articles.json');
  //   console.log(data);
  return data;
}

const Footer2 = () => {
  const [blogs, setBlogs] = useState([]);
  const date = new Date();

  // console.log();

  useEffect(() => {
    getPosts().then((data) => setBlogs(data.slice(0, 4)));
  }, []);

  return (
    <footer
      className='bg-[#3F3A64] bg-bottom bg-no-repeat pt-7 text-white'
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      <div className='px-3'>
        <div
          className='w-full bg-[size:100%_100%] bg-no-repeat py-6'
          style={{ backgroundImage: `url(${newsLetter.src})` }}
        >
          <div className='mx-auto w-full xl:w-1/3'>
            <h4 className='text-center'>Subscribe to our newsletter</h4>
            <p className='mb-3 mt-2 text-center text-base xl:text-lg'>
              Subscribe to our newsletter and join a community of
              health-conscious individuals on a journey towards better
              well-being
            </p>

            <div className='relative mx-auto w-11/12 overflow-hidden rounded-full border-[2px] border-white px-1 py-1 xl:w-2/3'>
              <input
                className='absolute left-0 top-0 z-0 h-full w-full bg-transparent px-3 py-2 placeholder:text-white focus:outline-none'
                placeholder='Email'
              />

              <Button className='relative ml-auto !h-4 !w-9 !rounded-full border-white !bg-white !text-black-1'>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='my-8 flex flex-col flex-wrap justify-between gap-5 text-grey-5 md:flex-row md:gap-0 xl:gap-0'>
          <div className='w-full md:w-1/2 md:p-2 xl:w-1/5 xl:p-0'>
            <h5>Get In Touch</h5>
            <p className='mb-4 mt-3 text-lg'>
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>

            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <CiMobile1 />
                <p className='text-sm'>Helpline 1 : +12 (3)456 7890 1234</p>
              </div>
              <div className='flex items-center gap-2'>
                <CiMobile1 />
                <p className='text-sm'>Helpline 1 : +12 (3)456 7890 1234</p>
              </div>

              <div className='flex gap-2'>
                <a
                  href='#'
                  className='inline-flex h-[2rem] w-[2rem] items-center justify-center rounded-md border border-green text-green transition hover:border-green hover:bg-green hover:text-white'
                >
                  <FaFacebookF />
                </a>

                <a
                  href='#'
                  className='inline-flex h-[2rem] w-[2rem] items-center justify-center rounded-md border border-green text-green transition hover:border-green hover:bg-green hover:text-white'
                >
                  <FaTwitter />
                </a>

                <a
                  href='#'
                  className='inline-flex h-[2rem] w-[2rem] items-center justify-center rounded-md border border-green text-green transition hover:border-green hover:bg-green hover:text-white'
                >
                  <FaInstagram />
                </a>

                <a
                  href='#'
                  className='inline-flex h-[2rem] w-[2rem] items-center justify-center rounded-md border border-green text-green transition hover:border-green hover:bg-green hover:text-white'
                >
                  <FaVideo />
                </a>
              </div>
            </div>
          </div>
          <div className='w-full text-white md:w-1/2 md:p-2 xl:w-1/6 xl:p-0'>
            <h5>Quick Links</h5>

            <ul className='mt-3 flex flex-col gap-2'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about-us'>About Us</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/doctors'>Doctors</Link>
              </li>
              <li>
                <Link href='/news'>News</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 md:p-2 xl:w-1/5 xl:p-0'>
            <h5>Support & Help</h5>

            <ul className='mt-3 flex flex-col gap-2'>
              <li>
                <a href='#'>Consultation call</a>
              </li>
              <li>
                <a href='#'>Help + support</a>
              </li>
              <li>
                <a href='#'>White label</a>
              </li>
              <li>
                <a href='#'>Appointment</a>
              </li>
              <li>
                <a href='#'>Sign in</a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 md:p-2 xl:w-1/4 xl:p-0'>
            <h4 className='mb-3'>Gallery</h4>
            {/* {blogs.length} */}
            <div className='grid grid-cols-2 gap-1'>
              {blogs.slice(0, 2).map((item, key) => (
                <Link
                  // className='inline-block h-[112px] w-[112px]'
                  key={key}
                  href={item.link}
                >
                  <div className='h-[7rem] w-[10rem] overflow-hidden'>
                    <Image
                      src={item.image}
                      alt={item.heading}
                      // layout='responsive'
                      width={112}
                      height={112}
                      className='h-full w-full scale-125'
                    />
                  </div>
                  <h6 className='mt-2 !text-sm'>{item.heading}</h6>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className='bg-[#FFFFFF61]' />

      <p className='py-4 text-center text-sm'>
        © {date.getFullYear()} Medvil • All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer2;
