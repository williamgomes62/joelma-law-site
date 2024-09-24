'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './styles.css';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quais são os critérios para receber benefícios assistenciais?',
      answer:
        'Os critérios incluem comprovação de baixa renda, incapacidade para o trabalho e não recebimento de outros benefícios previdenciários.',
    },
    {
      question: 'Como funciona o processo para solicitar o benefício?',
      answer:
        'O processo inclui a análise da documentação, a avaliação da situação financeira e de saúde, seguido da solicitação formal ao INSS.',
    },
    {
      question: 'Posso receber o benefício assistencial e aposentadoria?',
      answer:
        'Não, o benefício assistencial é incompatível com outros benefícios previdenciários, como a aposentadoria.',
    },
    {
      question: 'Quais documentos são necessários para dar entrada no benefício?',
      answer:
        'É necessário apresentar documentos de identidade, comprovante de residência, laudos médicos, comprovantes de renda e outros documentos que demonstrem sua situação.',
    },
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 md:py-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-8">
          Perguntas Frequentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`relative bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${
                activeIndex === index ? 'border-l-4 border-blue-500' : 'border-l-0'
              }`}
            >
              <div
                className={`flex justify-between items-center p-3 cursor-pointer transition-colors duration-300 ${
                  activeIndex === index ? 'bg-gray-600 text-blue-400' : 'hover:bg-gray-600'
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <h3 className={`text-md font-medium ${activeIndex === index ? 'text-blue-400' : 'text-white'}`}>
                  {faq.question}
                </h3>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <FaChevronDown className={`${activeIndex === index ? 'text-blue-400' : 'text-white'}`} />
                </div>
              </div>
              <div
                className={`bg-gray-800 px-5 overflow-hidden transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-40 py-4' : 'max-h-0'
                }`}
                style={{ transitionProperty: 'max-height, padding' }}
              >
                <p className="answer text-sm md:text-md text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
