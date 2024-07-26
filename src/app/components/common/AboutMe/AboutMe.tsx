import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagem de Perfil */}
        <div className="md:w-1/3 mb-8 md:mb-0 relative">
          <Image
            src='/assets/images/about-me.jfif'
            alt="Perfil"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg border-4 border-blue-600"
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent rounded-b-lg"></div>
        </div>
        
        {/* Texto Sobre Mim */}
        <div className="md:w-2/3 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Sobre Mim</h2>
          <p className="text-gray-700 mb-4">
            Sou um advogado apaixonado pelo que faço, especializado em direito previdenciário e assistencial. Com anos de experiência e um profundo entendimento das leis e regulamentos, estou comprometido em fornecer consultoria e representação jurídica de alta qualidade.
          </p>
          <p className="text-gray-700 mb-4">
            Minha abordagem é baseada na empatia e no comprometimento com as necessidades dos meus clientes. Acredito que cada caso é único e merece atenção e estratégia personalizadas para alcançar o melhor resultado possível.
          </p>
          <p className="text-gray-700">
            Estou aqui para ajudar você a entender seus direitos e a navegar pelo complexo mundo jurídico com confiança. Entre em contato para uma consulta personalizada e descubra como posso ajudar a resolver suas questões jurídicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
