import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";
import { LinkType } from "../data/link";

export default function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages id={LinkType.TESTIMONIALS} />
        <Testimonials />
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+351 231472555</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
