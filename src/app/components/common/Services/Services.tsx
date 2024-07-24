'use client';
import React, { useEffect, useRef } from 'react';
import {
  FaBalanceScale,
  FaShieldAlt,
  FaUserShield,
  FaUsers,
  FaCheckCircle
} from 'react-icons/fa'; // Exemplo de ícones, você pode escolher outros

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
  },
  {
    icon: <FaUserShield size={40} className="text-blue-600" />,
    title: 'Direito do Consumidor',
    description: 'Proteção e defesa dos direitos do consumidor.'
  },
  {
    icon: <FaUsers size={40} className="text-blue-600" />,
    title: 'Direito da Família',
    description: 'Consultoria e representação em questões de direito familiar.'
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

const ServiceInfoSection = () => {
  const IconBox = ({ icon, title }) => {
    return (
      <div className="flex items-center p-4 bg-gray-800 shadow-lg rounded-lg">
        <div className="text-blue-500 text-4xl mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 py-6">
      <div className="container mx-auto px-6 text-white">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Nosso serviço <span className="text-blue-500 font-bold">funciona assim:</span>
            </h2>
          </div>
          <div className="flex flex-col space-y-4 md:w-2/3">
            <IconBox 
              icon={<FaCheckCircle />} 
              title="Receba seu benefício de onde estiver"
            />
            <IconBox 
              icon={<FaCheckCircle />} 
              title="Atendimento humanizado e 100% Online"
            />
            <IconBox 
              icon={<FaCheckCircle />} 
              title="Caso tenha direito, entramos com o seu Benefício"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform">
            Fale com um advogado especialista
          </button>
        </div>
      </div>
    </div>
  );
}

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
      <div className="title-container mb-10">
        <p className="text-center text-2xl text-blue-600">SERVIÇOS</p>
        <h2 className="text-center text-4xl font-bold text-blue-600">Como podemos ajudar?</h2>
      </div>
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

export { ServiceInfoSection, Services };
