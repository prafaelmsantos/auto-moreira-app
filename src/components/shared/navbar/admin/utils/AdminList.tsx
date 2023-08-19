import { LinkType, navLink } from "../../../../../data/link";
import AdminListItem from "./AdminListItem";

export default function AdminList(id: LinkType) {
  const nav = navLink.find((x) => x.id === id);
  return (
    nav && (
      <AdminListItem title={nav.subTitle} iconType={nav.id} url={nav.url} />
    )
  );
}
