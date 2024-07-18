'use client';
import React, { useEffect, useRef } from 'react';
import { FaBalanceScale, FaShieldAlt } from 'react-icons/fa'; // Exemplo de ícones, você pode escolher outros

const services = [
  {
    icon: <FaBalanceScale size={40} className="text-blue-600" />,
    title: 'BPC/Loas',
    description: 'Assistência ao Benefício de Prestação Continuada (BPC) e LOAS.'
  },
  {
    icon: <FaShieldAlt size={40} className="text-blue-600" />,
    title: 'Direito Previdenciário',
    description: 'Aconselhamento e representação em questões previdenciárias.'
  }
  // Adicione mais serviços conforme necessário
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-8 border-blue-600 transform transition-all duration-500 opacity-0 translate-y-[-10px] hover:translate-y-0 hover:shadow-2xl hover:border-green-500 hover:scale-105">
    <div className="mb-4">{icon}</div>
    <h3 className="text-blue-600 text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-full transform transition-transform duration-500 hover:scale-110 hover:from-green-500 hover:to-green-700 hover:brightness-110 hover:shadow-lg">
      Saiba Mais
    </button>
  </div>
);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll('.transform');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-down');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      if (section) {
        cards.forEach(card => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="p-10 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-10">Nossos Serviços</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
