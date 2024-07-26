import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-blue-600">Início</a></li>
              <li className="mb-2"><a href="/sobre" className="hover:text-blue-600">Sobre Mim</a></li>
              <li className="mb-2"><a href="/servicos" className="hover:text-blue-600">Serviços</a></li>
              <li className="mb-2"><a href="/depoimentos" className="hover:text-blue-600">Depoimentos</a></li>
              <li className="mb-2"><a href="/blog" className="hover:text-blue-600">Blog</a></li>
              <li className="mb-2"><a href="/contato" className="hover:text-blue-600">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <ul className="flex space-x-6">
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p>Endereço: Av. Nossa Sra. do Carmo, 425 - Centro, Mariana - MG, 35420-000</p>
            <p>Telefone: (31) 99579-2679</p>
            <p>Email: contato@advogada.com.br</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p>&copy; 2024 Joelma Lima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
