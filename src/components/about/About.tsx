/** @format */

import {aboutGrid} from "../../data/content";
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:w-fit">
            {aboutGrid.map((data) => (
              <div key={data.id} className="flex flex-col gap-4 lg:gap-6">
                <img
                  src={data.img}
                  alt={data.text}
                  width={data.id === 3 ? 50 : 70}
                  height={data.id === 3 ? 50 : 70}
                  className="m-auto lg:m-0"
                />
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-2 lg:items-center">
                  <h1 className="font-bold text-5xl">{data.amount}</h1>
                  <p className="text-custom-grey text-1.1rem">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
