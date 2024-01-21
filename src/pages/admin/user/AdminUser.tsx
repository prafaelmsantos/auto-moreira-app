/** @format */

import {NavLinkType} from "../../../models/enums/NavLinkType";
import BannerHero from "../../../components/shared/BannerHero";

export default function AdminUser() {
  return (
    <main>
      <BannerHero type={NavLinkType.ADMIN_USERS} />
    </main>
  );
}
