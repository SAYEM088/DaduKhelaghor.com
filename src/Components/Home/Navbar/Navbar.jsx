"use client"
import { useState } from 'react';
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { GrSearchAdvanced } from "react-icons/gr";
import MyContainer from "@/Components/Shared/MyContainer/MyContainer";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  return (
    <div className='fixed w-full primarycolor z-10 shadow-sm'>
      <div className='py-2 border-b-[1px]'>
        <MyContainer>
          <div className='flex items-center justify-between gap-3'>
            {/* Logo */}
            <Link href='/'>
              <Image
                src='/logo/logo.png'
                alt='logo'
                width={60}
                height={60}
                className="cursor-pointer"
              />
            </Link>

            {/* Search Bar */}
            <div className='flex-grow flex justify-center'>
              <div className="relative flex items-center border-2 border-gray-500 hover:border-gray-400 w-full max-w-lg bg-gray-950 text-white rounded-xl shadow-lg">
                <input
                  type='text'
                  placeholder='Search the web'
                  className='flex-grow bg-transparent text-white py-3 px-4 rounded-full focus:outline-none'
                />
                <button className="pr-4">
                  <GrSearchAdvanced className="text-white" />
                </button>
              </div>
            </div>

            {/* Off-canvas Toggle Button */}
            <div>
              <button onClick={toggleOffCanvas} className="text-white text-2xl p-2">
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </MyContainer>
      </div>

      {/* Off-canvas Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-700 text-white shadow-lg transform transition-transform duration-300 ${
          isOffCanvasOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-4'><div className="flex justify-between">
          <div className="">
          <button  onClick={toggleOffCanvas} ><IoClose size={25}/></button>
          </div>
         <div className="">
         <button className="text-white text-xl mb-6">
            <RiMenuFold2Line />
          </button>
         </div>
          
          </div>
          <nav className="flex flex-col gap-4">
            <Link href='/login' className='hover:bg-gray-700 p-2 rounded-md'>
              <HiArrowRightOnRectangle className="inline-block mr-2" />
              Login
            </Link>
            <Link href='/dashboard' className='hover:bg-gray-700 p-2 rounded-md'>
              Dashboard
            </Link>
            <Link href='/settings' className='hover:bg-gray-700 p-2 rounded-md'>
              Settings
            </Link>
            <Link href='/logout' className='hover:bg-gray-700 p-2 rounded-md'>
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
