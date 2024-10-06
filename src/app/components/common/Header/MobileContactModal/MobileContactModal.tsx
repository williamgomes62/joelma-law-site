import React from 'react';

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void; contactType: string; contactInfo: string }> = ({ isOpen, onClose, contactType, contactInfo }) => {
  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${contactType} copiado para a área de transferência!`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        
        {/* Botão de fechar no canto superior direito com borda suave */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-[-10px] right-[-10px] bg-gray-100 rounded-full p-2 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        >
          <span className="sr-only">Fechar</span>
          <div className="w-5 h-5 text-gray-600 relative">
            <span className="absolute inset-0 bg-gray-600 w-[2px] h-full rotate-45"></span>
            <span className="absolute inset-0 bg-gray-600 w-[2px] h-full -rotate-45"></span>
          </div>
        </button>

        <h2 className="text-xl font-semibold">{contactType === 'Telefone' ? 'Número de Telefone' : 'Endereço de E-mail'}</h2>
        <p className="text-gray-700 mt-2">{contactInfo}</p>

        <button
          onClick={() => copyToClipboard(contactInfo)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 active:bg-blue-700 w-full"
        >
          Copiar
        </button>

        {contactType === 'Telefone' ? (
          <a
            href={`tel:${contactInfo}`}
            className="mt-3 inline-block w-full text-blue-500 hover:underline"
          >
            Ligar Agora
          </a>
        ) : (
          <a
            href={`mailto:${contactInfo}`}
            className="mt-3 inline-block w-full text-blue-500 hover:underline"
          >
            Enviar E-mail
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactModal;