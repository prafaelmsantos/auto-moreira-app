/** @format */

import BannerHero from "../../../components/shared/BannerHero";
import Login from "../../../components/user/login/Login";

import {NavLinkType} from "../../../models/enums/NavLinkType";

export default function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.LOGIN} />
      <Login />
    </main>
  );
}
