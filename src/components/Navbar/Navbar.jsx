'use client';
import React, { useEffect, useState } from 'react';
import logo from './../../assets/images/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import cart from './../../assets/icons/cart.jpg';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import hamburger from '../../assets/icons/hamburger.png';

const Navbar = () => {
  const pathname = usePathname();
  const [navChecked, setNavChecked] = useState(false);
  const navItems = [
    {
      link: '/',
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
      className='z-[9999] w-full bg-white'
      id={'navbar'}
      style={{ boxShadow: '0px 0px 80px 0px #CDCCDC40' }}
    >
      <div className='container flex items-center justify-between pb-[0.875rem] pt-2'>
        <Link href={'/'} className='flex items-center'>
          <Image src={logo} alt='logo' />
        </Link>

        <aside className='xl:hidden'>
          <label>
            <Image src={hamburger} alt='hamburger' className='w-3' />
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
                  className={`${pathname === link ? 'font-medium text-primary' : 'text-black-1'} relative flex items-center gap-2`}
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
              className={`${pathname === link ? 'font-medium text-primary' : 'text-black-1'} relative`}
            >
              {pathname === link && (
                <div className='absolute left-0 right-0 top-[-34px] m-auto h-[2rem] w-[0.125rem] bg-primary transition duration-500'></div>
              )}
              <Link href={link}>{text}</Link>
            </li>
          ))}
        </ul>

        <div className='hidden items-center gap-4 xl:flex'>
          <Image src={cart} alt='cart' className='h-3 w-3 cursor-pointer' />
          <Button className='flex gap-2' onClick={() => alert('object')}>
            <div className='flex h-3 w-3 items-center justify-center rounded-full bg-white text-lg font-normal text-primary group-hover:bg-primary group-hover:text-white'>
              <span className='relative top-[-0.063rem]'>+</span>
            </div>
            Create an Account
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
