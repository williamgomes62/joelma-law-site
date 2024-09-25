'use client';
import './Header.css';

import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaClock, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

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
      <div className="top-menu w-full px-4 sm:px-6 lg:px-8 bg-gray-800 text-white py-2">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-sm flex items-center space-x-4">
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span className="hidden sm:inline">joelmalimadv@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span className="hidden sm:inline">(31) 99579-2679</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 cursor-pointer" onClick={toggleModal} />
            </div>
            <div className="flex items-center">
              <a className="flex items-center" href="https://www.google.com/localservices/prolist?g2lbs=AOHF13kittLpUc3ea-mTLcYBx7H1IgnB9vFRmpMhOeGhs8T9sU1YPT022h_TXEZakihTG5bBfb-PgLLA5Pto5ZzHP2rKJiDI85JPkiZG5hS3rPYFtrqU8DI%3D&hl=pt-BR&gl=br&cs=1&ssta=1&oq=joelma%20lima%20advogada&src=2&lrlstt=1722392223378&q=Joelma%20Lima%20Advocacia&ved=2ahUKEwjc5K37ndCHAxVnF7kGHcGhC5IQjdcJegQIABAF&scp=CgtnY2lkOmxhd3llchIAGgAqCEFkdm9nYWRv&slp=MgBAAVIECAIgAIgBAA%3D%3D&spp=Cg0vZy8xMXYwbXE5dGd6OoABV2gwUUFCQUJFQUlpRldwdlpXeHRZU0JzYVcxaElHRmtkbTlqWVdOcFlhb0JQaEFCTWg4UUFTSWI0REVaQTg0VV9rQ0doQzFLSS1uYTR4YUN4LWhqN1QtMjN1U3JNaGtRQWlJVmFtOWxiRzFoSUd4cGJXRWdZV1IyYjJOaFkybGg%3D" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="mr-2" />
                <span className="hidden sm:inline">Av. N. Sra. do Carmo, 425, Mariana</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/joelimalimadv" className="text-white hover:text-gray-300">
              <FaFacebook />
            </a>
            {/* <a href="https://twitter.com" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a> */}
            <a href="https://www.linkedin.com/in/joelma-lima-17a6a0262/" className="text-white hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/joelmalimadv/" className="text-white hover:text-gray-300">
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
      <div className={`py-0 md:py-1 px-4 sm:px-6 lg:px-8 main-menu transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md scrolled' : 'bg-transparent'}`}>
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className={`logo py-2 font-bold text-xl transition-colors duration-300 ${isScrolled || isOpen ? 'text-black' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" height="500.000000pt" width="500.000000pt" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
              <g fill="#000000" stroke="none" transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">



                <path d="M3022 2613 c-51 -98 -242 -797 -242 -881 0 -84 51 -81 220 12 132 73 208 106 245 106 16 0 25 6 25 16 0 30 -70 7 -255 -87 -184 -92 -215 -100 -215 -55 0 46 117 492 190 727 32 101 43 127 57 125 14 -1 18 7 18 33 0 48 -20 50 -43 4z"></path>
                <path d="M1326 2587 c-61 -61 -84 -159 -46 -197 19 -19 40 -27 40 -14 0 3 -9 17 -20 31 -14 18 -18 33 -13 52 8 37 32 82 56 108 44 49 48 -6 12 -164 -14 -59 -28 -115 -31 -125 -3 -9 -37 -32 -77 -50 -183 -87 -290 -268 -274 -461 13 -151 108 -241 189 -178 39 31 54 80 118 371 34 151 66 277 72 281 6 4 40 13 75 19 35 7 66 16 69 21 7 12 -53 11 -99 -2 -22 -6 -40 -9 -42 -7 -2 2 10 66 27 142 23 102 29 145 22 165 -13 35 -47 39 -78 8z m-60 -573 c-24 -109 -49 -226 -56 -259 -26 -132 -81 -191 -138 -148 -48 36 -66 79 -70 174 -7 151 48 277 161 368 47 38 141 85 145 73 1 -5 -17 -98 -42 -208z"></path>
                <path d="M1985 2545 c-15 -30 -48 -138 -73 -241 l-46 -186 -63 -68 c-35 -38 -73 -72 -84 -75 -31 -10 -49 12 -49 61 0 38 6 51 39 87 46 51 64 84 57 103 -15 38 -68 -11 -101 -93 -12 -29 -27 -46 -50 -57 -49 -23 -54 -21 -57 30 -4 69 -27 79 -73 33 -46 -45 -56 -98 -26 -128 27 -27 46 -27 77 4 14 14 34 25 45 25 11 0 28 4 38 10 16 8 19 4 24 -31 7 -52 22 -69 63 -69 28 0 45 10 89 53 30 29 55 48 55 43 0 -6 -14 -76 -30 -156 -33 -159 -37 -214 -17 -208 7 3 15 32 19 69 6 64 61 332 99 484 11 44 43 125 70 180 28 55 53 119 56 143 5 38 3 42 -15 42 -15 0 -28 -15 -47 -55z m19 -46 c-9 -24 -21 -48 -26 -54 -5 -5 0 15 11 45 12 30 21 57 21 59 0 2 2 2 5 -1 3 -3 -2 -25 -11 -49z m-264 -303 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m-200 -94 c0 -24 -1 -25 -16 -10 -10 9 -14 24 -10 33 9 23 26 9 26 -23z m-29 -37 c21 -24 11 -49 -17 -43 -20 3 -31 47 -19 76 6 15 8 15 12 2 3 -8 14 -24 24 -35z"></path>
                <path d="M3215 2201 c-3 -5 -1 -12 5 -16 12 -7 30 2 30 16 0 12 -27 12 -35 0z"></path>
                <path d="M1976 2148 c-41 -114 -58 -208 -37 -208 5 0 31 37 58 81 43 74 48 79 51 53 5 -58 12 -74 32 -74 14 0 28 16 46 52 l27 52 11 -34 c9 -28 17 -36 39 -38 16 -2 39 4 53 13 24 15 24 15 24 -14 0 -47 25 -45 69 5 l39 45 7 -42 c7 -39 34 -79 55 -79 19 0 77 60 103 109 41 74 17 70 -31 -5 -23 -35 -49 -67 -58 -71 -24 -9 -41 19 -49 82 -3 30 -10 55 -15 55 -4 0 -25 -22 -46 -50 -40 -53 -60 -64 -48 -28 26 82 65 131 86 110 14 -14 38 -16 38 -2 0 16 -40 32 -66 26 -13 -3 -37 -26 -53 -50 -17 -24 -47 -54 -67 -67 -36 -22 -37 -22 -50 -4 -8 10 -14 34 -14 53 0 51 -29 38 -66 -31 -16 -31 -33 -54 -37 -51 -4 4 -7 32 -7 62 0 66 -11 65 -59 -6 -19 -28 -36 -50 -38 -48 -2 1 8 35 21 74 19 55 22 72 11 72 -7 0 -20 -19 -29 -42z"></path>
                <path d="M3390 2177 c0 -18 -83 -130 -115 -156 -53 -41 -73 -22 -57 56 7 29 7 52 2 57 -14 14 -30 -38 -30 -93 0 -85 37 -93 111 -24 49 46 50 46 43 18 -12 -42 -11 -84 1 -86 6 -1 30 33 55 74 l45 76 5 -37 c12 -79 39 -83 76 -11 l25 51 17 -33 c20 -39 51 -48 88 -25 23 16 24 16 24 -8 0 -27 20 -48 37 -38 6 4 25 24 41 44 l30 38 11 -43 c5 -24 19 -51 30 -61 19 -18 21 -18 52 0 40 24 107 130 91 146 -7 7 -16 -1 -31 -29 -25 -51 -69 -103 -85 -103 -17 0 -36 44 -36 83 0 18 -5 39 -10 47 -9 13 -14 10 -33 -15 -12 -16 -32 -41 -44 -55 -21 -23 -22 -23 -22 -5 -1 31 35 102 56 113 12 7 25 7 37 0 9 -5 20 -7 23 -4 11 11 -20 36 -43 36 -25 0 -41 -13 -87 -74 -32 -42 -84 -73 -99 -58 -5 5 -12 28 -15 51 -8 58 -30 50 -68 -24 l-30 -59 -5 59 c-3 32 -10 60 -16 62 -7 2 -31 -24 -53 -59 -45 -67 -48 -54 -10 45 23 58 23 57 4 57 -8 0 -15 -6 -15 -13z"></path>
              </g>
            </svg>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className={`transition-colors duration-300 ${isScrolled || isOpen ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>Home</Link>
            <Link href="/bpc-loas" className={`transition-colors duration-300 ${isScrolled || isOpen ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>BPC/LOAS</Link>
            <a href="/#about" className={`transition-colors duration-300 ${isScrolled || isOpen ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>Sobre Mim</a>
            <a href="/#services" className={`transition-colors duration-300 ${isScrolled || isOpen ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>Serviços</a>
            <a href="/#reviews" className={`transition-colors duration-300 ${isScrolled || isOpen ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}>Depoimentos</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none relative w-8 h-8 transition-colors duration-300 ${isScrolled || isOpen ? 'text-black' : 'text-white'}`}
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
            <a href="/" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-gray-600">Home</a>
            <a href="/bpc-loas" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-gray-600">BPC/LOAS</a>
            <a href="/#about" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-gray-600">Sobre Mim</a>
            <a href="/#services" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-gray-600">Serviços</a>
            <a href="/#reviews" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-gray-600">Depoimentos</a>
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
