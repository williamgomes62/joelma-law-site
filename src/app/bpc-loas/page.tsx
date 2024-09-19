import Banner from "../components/common/Banner/Banner";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import HighlightSection from "../components/common/HighlightSection/HighlightSection";
import InfoSection from "../components/common/InfoSection/InfoSection";
import { FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import Stats from "../components/common/Stats/Stats";

export default function BpcLoasPage() {
  const content = [
    "O Benefício de Prestação Continuada (BPC LOAS) é um benefício assistencial previsto na Lei Orgânica da Assistência Social (LOAS). É destinado a garantir um salário mínimo mensal para pessoas idosas com 65 anos ou mais e pessoas com deficiência de qualquer idade, que comprovem não possuir meios de prover a própria manutenção e cuja renda familiar per capita seja inferior a 1/4 do salário mínimo.",
    "O BPC LOAS não requer contribuição prévia ao INSS e é um direito previsto para assegurar a dignidade e o bem-estar dos beneficiários."
  ];
  const diseases = [
    'Deficiência visual severa',
    'Deficiência auditiva severa',
    'Deficiência física grave',
    'Deficiência mental severa',
    'Esclerose múltipla',
    'Doenças neurodegenerativas'
  ];

  return (
    <>
      <Header />
      <Banner />
      <InfoSection
        title="O que é o BPC LOAS?"
        content={content}
        imageUrl="/assets/images/bpc-LOAS.webp"
        imageAlt="Informações sobre BPC LOAS"
        reverse={true                                                                                                                                     }
      />
      <HighlightSection
        diseases={diseases}
        buttonText="Conversar com um advogado especialista em BPC/LOAS"
        buttonLink="/contato"
      />
      <Stats
        casesAttended={50}
        statesServed={26}
        yearsOfExperience={7}
      />
      {/* <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Build your website</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Release & Launch</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        {/* <section className="bg-[rgb(17,24,39)] text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold mb-4">Benefício de Prestação Continuada (BPC LOAS)</h1>
            <p className="text-lg mb-6">
              O BPC LOAS é um benefício assistencial que garante um salário mínimo mensal para pessoas idosas e com deficiência em situação de vulnerabilidade social.
            </p>
            <a href="#learn-more" className="bg-[rgb(37,99,235)] hover:bg-[rgb(31,41,55)] text-white py-2 px-4 rounded-lg text-lg font-semibold">
              Saiba Mais
            </a>
          </div>
        </section> */}

        {/* What is BPC LOAS */}
        {/* <section id="learn-more" className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex-1 mb-8 md:mb-0">
                <img src="https://magis.agej.com.br/wp-content/uploads/2021/08/bpc-LOAS.jpg" alt="Informações sobre BPC LOAS" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-4 text-[rgb(17,24,39)]">O que é o BPC LOAS?</h2>
                <p className="text-lg mb-4 text-[rgb(75,85,99)]">
                  O Benefício de Prestação Continuada (BPC LOAS) é um benefício assistencial previsto na Lei Orgânica da Assistência Social (LOAS). É destinado a garantir um salário mínimo mensal para pessoas idosas com 65 anos ou mais e pessoas com deficiência de qualquer idade, que comprovem não possuir meios de prover a própria manutenção e cuja renda familiar per capita seja inferior a 1/4 do salário mínimo.
                </p>
                <p className="text-lg mb-4 text-[rgb(75,85,99)]">
                  O BPC LOAS não requer contribuição prévia ao INSS e é um direito previsto para assegurar a dignidade e o bem-estar dos beneficiários.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Eligibility */}
        <section className="bg-[rgb(243,244,246)] py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold text-center mb-8 text-[rgb(17,24,39)]">Quem pode receber o BPC LOAS?</h2>
            <ul className="list-disc list-inside space-y-4 text-lg text-[rgb(75,85,99)]">
              <li>Pessoas com 65 anos ou mais, com renda familiar per capita inferior a 1/4 do salário mínimo.</li>
              <li>Pessoas com deficiência de qualquer idade, com renda familiar per capita inferior a 1/4 do salário mínimo.</li>
              <li>Que não possuam meios de prover a própria manutenção e não sejam beneficiários de outros programas assistenciais.</li>
            </ul>
          </div>
        </section>

        {/* How to Apply */}
        {/* <section className="py-12 px-6 bg-[rgb(250,204,21)]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold text-center mb-8 text-[rgb(17,24,39)]">Como Solicitar o BPC LOAS</h2>
            <p className="text-lg mb-6 text-[rgb(17,24,39)]">
              A solicitação do BPC LOAS deve ser feita no Centro de Referência de Assistência Social (CRAS) do seu município. É necessário apresentar documentação que comprove a situação de vulnerabilidade e a renda familiar.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-[rgb(37,99,235)] hover:bg-[rgb(31,41,55)] text-white py-3 px-6 rounded-lg text-lg font-semibold">
                Fale com um Especialista
              </a>
              <a href="#contact" className="bg-[rgb(34,197,94)] hover:bg-[rgb(31,41,55)] text-white py-3 px-6 rounded-lg text-lg font-semibold">
                Agendar Consulta
              </a>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        {/* <section id="contact" className="py-12 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-8 text-[rgb(17,24,39)]">Entre em Contato</h2>
            <p className="text-lg mb-6 text-[rgb(75,85,99)]">
              Caso tenha dúvidas ou precise de mais informações sobre o BPC LOAS, entre em contato com a nossa equipe especializada. Estamos aqui para ajudar!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2 text-[rgb(17,24,39)]">
                <FaPhone className="text-[rgb(37,99,235)]" />
                <span className="text-lg">+55 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-[rgb(17,24,39)]">
                <FaEnvelope className="text-[rgb(37,99,235)]" />
                <span className="text-lg">contato@advocacia.com.br</span>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
}
