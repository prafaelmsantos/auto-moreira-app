/** @format */

"use client";

import BannerHero from "../../components/shared/BannerHero";
import Vehicles from "../../components/vehicles/Vehicles";
import {NavLinkType} from "../../models/enums/NavLinkType";

function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.VEHICLES} />
      <Vehicles />
    </main>
  );
}

export default index;
