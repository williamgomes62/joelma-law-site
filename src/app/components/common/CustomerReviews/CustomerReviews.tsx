'use client';
// Importar pacotes necessários
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const reviews = [
  {
    name: "Carlos A.",
    feedback: "Profissional extremamente competente, consegui meu BPC sem complicações. Recomendo demais!",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    name: "Maria F.",
    feedback: "Excelente atendimento e muita dedicação. Sempre disponível para esclarecer dúvidas.",
    location: "Rio de Janeiro, RJ",
    rating: 4,
  },
  {
    name: "João P.",
    feedback: "Minha experiência foi muito positiva. Recebi todo o suporte necessário para o processo.",
    location: "Curitiba, PR",
    rating: 5,
  },
  // Adicione mais avaliações conforme necessário
];

const CustomerReviews = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className="slick-arrow slick-next" />, // Mantém as setas padrão
    prevArrow: <div className="slick-arrow slick-prev" />, // Mantém as setas padrão
    responsive: [
      {
        breakpoint: 1024, // tablet e desktop
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600 font-pj">2,157 pessoas já deram feedback positivo</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">O que nossos clientes dizem</h2>
        </div>

        {/* Efeito de fundo com gradiente e blur */}
        <div className="relative mt-10">
          <div className="absolute inset-x-0 top-0 h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{
            background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
          }}></div>

          {/* Slider de avaliações */}
          <div className="relative">
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                    <p className="text-lg italic text-gray-700 mb-4">
                      "{review.feedback}"
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {review.name}
                        </p>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                      <div className="text-yellow-400">
                        {Array(review.rating)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
