import Footer from "../components/shared/footer/Footer";
import HeroPages from "../components/HeroPages";
import TestimonialsPage from "../components/TestimonialsPage";
import BookCar from "../components/vehicle/book-car/BookCar";
import { LinkType } from "../data/link";

export default function Testimonials() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages id={LinkType.TESTIMONIALS} />
        <TestimonialsPage />
        <BookCar />
        <Footer />
      </section>
    </>
  );
}
