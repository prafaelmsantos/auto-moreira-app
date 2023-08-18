import Hero from "../components/Hero";
import SearchCar from "../components/home/search-car/SearchCar";
import PlanTrip from "../components/PlanTrip";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/home/faq/Faq";
import Footer from "../components/shared/footer/Footer";
import OpportunityPage from "../components/home/opportunity/OpportunityPage";
import SupportPage from "../components/home/support/SupportPage";

function Home() {
  return (
    <>
      <Hero />
      <SearchCar />
      <PlanTrip />
      <OpportunityPage />
      <SupportPage />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
