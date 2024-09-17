"use client";

import { FaStethoscope, FaSyringe, FaHandHoldingHeart, FaBrain, FaBone } from 'react-icons/fa';

const iconStyles = "inline-block text-blue-600 mr-4";

interface HighlightSectionProps {
  diseases: string[]; // Supondo que 'diseases' seja um array de strings
  buttonText: string; // 'buttonText' é uma string
  buttonLink: string; // 'buttonLink' também é uma string
}

export default function HighlightSection({ diseases, buttonText, buttonLink }: HighlightSectionProps) {
  // Iconos para cada tipo de doença
  const icons = [
    <FaStethoscope className={iconStyles} key="1" />, // Exemplo de ícone
    <FaSyringe className={iconStyles} key="2" />,
    <FaHandHoldingHeart className={iconStyles} key="3" />,
    <FaBrain className={iconStyles} key="4" />,
    <FaBone className={iconStyles} key="5" />
  ];

  return (
    <section className="py-12 px-6 bg-gray-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-[rgb(17,24,39)] text-center">
          Doenças que Garantem o Direito ao BPC/LOAS
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            {diseases.map((disease, index) => (
              <div key={index} className="flex items-center text-lg text-[rgb(75,85,99)]">
                {icons[index % icons.length]} {/* Rotate through icons */}
                <span>{disease}</span>
              </div>
            ))}
          </div>
          {/* Botão de call to action */}
          <div className="mt-6 text-center">
            <a 
              href={buttonLink} 
              className="inline-block px-8 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              style={{ boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)' }}  // Box-shadow mais forte
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
