"use client";

interface StatsOverlayProps {
  casesAttended: number;
  statesServed: number;
  yearsOfExperience: number;
}

export default function StatsOverlay({ casesAttended, statesServed, yearsOfExperience }: StatsOverlayProps) {
  return (
    <div className="relative -translate-y-1/2 z-10">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Casos Atendidos */}
        <div className="glass-card p-6 rounded-lg shadow-lg bg-white/40 backdrop-blur-md">
          <h3 className="text-4xl font-bold text-blue-600">+{casesAttended}</h3>
          <p className="text-lg text-gray-700 mt-2">Casos de BPC/LOAS Atendidos</p>
          <p className="text-sm text-gray-600 mt-4">
            Joelma Lima já ajudou centenas de pessoas a garantir seu direito ao BPC/LOAS. Agora, você pode ser o próximo.
          </p>
        </div>

        {/* Card 2 - Estados Atendidos */}
        <div className="glass-card p-6 rounded-lg shadow-lg bg-white/40 backdrop-blur-md">
          <h3 className="text-4xl font-bold text-blue-600">+{statesServed}</h3>
          <p className="text-lg text-gray-700 mt-2">Estados Atendidos</p>
          <p className="text-sm text-gray-600 mt-4">
            Atuação em diversas regiões do Brasil, garantindo que o BPC/LOAS chegue a quem precisa, onde quer que esteja.
          </p>
        </div>

        {/* Card 3 - Anos de Atuação */}
        <div className="glass-card p-6 rounded-lg shadow-lg bg-white/40 backdrop-blur-md">
          <h3 className="text-4xl font-bold text-blue-600">{yearsOfExperience}</h3>
          <p className="text-lg text-gray-700 mt-2">Anos de Atuação</p>
          <p className="text-sm text-gray-600 mt-4">
            Mais de uma década de experiência em garantir direitos e benefícios para quem precisa.
          </p>
        </div>
      </div>
    </div>
  );
}
