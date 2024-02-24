'use client';
import React from 'react';
import logo from './../../assets/images/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import cart from './../../assets/icons/cart.jpg';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
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

  return (
    <nav
      className='absolute w-full bg-white pb-[0.875rem] pt-2'
      id='navbar'
      style={{ boxShadow: '0px 0px 80px 0px #CDCCDC40' }}
    >
      <div className='container flex justify-between'>
        <Link href={'/'} className='flex items-center'>
          <Image src={logo} alt='logo' />
        </Link>

        <ul className='flex gap-[2.5rem] text-lg'>
          {navItems.map(({ link, text }, key) => (
            <li
              key={key}
              className={`${pathname === link ? 'font-medium text-primary' : 'text-black-1'} relative my-auto`}
            >
              {pathname === link && (
                <div className='absolute left-0 right-0 top-[-4vh] m-auto h-[2rem] w-[0.125rem] bg-primary transition duration-500'></div>
              )}
              <Link href={link}>{text}</Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-4'>
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
