import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo_ludics from '../assets/logo_ludics.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    
  };

  return (
    <div className='absolute z-20 w-full flex justify-between p-16 pt-7 items-center'>
      <Link><img className='h-20' src={logo_ludics} /></Link>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={40} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen w-full left-[-100%] ease-in duration-500 z-10'
        }
      >
        
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <Link className='font-bold text-3xl p-8'>INICIO</Link>
          <Link className='font-bold text-3xl p-8'>SERVICIOS</Link>
          <Link className='font-bold text-3xl p-8'>PORTAFOLIO</Link>
          <Link className='font-bold text-3xl p-8'>THE LUDICS SQUAD</Link>
          <Link className='font-bold text-3xl p-8'>LUDICS PLAY</Link>
          <Link className='font-bold text-3xl p-8'>TV SHOW</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;