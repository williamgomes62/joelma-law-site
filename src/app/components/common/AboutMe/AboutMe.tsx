import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Bloco de Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 text-center md:text-left z-10">
          <h3 className="text-xl text-gray-500 mb-2">Bem-vindo ao meu perfil</h3>
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Sobre Mim</h2>
          <div className="mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              <strong className="text-blue-800">Prazer, sou [Nome do Advogado]</strong>. Sou um advogado apaixonado pelo que faço, especializado em direito previdenciário e assistencial. Com anos de experiência e um profundo entendimento das leis e regulamentos, estou comprometido em fornecer consultoria e representação jurídica de alta qualidade.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Minha abordagem é baseada na empatia e no comprometimento com as necessidades dos meus clientes. Acredito que cada caso é único e merece atenção e estratégia personalizadas para alcançar o melhor resultado possível.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Estou aqui para ajudar você a entender seus direitos e a navegar pelo complexo mundo jurídico com confiança. Entre em contato para uma consulta personalizada e descubra como posso ajudar a resolver suas questões jurídicas.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong className="text-blue-800">Minhas credenciais:</strong> Formado pela [Nome da Universidade], com especialização em direito previdenciário. Além disso, participei de diversos cursos e seminários para manter-me atualizado com as mudanças na legislação.
            </p>
          </div>
          
          {/* Redes Sociais e Call to Action */}
          <div className="flex flex-col items-center md:items-start mb-6">
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-800 hover:text-blue-600">
                <FaFacebook size={32} />
              </a>
              <a href="#" className="text-blue-800 hover:text-blue-600">
                <FaTwitter size={32} />
              </a>
              <a href="#" className="text-blue-800 hover:text-blue-600">
                <FaLinkedin size={32} />
              </a>
              <a href="#" className="text-blue-800 hover:text-blue-600">
                <FaInstagram size={32} />
              </a>
            </div>
            <button className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Entre em Contato
            </button>
          </div>
        </div>
        
        {/* Imagem de Perfil com Gradiente Personalizado e Efeitos de Estilo */}
        <div className="hidden md:block md:w-1/2 relative h-screen overflow-hidden">
          <div className="absolute inset-0 rounded-r-lg">
            <Image
              src='/assets/images/about-me.jpeg'
              alt="Perfil"
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(243,_244,_246,_var(--tw-bg-opacity)),_transparent_40%)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
