import './styles.css';
import 'animate.css/animate.min.css';

export default function HomeBanner() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-white banner">
        <div className="background-gradient"></div>
        <img
          src='https://lh3.googleusercontent.com/proxy/iU2s7uDIh4FL-0Gc-qkHKfwqHTbAQskFW_vExOofEWtH94wR0gwn0dSlGyXCFKtHdU4T36PTuZRg06py_uNJljYVe2OgqpJc9Iv_aLsXSt7J-o_DJV-n1-cz'
        />
        <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8 content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center py-16 col-span-2">
              <div className="animate__animated animate__fadeInLeft">
                <div className="m-0 mb-4 w-fit p-3 px-6 border border-solid border-white rounded-xl">
                  <h2 className="text-sm sm:text-md md:text-lg lg:text-xl m-0 p-0 text-white leading-tight">BPC/LOAS</h2>
                </div>
                <h1 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {/* Trabalho para defender seus Direitos */}
                  Advogada especialista em Benefícios Assistenciais
                </h1>
                <p className="description text-lg text-white mb-6 text-left">
                  Sou advogada com mais de 10 anos de experiência e te ajudo a conseguir seu benefício assistencial,
                  <span className="font-bold text-yellow-400 bg-gray-800 px-2 py-1 rounded shadow-lg ml-1">
                    sem NUNCA ter contribuído com o INSS.
                  </span>
                </p>
                <div className="cta-container rounded-3xl flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a href="#" className="cta-button inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-3xl hover:bg-blue-700 transition duration-300">
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
      </div>
    </>
  );
}