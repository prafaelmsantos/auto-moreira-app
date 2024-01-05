/** @format */

import {ImQuotesRight} from "react-icons/im";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="py-8 px-8 lg:px-60 my-20 space-y-10 lg:space-y-16">
        <div className="space-y-6">
          <div className="text-center font-bold space-y-2">
            <h1 className="text-2.5rem leading-tight">Avaliação de clientes</h1>
          </div>
          <div>
            <p className="text-center text-custom-grey text-1.1rem lg:px-36">
              Os nossos clientes experimentaram os nossos serviços e viaturas e
              estão ansiosos por compartilhar as suas experiências.
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="p-8 lg:p-12 bg-white rounded shadow-white-box flex flex-col justify-between gap-8">
            <div>
              <p className="font-medium text-xl lg:text-[1.35rem] lg:leading-relaxed">
                "Compramos um carro neste stand e tivemos uma experiência
                incrível! Equipa simpatica, compreensiva e preços muito
                acessíveis."
              </p>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="flex items-center justify-center gap-4">
                <div>
                  <img
                    src={require("../../images/parry-hotter.jpg")}
                    alt="Harry Potter"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Harry Potter</h3>
                  <p>Lisboa, Portugal</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <span className="text-custom-orange text-5xl">
                  <ImQuotesRight />
                </span>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col justify-between p-8 lg:p-12 rounded shadow-white-box">
            <div>
              <p className="font-medium text-xl lg:text-[1.35rem] lg:leading-relaxed">
                "Recomendo este stand para compra de carros!"
              </p>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="flex items-center justify-center gap-4">
                <div>
                  <img
                    src={require("../../images/noah-rizzly.jpg")}
                    alt="noah rizzly"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Cristiano Ronaldo</h3>
                  <p>Madeira, Portugal</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <span className="text-custom-orange text-5xl">
                  <ImQuotesRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
