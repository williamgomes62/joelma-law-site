"use client";

interface StatsProps {
  casesAttended: number; // Número de casos atendidos
  statesServed: number; // Número de estados atendidos
  yearsOfExperience: number; // Anos de atuação
}

export default function Stats({ casesAttended, statesServed, yearsOfExperience }: StatsProps) {
  return (
    <section className="py-4 md:py-12 px-6 bg-gray-100">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Confiança, Experiência e Resultados em BPC/LOAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 - Casos Atendidos */}
          <div className="glass-card p-6 rounded-lg shadow-lg bg-white/40 backdrop-blur-md">
            <h3 className="text-4xl font-bold text-blue-600">+{casesAttended}</h3>
            <p className="text-lg text-gray-700 mt-2">Casos de BPC/LOAS Atendidos</p>
            <p className="text-sm text-gray-600 mt-4">
              Já ajudei centenas de pessoas a garantir seu direito ao BPC/LOAS. Agora, você pode ser o próximo.
            </p>
          </div>

          {/* Card 2 - Estados Atendidos */}
          <div className="glass-card p-6 rounded-lg shadow-lg bg-white/40 backdrop-blur-md">
            <h3 className="text-4xl font-bold text-blue-600">{statesServed}</h3>
            <p className="text-lg text-gray-700 mt-2">Estados Atendidos</p>
            <p className="text-sm text-gray-600 mt-4">
              Atuação em diversas regiões do Brasil, garantindo que o BPC/LOAS chegue a quem precisa, onde quer que esteja.
            </p>
          </div>

          {/* Card 3 - Anos de Atuação */}
          <div className="glass-card p-6 rounded-lg shadow-lg bg-white/40 backdrop-blur-md">
            <h3 className="text-4xl font-bold text-blue-600">+{yearsOfExperience}</h3>
            <p className="text-lg text-gray-700 mt-2">Anos de Atuação</p>
            <p className="text-sm text-gray-600 mt-4">
              Experiência em garantir direitos e benefícios para quem precisa.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/contato"
            className="inline-block mt-0 md:mt-4 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            style={{ boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)' }}  // Box-shadow mais forte
          >
            Quero Garantir Meu Benefício
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Fale conosco para entender melhor o seu direito ao benefício.
          </p>
        </div>
      </div>
    </section>
  );
}
