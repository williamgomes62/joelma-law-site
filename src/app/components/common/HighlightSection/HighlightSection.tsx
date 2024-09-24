"use client";

import { FaStethoscope, FaSyringe, FaHandHoldingHeart, FaBrain, FaBone } from 'react-icons/fa';

const iconStyles = "inline-block text-blue-600 mr-4";

interface HighlightSectionProps {
  diseases: string[]; // Array de strings com as doenças
  buttonText: string; // Texto do botão
  buttonLink: string; // Link do botão
}

export default function HighlightSection({ diseases, buttonText, buttonLink }: HighlightSectionProps) {
  // Ícones associados a cada doença
  const icons = [
    <FaStethoscope className={iconStyles} key="1" />,
    <FaSyringe className={iconStyles} key="2" />,
    <FaHandHoldingHeart className={iconStyles} key="3" />,
    <FaBrain className={iconStyles} key="4" />,
    <FaBone className={iconStyles} key="5" />
  ];

  return (
    <section className="pb-10 pt-4 md:pt-6 px-4 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 text-center">
          Doenças que Garantem o Direito ao BPC/LOAS
        </h2>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl">
          <p className="text-md md:text-lg text-gray-700 mb-6 text-center">
            Se você ou alguém que conhece possui uma das doenças listadas abaixo, pode ter direito ao 
            Benefício de Prestação Continuada (BPC/LOAS). Mesmo que sua condição não esteja nesta lista, entre 
            em contato para verificar o seu caso.
          </p>
          {/* Lista de doenças dividida em duas colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-6 max-w-full">
            {diseases.map((disease, index) => (
              <div key={index} className="flex items-center text-md md:text-lg text-gray-800">
                {icons[index % icons.length]} {/* Rotação de ícones */}
                <span>{disease}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href={buttonLink} 
              className="inline-block px-6 py-3 md:px-10 md:py-4 bg-blue-600 text-white text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}  // Box-shadow mais forte
            >
              {buttonText}
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Fale conosco para entender melhor o seu direito ao benefício.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
