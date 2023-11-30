import Hero from "../components/Hero";

import Testimonials from "../components/TestimonialsPage";
import Footer from "../components/shared/footer/Footer";
import OpportunityPage from "../components/home/opportunity/OpportunityPage";
import SupportPage from "../components/home/support/SupportPage";
import SearchVehicle from "../components/home/search-vehicle/SearchVehicle";
import { FilterMode, ISelectedFilters, defaultFilters } from "../models/Filter";
import { useState } from "react";

export default function Home() {
  const [selectedFilters, setSelectedFilters] =
    useState<ISelectedFilters>(defaultFilters);

  const handleChange = (event: number | string | null | number[], id: string) =>
    setSelectedFilters((old) => ({ ...old, [id]: event }));

  return (
    <>
      <Hero />

      <SearchVehicle
        {...{ handleChange, selectedFilters, setSelectedFilters }}
        filterMode={FilterMode.HOME}
      />

      <OpportunityPage />
      <SupportPage />
      <Testimonials />
      <Footer />
    </>
  );
}
