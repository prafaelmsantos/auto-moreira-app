import Footer from "../components/shared/footer/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";
import { LinkType } from "../data/link";
import BookCar from "../components/vehicle/book-car/BookCar";
import { Box } from "@mui/material";

export default function About() {
  return (
    <>
      <Box className="about-page">
        <HeroPages id={LinkType.ABOUT} />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>Sobre Nós</h3>
              <h2>Auto Moreira - Venda e Reparação de Automóveis</h2>
              <p>
                O Auto Moreira - Venda e Reparação de Automóveis desenvolve a
                sua atividade com o CAE 45110 - Comércio de veículos automóveis
                ligeiros. É uma empresa que conta com mais de 15 anos de
                experiência no mercado de venda automóvel e tem como principal
                missão a Conquista, Satisfação e Fidelização do cliente,
                garantindo sempre a melhor Qualidade e Confiança nos seus
                negócios.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </Box>
      <BookCar />
      <Footer />
    </>
  );
}
