import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

export default function TestimonialsPage() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h2>Avaliação de clientes</h2>
              <p>
                Os nossos clientes experimentaram os nossos serviços e viaturas
                e estão ansiosos por compartilhar as suas experiências.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Compramos um carro neste stand e tivemos uma experiência
                  incrível! Equipa simpatica, compreensiva e preços muito
                  acessíveis."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Criatiano Ronaldo</h4>
                      <p>Madeira, Portugal</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>"Recomendo este stand para compra de carros!"</p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Luís Figo </h4>
                      <p>Lisboa, Portugal</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
