'use client';
import React, { useEffect, useState } from 'react';
import logo from './../../assets/images/logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import cart from './../../assets/icons/cart.jpg';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import hamburger from '../../assets/icons/hamburger.png';
import { IoCartOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const pathname = usePathname();
  const [navChecked, setNavChecked] = useState(false);

  const navItems = [
    {
      link: '/home',
      text: 'Home',
    },
    {
      link: '/about-us',
      text: 'About Us',
    },
    {
      link: '/services',
      text: 'Services',
    },
    {
      link: '/doctors',
      text: 'Doctors',
    },
    {
      link: '/news',
      text: 'News',
    },
    {
      link: '/contact',
      text: 'Contact',
    },
  ];

  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    // const ulElement = document.querySelector('#navbar');
    // console.log(ulElement.clientHeight);
    if (navChecked) {
      const height = 400 + 'px';
      setContentHeight(height);
    } else {
      setContentHeight('0px');
    }
  }, [navChecked]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav
      className={`sticky left-0 top-0 z-[9999] w-full bg-green`}
      id={'navbar'}
      style={
        {
          // boxShadow: '0px 0px 80px 0px #CDCCDC40',
        }
      }
    >
      <div className='container flex items-center justify-between pb-[0.875rem] pt-2'>
        <Link href={'/'} className='inline-block w-1/3 xl:w-1/6'>
          <Image src={logo} alt='logo' />
        </Link>

        <aside className='xl:hidden'>
          <label>
            {/* <Image src={hamburger} alt='hamburger' className='w-3' /> */}
            <FaBars className='text-2xl text-white' />
            <input
              type='checkbox'
              className='hidden'
              onChange={(e) => setNavChecked(e.target.checked)}
            />
          </label>

          <ul
            className={`absolute left-0 top-7 z-10 flex w-full flex-col gap-3 overflow-hidden bg-white px-2 text-lg shadow-lg duration-700`}
            style={{ height: navChecked ? contentHeight : '0px' }}
            id='navbar'
          >
            {isClient &&
              navItems.map(({ link, text }, key) => (
                <li
                  key={key}
                  className={`${pathname === link ? 'font-medium text-primary' : 'text-black-1'} group relative flex items-center gap-2`}
                >
                  {pathname === link && (
                    <div className='hidden h-[0.125rem] w-[2rem] bg-primary transition duration-500 lg:block'></div>
                  )}
                  <Link href={link}>{text}</Link>
                </li>
              ))}

            <div className='flex items-center gap-2'>
              <Image src={cart} alt='cart' className='h-3 w-3 cursor-pointer' />
              <Button className='flex gap-1' onClick={() => alert('object')}>
                <div className='flex h-3 w-3 items-center justify-center rounded-full bg-white text-lg font-normal text-primary group-hover:bg-primary group-hover:text-white'>
                  <span className='relative top-[-0.063rem]'>+</span>
                </div>
                Create an Account
              </Button>
            </div>
          </ul>
        </aside>

        <ul className='hidden gap-[2.5rem] text-lg xl:flex'>
          {navItems.map(({ link, text }, key) => (
            <li
              key={key}
              className={`group relative w-8 text-center text-white`}
            >
              {/* {pathname === link && ( */}
              <div className='absolute bottom-[-32px] left-0 right-0 m-auto h-[0.125rem] w-0 bg-white transition duration-500 group-hover:w-[5rem]'></div>
              {/* )} */}
              <Link className='inline-block' href={link}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <div className='hidden items-center gap-4 xl:flex'>
          {/* <Image src={cart} alt='cart' className='h-3 w-3 cursor-pointer' /> */}
          {/* <IoCartOutline /> */}
          <Button
            className='flex gap-2 !rounded-full border-white bg-white !text-green hover:!bg-transparent hover:!text-white'
            onClick={() => alert('object')}
          >
            Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
