import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void; contactType: string; contactInfo: string }> = ({ isOpen, onClose, contactType, contactInfo }) => {
  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${contactType} copiado para a área de transferência!`);
  };

  return (
    <div className="fixed inset-0 flex px-4 items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-300 ease-in-out">
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-sm w-full transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">

        {/* Botão de fechar no canto superior direito */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <span className="sr-only">Fechar</span>
          <FaTimes className="w-6 h-6 bg-gray-600 text-white rounded-full p-1" />
        </button>

        <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 mr-5">
          {contactType === 'Telefone' ? 'Número de Telefone' : 'Endereço de E-mail'}
        </h2>
        <p className="text-gray-700 text-center p-1 text-lg md:p-2">{contactInfo}</p>

        <div className="flex flex-col mt-4 space-y-3">
          {contactType === 'Telefone' ? (
            <a
              href={`tel:${contactInfo}`}
              className="bg-blue-600 text-white py-2 px-4 text-center rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Ligar Agora
            </a>
          ) : (
            <a
              href={`mailto:${contactInfo}`}
              className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Enviar E-mail
            </a>
          )}

          <button
            onClick={() => copyToClipboard(contactInfo)}
            className="inline-block w-full text-center text-blue-600 hover:underline font-medium transition duration-150 ease-in-out transform hover:scale-105"
          >
            Copiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
