'use client';
import './Header.css';

import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaClock, FaTimes } from 'react-icons/fa';

// Define the type for the days of the week
type DayOfWeek = 'domingo' | 'segunda-feira' | 'terça-feira' | 'quarta-feira' | 'quinta-feira' | 'sexta-feira' | 'sábado';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define operating hours with the type
  const operatingHours: Record<DayOfWeek, { open: boolean; hours?: string }> = {
    'domingo': { open: false },
    'segunda-feira': { open: true, hours: '07:30–18:00' },
    'terça-feira': { open: true, hours: '07:30–18:00' },
    'quarta-feira': { open: true, hours: '07:30–18:00' },
    'quinta-feira': { open: true, hours: '07:30–18:00' },
    'sexta-feira': { open: true, hours: '07:30–18:00' },
    'sábado': { open: true, hours: '08:00–14:00' }
  };

  // Check if the current time is within operating hours
  const isOpenNow = () => {
    const now = new Date();
    const day = now.toLocaleDateString('pt-BR', { weekday: 'long' }).toLowerCase() as DayOfWeek;
    const hour = now.getHours();
    const minutes = now.getMinutes();
    
    if (!operatingHours[day].open) return false;

    const [startHour, startMinute] = operatingHours[day].hours?.split('–')[0].split(':').map(Number) || [0, 0];
    const [endHour, endMinute] = operatingHours[day].hours?.split('–')[1].split(':').map(Number) || [0, 0];

    return (hour > startHour || (hour === startHour && minutes >= startMinute)) &&
      (hour < endHour || (hour === endHour && minutes <= endMinute));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getDayOfWeek = () => {
    return new Date().toLocaleDateString('pt-BR', { weekday: 'long' }).toLowerCase() as DayOfWeek;
  };

  const currentDay = getDayOfWeek();

  const TopMenu = () => {
    return (
      <div className="w-full bg-gray-800 text-white py-2">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
          <div className="text-sm flex items-center space-x-4">
            <div className="flex items-center">
              <FaEnvelope className="mr-1" />
              <span className="hidden sm:inline">contact@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-1" />
              <span className="hidden sm:inline">(31) 99579-2679</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-1 cursor-pointer" onClick={toggleModal} />
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1" />
              <span className="hidden sm:inline"><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">123 Main St, City</a></span>
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
    );
  }

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Top menu */}
      <TopMenu />
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" className="text-gray-800 hover:text-gray-600">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-gray-800 hover:text-gray-600">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="text-gray-800 hover:text-gray-600">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" className="text-gray-800 hover:text-gray-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </Transition>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="w-6 h-6 bg-blue-600 text-white rounded-full p-1" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Horário de Funcionamento</h2>
            <ul className="list-none">
              {Object.entries(operatingHours).map(([day, { open, hours }]) => (
                <li
                  key={day}
                  className={`${day === currentDay ? 'bg-blue-100 text-blue-600' : 'text-gray-700'} p-2 rounded`}
                >
                  <strong>{`${day.charAt(0).toUpperCase() + day.slice(1)}:`}</strong> {hours || (open ? 'Aberto' : 'Fechado')}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              {isOpenNow() ? (
                <p className="text-lg text-gray-900 mb-4">Estamos abertos, fale já conosco!</p>
              ) : (
                <p className="text-lg text-gray-900 mb-4">Estamos fechados, mas deixe sua mensagem que entraremos em contato o mais rápido possível.</p>
              )}
              <button
                className={`w-full py-2 px-4 text-white rounded-lg ${isOpenNow() ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                onClick={() => window.location.href = 'mailto:contact@example.com'}
              >
                {isOpenNow() ? 'Enviar Mensagem' : 'Deixar Mensagem'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
