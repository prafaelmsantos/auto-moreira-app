/** @format */

"use client";

import BannerHero from "../../components/shared/banner/BannerHero";
import Contact from "../../components/contact/Contact";
import {NavLinkType} from "../../models/enums/NavLinkType";

function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.CONTACT} />
      <Contact />
    </main>
  );
}

export default index;
