import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close icon from react-icons

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex justify-center'>
      <nav className='fixed w-full bg-primary z-[2000] text-tertiary'>
        <div className='max-screen mx-auto flex justify-between items-center p-4'>
          {/* Logo */}
          <div className='text-2xl font-bold text-secondary'>
            A<span className='text-tertiary'>K.</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex space-x-4'>
            <a href='#aboutme' className='px-4 hover:bg-gray-50 hover:bg-opacity-5 py-2 rounded-xl transition-all duration-75'>About Me</a>
            <a href='#skill' className='px-4 hover:bg-gray-50 hover:bg-opacity-5 py-2 rounded-xl transition-all duration-75'>Skill</a>
            <a href='#education' className='px-4 hover:bg-gray-50 hover:bg-opacity-5 py-2 rounded-xl transition-all duration-75'>Education</a>
            <a href='#contact' className='px-4 hover:bg-gray-50 hover:bg-opacity-5 py-2 rounded-xl transition-all duration-75'>Contact</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className='md:hidden'>
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <FaTimes size={24} className='text-secondary' />
              ) : (
                <FaBars size={24} className='text-secondary' />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile with animation */}
      <div
        className={`fixed inset-0 navbar-background bg-opacity-50 z-[1000] transition-all duration-500 ease-in-out ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed right-0 top-0 bg-primary w-64 h-full transition-transform duration-500 ease-in-out transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button onClick={toggleSidebar}>
              <FaTimes size={30} className='text-white' />
            </button>
          </div>
          {/* Sidebar Links */}
          <div className='flex flex-col items-center'>
            <a href='#aboutme' className='text-white py-2'>About Me</a>
            <a href='#skill' className='text-white py-2'>Skill</a>
            <a href='#education' className='text-white py-2'>Education</a>
            <a href='#contact' className='text-white py-2'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
