"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <section className="relative py-12 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-[rgb(243 244 246 / var(--tw-bg-opacity))]">
      {/* Curvas dinâmicas no fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(17, 24, 39, 0.7)"
            d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,229.3C672,235,768,181,864,149.3C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Conteúdo de avaliações */}
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          O que nossos clientes dizem
        </h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-800 text-white shadow-xl rounded-lg p-6 transform transition-transform hover:-translate-y-2">
                <p className="text-lg italic text-gray-300 mb-4">
                  "{review.feedback}"
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-100">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-400">{review.location}</p>
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
    </section>
  );
};

export default CustomerReviews;
