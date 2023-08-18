import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";
import BookCar from "../components/vehicle/book-car/BookCar";
import { LinkType } from "../data/link";

export default function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages id={LinkType.TESTIMONIALS} />
        <Testimonials />
        <BookCar />
        <Footer />
      </section>
    </>
  );
}
