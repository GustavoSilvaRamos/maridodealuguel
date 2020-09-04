export function Hero() {
  return (
    <div className="flex min-h-screen bg-black ">
      <div className="w-4/12 h-full bg-black">
        <div className="flex flex-col items-center pt-20">
          <i className="text-5xl text-goldenrod fas fa-hammer" />
          <h1 className="text-3xl tracking-wider text-white ">Gustavo Silva</h1>
          <p className="w-8/12 text-sm tracking-wider text-center text-white text-md">
            MARIDO DE ALUGUEL QUALIFICADO
          </p>
        </div>
        <div className="flex flex-col items-center pt-20 leading-8">
          <p className="text-sm font-semibold tracking-wider text-white cursor-pointer hover:text-goldenrod ">
            Página Inicial
          </p>
          <p className="text-sm font-semibold tracking-wider text-white cursor-pointer hover:text-goldenrod">
            Serviços
          </p>
          <p className="text-sm font-semibold tracking-wider text-white cursor-pointer hover:text-goldenrod">
            Referências
          </p>
          <p className="text-sm font-semibold tracking-wider text-white cursor-pointer hover:text-goldenrod">
            Sobre Mim
          </p>
          <p className="text-sm font-semibold tracking-wider text-white cursor-pointer hover:text-goldenrod">
            Lista de Preços
          </p>
          <p className="text-sm font-semibold tracking-wider text-white cursor-pointer hover:text-goldenrod">
            Contate-me
          </p>
        </div>
        <div className="flex flex-col items-center pt-20 pb-3">
          <p className="text-xl tracking-wider text-gray-500">
            Tel.: 55 24 9845 6125
          </p>
          <p className="text-sm tracking-wide text-gray-500 ">
            Desenvolvido Por{' '}
            <span className="underline cursor-pointer">Webode</span>
          </p>
        </div>
      </div>
      <div className="relative items-center w-full fundo">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-75" />
        <div className="relative z-20 flex flex-col">
          <h1 className="pt-20 text-6xl font-thin tracking-wider text-center text-white">
            Ajuda <br />
            competente
            <br /> para sua casa
          </h1>
          <p className="pt-20 tracking-wider text-center text-white">
            MARIDO DE ALUGUEL SEDIADO NO RIO DE JANEIRO
          </p>
        </div>
      </div>
    </div>
  )
}
