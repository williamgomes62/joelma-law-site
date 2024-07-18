'use client';
import './styles.css';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-8 border-blue-600 transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl hover:border-green-500 hover:scale-105">
    <div className="mb-4">{icon}</div>
    <h3 className="text-blue-600 text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-full hover:from-green-500 hover:to-green-700 transform transition-transform hover:scale-110">
      Saiba Mais
    </button>
  </div>
);


export default function Services() {

  return (
    <section className='services-section p-10 bg-gray-100'>
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-10">
        Nossos Serviços
      </h2>
      <div className="cards-container flex flex-wrap gap-6 justify-center p-10">
        <ServiceCard
          description={'Descrição'}
          icon={'Icone aqui'}
          title={'Título dfsdf sf sfd fs'}
        />
        <ServiceCard
          description={'Descrição'}
          icon={'Icone aqui'}
          title={'Título'}
        />
        <ServiceCard
          description={'Descrição'}
          icon={'Icone aqui'}
          title={'Título'}
        />
      </div>
    </section>
  );
}