/** @format */

import {BsFillTelephoneFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";

function GetTouch() {
  return (
    <section id="get-in-touch">
      <div className="px-8 py-8 lg:py-20 lg:mt-16 bg-[url('./images/getintouch-banner-bg.png')] relative">
        <div className="absolute inset-0 bg-lighter-black/80" />
        <div className="z-50 relative text-center text-2xl font-bold flex flex-col gap-8 lg:flex-row lg:justify-center lg:text-4xl">
          <div>
            <h1 className="leading-tight text-white">
              Reserve um veículo através do nosso contacto
            </h1>
          </div>
          <div>
            <NavLink
              to="tel:231472555"
              className="flex items-center justify-center gap-2 text-custom-orange"
            >
              <span>
                <BsFillTelephoneFill />
              </span>
              <span className="font-semibold">(+351) 231 472 555</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetTouch;
