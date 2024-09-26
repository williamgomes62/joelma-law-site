import './styles.css';
import 'animate.css/animate.min.css';
import whatsAppLink from '@/app/utils/whatsapp-link';

export default function HomeBanner() {
  return (
    <>
      <div id="home-banner" className="h-[650px] sm:h-[625px] relative isolate pt-14 px-4 sm:px-6 lg:px-8 bg-white banner">
        <div className="background-gradient"></div>
        <img
          src='https://lh3.googleusercontent.com/proxy/iU2s7uDIh4FL-0Gc-qkHKfwqHTbAQskFW_vExOofEWtH94wR0gwn0dSlGyXCFKtHdU4T36PTuZRg06py_uNJljYVe2OgqpJc9Iv_aLsXSt7J-o_DJV-n1-cz'
        />
        <div className="mx-auto container content">
          <div className="banner-content text-center py-16 md:pr-24">
            <div className="animate-slide-in-left">
              <div className="m-0 mb-2 sm:mb-4 w-fit p-2 sm:p-3 px-4 sm:px-6 border border-solid border-white rounded-xl">
                <h2 className="text-sm sm:text-md md:text-lg lg:text-xl m-0 p-0 text-white leading-tight">BPC/LOAS</h2>
              </div>
              <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                Advogada especialista em Benefícios Assistenciais
              </h1>
              <p className="description text-lg text-white mb-6 text-left">
                Sou advogada com mais de 10 anos de experiência e te ajudo a conseguir seu benefício assistencial,
                <span className="font-bold text-yellow-400 bg-gray-800 px-2 py-1 rounded shadow-lg ml-1">
                  sem NUNCA ter contribuído com o INSS.
                </span>
              </p>
              <div className="cta-container rounded-3xl flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href={whatsAppLink} className="cta-button inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-3xl hover:bg-blue-700 transition duration-300">
                  ENTRAR EM CONTATO
                </a>
                <span className="text-center sm:text-left">
                  <p className="inline-block text-lg font-medium text-green-500">
                    Atendimento 100% digital
                  </p>
                  <span className="block text-white sm:text-black">Atendemos em todo o Brasil</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
