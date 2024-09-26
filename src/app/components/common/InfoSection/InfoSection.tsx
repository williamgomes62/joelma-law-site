"use client";

import Image from 'next/image';
import './styles.css';

interface InfoSectionProps {
  title: string;
  content: string[]; // Defina 'content' como um array de strings
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function InfoSection({
  title,
  content,
  imageUrl,
  imageAlt,
  reverse = false,
}: InfoSectionProps) {
  return (
    <section className="info-section pt-10 pb-6 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className={`flex-container flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} md:space-x-8 md:space-x-reverse`}>
          {/* Imagem */}
          <div className="flex-1">
            <div className="relative w-full h-0 pb-[66.67%]"> {/* Mantém a proporção da imagem */}
              <Image 
                src={imageUrl} 
                alt={imageAlt} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg shadow-lg" 
                placeholder="blur" 
                blurDataURL="/path/to/blur-placeholder.png"  // Substitua pela URL da imagem de placeholder
              />
            </div>
            {/* Botão de call to action */}
            <div className="mt-4 text-center">
              <a 
                href="/contato" 
                className="inline-block px-8 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                style={{ boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)' }}  // Box-shadow mais forte
              >
                Dar entrada no BPC/LOAS
              </a>
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[rgb(17,24,39)]">
              {title}
            </h2>
            {content.map((paragraph, index) => (
              <p key={index} className="text-md md:text-lg mb-4 text-[rgb(75,85,99)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
