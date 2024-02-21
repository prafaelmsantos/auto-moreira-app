/** @format */

import Img1 from "../../images/about-main.jpg";

function About() {
  return (
    <section id="about-main">
      <div className="px-8 py-8 lg:px-60 lg:py-28 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
        <div>
          <img
            src={Img1}
            alt="about"
            width={1000}
            height={1000}
            className="m-auto w-full h-full"
          />
        </div>
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="font-bold space-y-2">
              <h3 className="text-xl">Sobre Nós</h3>
              <h1 className="text-2.5rem leading-tight">
                Auto Moreira - Venda e Reparação de Automóveis
              </h1>
            </div>
            <div>
              <p className="text-custom-grey text-1.1rem">
                O Auto Moreira - Venda e Reparação de Automóveis desenvolve a
                sua atividade com o CAE 45110 - Comércio de veículos automóveis
                ligeiros. É uma empresa que conta com mais de 15 anos de
                experiência no mercado de venda automóvel e tem como principal
                missão a Conquista, Satisfação e Fidelização do cliente,
                garantindo sempre a melhor Qualidade e Confiança nos seus
                negócios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
