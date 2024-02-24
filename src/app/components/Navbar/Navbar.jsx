import React from 'react';
import logo from "../../assets/images/logo.jpg"
import Image from 'next/image';
import Link from 'next/link';
import cart from "../../assets/icons/cart.jpg"
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <nav className='pt-[22px] pb-[14px]'>
            <div className="flex container justify-between items-center">
                <Link href={'/'}>
                    <Image src={logo} alt='logo' />
                </Link>

                <ul className='flex gap-[40px] text-lg'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>

                <div className="flex gap-4 items-center">
                    <Image src={cart} alt='cart' className='w-3 h-3 cursor-pointer' />
                    <Button className='flex gap-2'>
                        <div className='w-3 h-3 bg-white rounded-full text-black-1 font-normal text-lg flex items-center justify-center'>+</div>
                        Create an Account</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;