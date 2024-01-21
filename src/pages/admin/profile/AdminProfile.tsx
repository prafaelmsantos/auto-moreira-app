/** @format */

import {NavLinkType} from "../../../models/enums/NavLinkType";
import BannerHero from "../../../components/shared/BannerHero";

export default function AdminProfile() {
  return (
    <main>
      <BannerHero type={NavLinkType.ADMIN_PROFILE} />
    </main>
  );
}
