/** @format */

import {NavLinkType} from "../../../models/enums/NavLinkType";
import BannerHero from "../../../components/shared/BannerHero";

export default function AdminModel() {
  return (
    <main>
      <BannerHero type={NavLinkType.ADMIN_MODELS} />
    </main>
  );
}
