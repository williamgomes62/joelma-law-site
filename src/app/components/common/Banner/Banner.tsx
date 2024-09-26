"use client";

import Image from 'next/image';

export default function Banner() {
  const content = [
    "O Benefício de Prestação Continuada (BPC LOAS) é um benefício assistencial previsto na Lei Orgânica da Assistência Social (LOAS). É destinado a garantir um salário mínimo mensal para pessoas idosas com 65 anos ou mais e pessoas com deficiência de qualquer idade, que comprovem não possuir meios de prover a própria manutenção e cuja renda familiar per capita seja inferior a 1/4 do salário mínimo.",
    "O BPC LOAS não requer contribuição prévia ao INSS e é um direito previsto para assegurar a dignidade e o bem-estar dos beneficiários."
  ];
  return (
    <>
      <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center text-white">
        {/* Background Image */}
        <Image
          src="/assets/images/banner-bpc-loas.png" // Substitua pelo caminho da imagem
          alt="Banner BPC/LOAS"
          layout="fill"
          objectFit="cover"
          className="brightness-50" // Diminui o brilho para melhor legibilidade do texto
        />

        {/* Overlay with Title and Subtitle */}
        <div className="absolute  md:tex-left px-4 lg:px-0 container mx-auto max-w-4xl">
          <h1 className="text-3xl lg:text-5xl font-bold">Seu filho com autismo pode ter direito a um salário mínimo do Governo</h1>
          <p className="mt-4 text-xl lg:text-2xl">
            BPC/LOAS é um benefício do INSS para pessoas com autismo
          </p>
        </div>
      </div>
    </>
  );
}
