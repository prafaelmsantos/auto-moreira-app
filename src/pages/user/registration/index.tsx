/** @format */

import BannerHero from "../../../components/shared/BannerHero";
import Registration from "../../../components/user/registration/Registration";
import {NavLinkType} from "../../../models/enums/NavLinkType";

export default function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.REGISTRATION} />
      <Registration />
    </main>
  );
}
