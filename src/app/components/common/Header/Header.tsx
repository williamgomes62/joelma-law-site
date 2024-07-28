'use client';
import './Header.css';

import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Top menu */}
      <div className="w-full bg-gray-800 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-sm flex items-center space-x-4">
            <div className="flex items-center">
              <FaEnvelope className="mr-1" />
              <span className="hidden sm:inline">contact@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-1" />
              <span className="hidden sm:inline">(31) 99579-2679</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      {/* Main menu */}
      <div className={`main-menu transition-all duration-300 ${isScrolled ? 'bg-white shadow-md scrolled' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className={`logo font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
            Logo
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className={`transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>Home</a>
            <a href="#about" className={`transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>About</a>
            <a href="#services" className={`transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>Services</a>
            <a href="#contact" className={`transition-colors duration-300 ${isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none relative w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              <span className={`block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 top-4' : 'top-2'}`}></span>
              <span className={`block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-8' : 'opacity-100 top-4'}`}></span>
              <span className={`block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 top-4' : 'top-6'}`}></span>
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 transform -translate-y-4"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-4"
      >
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-800 hover:text-gray-600">Home</a>
            <a href="#about" className="block text-gray-800 hover:text-gray-600">About</a>
            <a href="#services" className="block text-gray-800 hover:text-gray-600">Services</a>
            <a href="#contact" className="block text-gray-800 hover:text-gray-600">Contact</a>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
