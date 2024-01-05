/** @format */

"use client";

import Hero from "../../components/home/Hero";
import Booking from "../../components/home/Booking";
import Opportunity from "../../components/home/opportunity/Opportunity";

import Testimonials from "../../components/testimonials/Testimonials";
import SaveBig from "../../components/home/SaveBig";

function index() {
  return (
    <main>
      <Hero />
      <Booking />
      <Opportunity />
      <SaveBig />
      <Testimonials />
    </main>
  );
}

export default index;
