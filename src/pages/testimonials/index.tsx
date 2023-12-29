/** @format */

"use client";

import BannerHero from "../../components/shared/BannerHero";
import Testimonials from "../../components/testimonials/Testimonials";
import {NavLinkType} from "../../models/enums/NavLinkType";

function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.TESTIMONIALS} />
      <Testimonials />
    </main>
  );
}

export default index;
