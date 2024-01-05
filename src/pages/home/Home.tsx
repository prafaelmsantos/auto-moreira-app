/** @format */

"use client";

import Hero from "../../components/home/Hero";
import Opportunity from "../../components/home/opportunity/Opportunity";

import Testimonials from "../../components/testimonials/Testimonials";
import SaveBig from "../../components/home/SaveBig";
import SearchVehicle from "../../components/home/search-vehicle/SearchVehicle";
import {useState} from "react";
import {
  defaultFilters,
  FilterMode,
  ISelectedFilters,
} from "../../models/Filter";

export default function Home() {
  const [selectedFilters, setSelectedFilters] =
    useState<ISelectedFilters>(defaultFilters);

  const handleChange = (event: number | string | null | number[], id: string) =>
    setSelectedFilters((old) => ({...old, [id]: event}));

  return (
    <main>
      <Hero />
      <SearchVehicle
        {...{handleChange, selectedFilters, setSelectedFilters}}
        filterMode={FilterMode.HOME}
      />

      <Opportunity />
      <SaveBig />
      <Testimonials />
    </main>
  );
}
