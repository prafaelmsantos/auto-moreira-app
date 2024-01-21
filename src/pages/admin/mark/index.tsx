/** @format */

import {NavLinkType} from "../../../models/enums/NavLinkType";
import BannerHero from "../../../components/shared/BannerHero";
import AdminMark from "../../../components/admin/mark/AdminMark";

export default function index() {
  return (
    <main>
      <BannerHero type={NavLinkType.ADMIN_MARKS} />
      <AdminMark />
    </main>
  );
}
