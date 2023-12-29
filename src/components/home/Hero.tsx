/** @format */

import React from "react";
import {AiFillCheckCircle} from "react-icons/ai";
import {IoIosArrowForward, IoIosArrowDown} from "react-icons/io";

import img1 from "../../images/home-hero-bg.png";
import img2 from "../../images/hero-big-car.png";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div className="px-8 lg:px-28 py-12 lg:py-0 h-screen flex items-center relative">
        <img
          src={img1}
          alt="hero"
          width={680}
          height={870}
          className="absolute inset-y-0 right-0 -z-10 hidden lg:inline-block"
        />
        <img
          src={img2}
          alt="hero"
          width={800}
          height={450}
          className="absolute right-0 hidden lg:inline-block"
        />
        <div className="space-y-8 text-center lg:text-left lg:max-w-lg">
          <div className="font-bold space-y-2">
            <h3 className="text-xl">Bem-vindo ao</h3>
            <h1 className="text-[3.2rem] leading-tight">
              Auto <span className="text-custom-orange">Moreira</span>
            </h1>
          </div>
          <div>
            <p className="text-custom-grey text-1.1rem">
              Temos como principal missão, garantir a melhor Qualidade e
              Confiança nos seus negócios.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row text-white font-bold gap-6">
            <a
              href="#booking"
              className="bg-custom-orange flex items-center gap-2 justify-center py-4 px-4 lg:px-8 shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded border-2 border-custom-orange"
            >
              <span>Encontrar veículo</span>
              <span className="text-xl">
                <AiFillCheckCircle />
              </span>
            </a>
            <Link
              className="bg-black flex items-center gap-2 justify-center py-4 px-4 lg:px-8 transition-all duration-300 ease-linear hover:bg-transparent hover:text-black rounded border-2 border-black"
              onClick={() => window.scrollTo(0, 0)}
              to="/about"
            >
              <span>Sobre Nós</span>
              <span className="text-xl">
                <IoIosArrowForward />
              </span>
            </Link>
            {/* <a
              onClick={() => window.scrollTo(0, 0)}
              href="/about"
              className="bg-black flex items-center gap-2 justify-center py-4 px-4 lg:px-8 transition-all duration-300 ease-linear hover:bg-transparent hover:text-black rounded border-2 border-black"
            >
              <span>Sobre Nós</span>
              <span className="text-xl">
                <IoIosArrowForward />
              </span>
            </a> */}
          </div>
        </div>
        <a
          href="#booking"
          className="absolute bottom-16 inset-x-1/2 text-3xl animate-bounce"
        >
          <IoIosArrowDown />
        </a>
      </div>
    </section>
  );
}

export default Hero;
