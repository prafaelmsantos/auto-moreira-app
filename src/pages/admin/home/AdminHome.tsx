/** @format */

import {NavLinkType} from "../../../models/enums/NavLinkType";
import BannerHero from "../../../components/shared/BannerHero";
import Dashboard from "./Dashboard";

export default function AdminHome() {
  return (
    <main>
      <BannerHero type={NavLinkType.ADMIN_HOME} />
      <Dashboard />
    </main>
  );
}
