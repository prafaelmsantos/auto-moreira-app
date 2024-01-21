/** @format */

import {NavLinkType} from "../../../models/enums/NavLinkType";
import BannerHero from "../../../components/shared/BannerHero";

export default function AdminVehicle() {
  return (
    <main>
      <BannerHero type={NavLinkType.ADMIN_VEHICLES} />
    </main>
  );
}
