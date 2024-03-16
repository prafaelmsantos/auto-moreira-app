/** @format */

import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {IoLocationSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import ContactForm from "./form/ContactForm";

function Contact() {
  return (
    <section id="contact-main">
      <div className="py-8 px-8 lg:px-28 my-16 bg-[url('./images/contact-bg.png')] bg-[50%] bg-no-repeat bg-auto text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 lg:max-w-md">
          <div className="space-y-4">
            <div>
              <h1 className="font-bold text-2.5rem">
                Precisa de informações adicionais?
              </h1>
            </div>
            <div>
              <p className="text-custom-grey">
                Temos como principal missão, garantir a melhor Qualidade e
                Confiança nos seus negócios.
              </p>
            </div>
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="tel:231472555"
                  className="flex items-center justify-center lg:justify-start gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <span className="font-semibold">(+351) 231 472 555</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="mailto:automoreiraportugal@gmail.com"
                  className="flex items-center justify-center lg:justify-start gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    <GrMail />
                  </span>
                  <span className="font-semibold">
                    automoreiraportugal@gmail.com
                  </span>
                </NavLink>
              </li>
              <li>
                <a
                  href="#top"
                  className="flex items-center justify-center lg:justify-start gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    <IoLocationSharp />
                  </span>
                  <span className="font-semibold">Coimbra, Portugal</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
