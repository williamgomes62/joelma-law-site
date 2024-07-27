import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagem de Perfil */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src='/assets/images/about-me.jpeg'
            alt="Perfil"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        
        {/* Texto Sobre Mim */}
        <div className="w-full md:w-2/3 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Sobre Mim</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Sou um advogado apaixonado pelo que faço, especializado em direito previdenciário e assistencial. Com anos de experiência e um profundo entendimento das leis e regulamentos, estou comprometido em fornecer consultoria e representação jurídica de alta qualidade.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Minha abordagem é baseada na empatia e no comprometimento com as necessidades dos meus clientes. Acredito que cada caso é único e merece atenção e estratégia personalizadas para alcançar o melhor resultado possível.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Estou aqui para ajudar você a entender seus direitos e a navegar pelo complexo mundo jurídico com confiança. Entre em contato para uma consulta personalizada e descubra como posso ajudar a resolver suas questões jurídicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
