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
                  <h2 className="text-sm sm:text-md md:text-lg lg:text-xl m-0 p-0 text-white leading-tight">Advocacia Especializada</h2>
                </div>
                <h1 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Trabalho para defender seus Direitos
                </h1>
                <p className="description text-lg text-white mb-6 text-left">
                  Sou advogada com mais de 10 anos de experiência, atuante em processos judiciais e extrajudiciais.
                  Atuante em Direito da Saúde, Violência Obstétrica,Erro Médico, em favor dos consumidores/Pacientes e Benefícios Assistenciais- BPC/LOAS.
                </p>

                <div className="cta-container rounded-3xl flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a href="#" className="cta-button inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-3xl hover:bg-blue-700 transition duration-300">
                    ENTRAR EM CONTATO
                  </a>

                  <span className="text-center sm:text-left">
                    <p className="inline-block text-lg font-medium text-green-500">
                      Atendimento 100% digital
                    </p>
                    <span className="block text-white sm:text-black">Temos clientes em todos os estados do Brasil.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
    </>
  );
}