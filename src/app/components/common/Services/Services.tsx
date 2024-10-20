'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  FaBalanceScale,
  FaShieldAlt,
  FaUserShield,
  FaHeartbeat,
  FaCheckCircle
} from 'react-icons/fa';
import './styles.css';
import whatsAppLink from '@/app/utils/whatsapp-link';

// Tipagem para o tipo de serviço
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
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
    icon: <FaHeartbeat size={40} className="text-blue-600" />,
    title: 'Direito da Saúde',
    description: 'Consultoria e representação em casos relacionados a direito da saúde.'
  }
  // Adicione mais serviços conforme necessário
];

// Tipagem para as props do ServiceCard
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div
    className="
      relative bg-white rounded-lg shadow-lg p-6
      text-center border-t-4 border-blue-600 transform
      transition-all duration-500 opacity-0 translate-y-[-10px]
      group hover:translate-y-0 hover:shadow-2xl hover:border-green-500
      hover:scale-105 w-full sm:w-64 mt-6 mb-4">
    <div className="flex justify-center">
      <div className="absolute top-[-32px] bg-white p-2 rounded-full border border-blue-600 transition-colors duration-500 group-hover:border-green-500">
        <div className="card-icon text-blue-600 group-hover:text-green-500 transition-colors duration-500">
          {icon}
        </div>
      </div>
    </div>
    <div className="mt-0 sm:mt-2 md:mt-4">
      <h3 className="text-blue-600 text-xl sm:text-xl md:text-2xl font-semibold text-center mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-md mb-4">{description}</p>
    </div>
    <div className="absolute inset-x-0 bottom-[-20px] flex justify-center">
      <a href={whatsAppLink} rel="noopener noreferrer">
        <button className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-full transform transition-transform duration-500 hover:scale-110 hover:from-green-500 hover:to-green-700 hover:brightness-110 hover:shadow-lg">
          Saiba Mais
        </button>
      </a>
    </div>
  </div>
);

// Tipagem para as props do IconBox
interface IconBoxProps {
  icon: React.ReactNode;
  title: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, title }) => (
  <div className="flex items-center p-2 md:p-4 bg-gray-800 shadow-lg rounded-lg">
    <div className="icon text-blue-500 text-4xl mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-md md:text-lg font-medium text-white">{title}</h3>
    </div>
  </div>
);

const ServiceInfoSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const iconVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.5,
      },
    },
  };

  const iconData = [
    { title: 'Receba seu benefício de onde estiver', icon: <FaCheckCircle /> },
    { title: 'Atendimento humanizado e 100% Online', icon: <FaCheckCircle /> },
    { title: 'Caso tenha direito, entramos com o seu Benefício', icon: <FaCheckCircle /> },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [controls]);

  return (
    <div ref={sectionRef} className="services-info-section px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 py-6 md:py-8">
      <div className="container mx-auto text-white">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="title text-2xl md:text-3xl font-semibold">
              Nosso serviço <br /> <span className="text-blue-500 font-bold">funciona assim:</span>
            </h2>
          </div>
          <div className="flex flex-col space-y-4 md:w-2/3">
            {iconData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={iconVariants}
              >
                <IconBox icon={item.icon} title={item.title} />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-8 flex justify-center"
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
        >
          <a href={whatsAppLink} rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform">
              Fale com um advogado especialista
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section?.querySelectorAll('.transform') || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-down');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      if (section) {
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <div id="services" ref={sectionRef} className="px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-9 bg-gray-100">
      <div className="title-container mb-6 md:mb-10">
        <p className="text-center text-xl md:text-2xl text-gray-500">SERVIÇOS</p>
        <h2 className="text-center text-2xl md:text-4xl font-bold text-blue-600">Como podemos ajudar?</h2>
      </div>
      <div className="container mx-auto flex flex-wrap gap-8 justify-center">
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
