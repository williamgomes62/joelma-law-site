'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start(i => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.3, duration: 0.5 }
          }));
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <footer ref={ref} className="px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Links Úteis', 'Redes Sociais', 'Contato'].map((title, index) => (
            <motion.div
              key={index}
              className="footer-section"
              initial={{ y: -50, opacity: 0 }}
              animate={controls}
              custom={index}
            >
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              {title === 'Links Úteis' && (
                <ul>
                  <li className="mb-2"><a href="#home-banner" className="hover:text-blue-600">Home</a></li>
                  <li className="mb-2"><a href="#about" className="hover:text-blue-600">Sobre Mim</a></li>
                  <li className="mb-2"><a href="#services" className="hover:text-blue-600">Serviços</a></li>
                  <li className="mb-2"><a href="#reviews" className="hover:text-blue-600">Depoimentos</a></li>
                </ul>
              )}
              {title === 'Redes Sociais' && (
                <ul className="flex space-x-6">
                  <li>
                    <a href="https://www.linkedin.com/in/joelma-lima-17a6a0262/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/joelimalimadv" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                      <i className="fab fa-facebook-f fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/joelmalimadv/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              )}
              {title === 'Contato' && (
                <div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-gray-800" />
                    <p>Av. Nossa Sra. do Carmo, 425 - Centro, Mariana - MG, 35420-000</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-gray-800" />
                    <p>(31) 99579-2679</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-gray-800" />
                    <p>joelmalimadv@gmail.com</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>&copy; 2024 Joelma Lima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
