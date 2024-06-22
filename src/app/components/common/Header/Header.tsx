import './Header.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/assets/images/logo.jpeg" alt="Law Firm Logo" width={50} height={50} />
        </div>
        <nav className="flex-1">
          <ul className="flex justify-center space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#services" className="hover:underline">Serviços</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
        <div className="text-right">
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@advocacia.com</p>
        </div>
      </div>
    </header>
  )
}