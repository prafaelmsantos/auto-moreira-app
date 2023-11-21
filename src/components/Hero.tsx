import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MdArrowUpward } from "react-icons/md";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <Box id="home" className="hero-section" sx={{ px: 6 }}>
      <Box className="container">
        <img className="bg-shape" src={BgShape} alt="bg-shape" />
        <Box className="hero-content">
          <Box className="hero-content__text" sx={{ px: 10 }}>
            <h4>Bem-vindo ao</h4>
            <h1>
              Auto <span>Moreira</span>
            </h1>
            <p>
              O Auto Moreira conta com mais de 15 anos de experiência no mercado
              de venda automóvel sempre como principal missão, garantir a melhor
              Qualidade e Confiança nos seus negócios.
            </p>
            <Box className="hero-content__text__btns">
              <Link
                onClick={bookBtn}
                className="hero-content__text__btns__book-ride"
                to="/"
              >
                Encontrar veículo &nbsp;
                <i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link className="hero-content__text__btns__learn-more" to="/">
                Sobre Nós &nbsp; <i className="fa-solid fa-angle-right"></i>
              </Link>
            </Box>
          </Box>

          {/* img */}
          <img src={HeroCar} alt="car-img" className="hero-content__car-img" />
        </Box>
      </Box>

      {/* page up */}
      <Box
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <ArrowUpwardIcon sx={{ fontSize: 35 }} />
      </Box>
    </Box>
  );
}

export default Hero;
