/** @format */

import {NavLinkType} from "../../../models/enums/NavLinkType";
import BannerHero from "../../../components/shared/BannerHero";

export default function AdminClient() {
  return (
    <main>
      <BannerHero type={NavLinkType.ADMIN_CLIENTS} />
    </main>
  );
}
