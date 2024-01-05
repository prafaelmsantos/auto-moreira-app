/** @format */

import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {NavLink} from "react-router-dom";
import {navLink} from "../../data/link";
import {NavType} from "../../models/enums/NavLinkType";

function Footer() {
  return (
    <section id="footer">
      <div className="bg-white px-8 lg:px-28 py-16 text-center grid grid-cols-1 lg:grid-cols-4 lg:text-left gap-20">
        <div className="space-y-3">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl">Auto Moreira</h1>
            <p className="text-custom-grey">
              O Auto Moreira tem como principal missão, garantir a melhor
              Qualidade e Confiança nos seus negócios.
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="tel:123456789"
                  className="flex items-center justify-center lg:justify-start gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <span className="font-semibold">(+351) 231472555</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="mailto:automoreira@gmail.com"
                  className="flex items-center justify-center lg:justify-start gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    <GrMail />
                  </span>
                  <span className="font-semibold">automoreira@gmail.com</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Mapa do Site</h1>
          <ul className="space-y-2">
            {navLink
              .filter((x) => x.navType === NavType.MAIN)
              .map((data) => (
                <li key={data.id}>
                  <NavLink
                    className="hover:text-custom-orange transition-all duration-300 ease-linear"
                    to={data.url}
                    style={({isActive}) => {
                      if (isActive) {
                        return {
                          color: "#ff4d30",
                        };
                      }
                    }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {data.link}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
        <div className="space-y-3">
          <div>
            <h1 className="font-bold text-2xl">Horário</h1>
          </div>
          <div className="space-y-2">
            <p>Seg. a Sex.: 9:00 - 18:00</p>
            <p>Sábado: 9:30 - 18:00</p>
            <p> Domingo: Fechado</p>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Proteção de Dados</h1>
          <ul className="space-y-2">
            <li>
              <a
                href="#termosECondições"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Termos e Condições
              </a>
            </li>
            <li>
              <a
                href="#politicaDeCookies"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Política de Cookies
              </a>
            </li>
            <li>
              <a
                href="#politicaDePrivacidade"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white text-center mb-8">
        <h1 className="font-bold">
          2024 @AutoMoreira | Todos os Direitos Reservados.
        </h1>
      </div>
    </section>
  );
}

export default Footer;
