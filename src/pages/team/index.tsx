/** @format */

"use client";

import BannerHero from "../../components/shared/banner/BannerHero";
import Team from "../../components/team/Team";
import {NavLinkType} from "../../models/enums/NavLinkType";

function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.TEAM} />
      <Team />
    </main>
  );
}

export default index;
