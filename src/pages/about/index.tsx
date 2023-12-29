/** @format */

"use client";

import BannerHero from "../../components/shared/BannerHero";
import About from "../../components/about/About";
import {NavLinkType} from "../../models/enums/NavLinkType";

function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.ABOUT} />
      <About />
    </main>
  );
}

export default index;
