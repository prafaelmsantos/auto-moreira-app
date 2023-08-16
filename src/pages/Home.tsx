import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import OpportunityPage from "../components/opportunity/OpportunityPage";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <OpportunityPage />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
