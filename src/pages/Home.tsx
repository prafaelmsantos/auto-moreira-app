import Hero from "../components/Hero";
import PlanTrip from "../components/PlanTrip";
import Testimonials from "../components/TestimonialsPage";
import Faq from "../components/home/faq/Faq";
import Footer from "../components/shared/footer/Footer";
import OpportunityPage from "../components/home/opportunity/OpportunityPage";
import SupportPage from "../components/home/support/SupportPage";
import SearchVehicle from "../components/home/search-vehicle/SearchVehicle";
import {
  minYear,
  maxYear,
  minPrice,
  maxPrice,
  minKms,
  maxKms,
} from "../models/Filter";

function Home() {
  return (
    <>
      <Hero />

      <SearchVehicle
        handleChange={function (
          event: string | number | number[] | null,
          id: string
        ): void {
          throw new Error("Function not implemented.");
        }}
        marks={[]}
        models={[]}
        selectedFilters={{
          markId: null,
          modelId: null,
          fuelType: null,
          minYear: minYear,
          maxYear: maxYear,
          minPrice: minPrice,
          maxPrice: maxPrice,
          minKms: minKms,
          maxKms: maxKms,
        }}
      />
      <PlanTrip />
      <OpportunityPage />
      <SupportPage />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
