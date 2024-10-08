'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './styles.css';
import whatsAppLink from '@/app/utils/whatsapp-link';

const AboutMe = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsText.start({
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
          });
          controlsImage.start({
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
          });
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controlsText, controlsImage]);

  return (
    <section id="about" ref={ref} className="about-me px-4 sm:px-6 lg:px-8 bg-gray-100 py-10 relative overflow-hidden">
      <div className="container gap-6 mx-auto flex flex-col md:flex-row">
        {/* Bloco de Texto */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={controlsText}
          className="w-full md:w-1/2 flex flex-col justify-center text-left z-10"
        >
          <h3 className="text-xl text-gray-500 mb-2">Meu perfil</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Sobre Mim</h2>

          {/* Imagem de Perfil no Mobile */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={controlsImage}
            className="mobile-img-container block md:hidden relative w-full mb-11"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src='/assets/images/about-me-blur.jpeg'
                alt="Perfil"
                layout="fill"
                objectFit="cover"
                className="rounded-xl mobile-img"
              />
              <div className="portrait-effect-mobile rounded-xl"></div>
            </div>
          </motion.div>

          {/* Corpo do Texto */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed text-md md:text-lg">
              <strong className="text-blue-800">Prazer, sou a Dra. Joelma Lima, mas pode me chamar de Jô 😉</strong>. Sou apaixonada pelo que faço, especializada em direito previdenciário e assistencial. Com anos de experiência e um profundo entendimento das leis e regulamentos, me comprometo em fornecer a melhor consultoria e representação jurídica possível.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-md md:text-lg">
              Minha abordagem é baseada na empatia e no comprometimento com as necessidades dos meus clientes. Acredito que cada caso é único e merece atenção e estratégia personalizadas para alcançar o melhor resultado possível.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-md md:text-lg">
              Estou aqui para ajudar você a entender seus direitos e a navegar pelo complexo mundo jurídico com confiança. Entre em contato para uma consulta personalizada e descubra como posso ajudar a resolver suas questões jurídicas.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-md md:text-lg">
              <strong className="text-blue-800">Minhas credenciais:</strong> Formada pela FUPAC, com especialização em direito previdenciário. Além disso, sigo participando de diversos cursos e seminários para manter-me atualizada com as mudanças na legislação.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-md md:text-lg">
              <strong className="text-blue-800">Especializações:</strong> Direito Previdenciário e  Direito da Saúde.
            </p>
            <p className="text-gray-700 leading-relaxed text-md md:text-lg">
              <strong className="text-blue-800">Registro:</strong> OAB 186.981/MG
            </p>
          </div>

          {/* Redes Sociais e Call to Action */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/joelimalimadv" className="text-blue-800 hover:text-blue-600">
                <FaFacebook size={32} />
              </a>
              <a href="https://www.linkedin.com/in/joelma-lima-17a6a0262/" className="text-blue-800 hover:text-blue-600">
                <FaLinkedin size={32} />
              </a>
              <a href="https://www.instagram.com/joelmalimadv/" className="text-blue-800 hover:text-blue-600">
                <FaInstagram size={32} />
              </a>
            </div>
            <a href={whatsAppLink} rel="noopener noreferrer">
              <button className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Entre em Contato
              </button>
            </a>
          </div>
        </motion.div>

        {/* Imagem de Perfil para Desktop */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={controlsImage}
          className="desktop-img-container hidden sm:block sm:w-1/2 relative"
        >
          <div className="portrait">
            <Image
              src='/assets/images/about-me-blur.jpeg'
              alt="Perfil"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="portrait-effect rounded-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
