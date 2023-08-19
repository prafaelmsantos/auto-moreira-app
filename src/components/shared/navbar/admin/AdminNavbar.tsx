import { List, ListSubheader, Typography } from "@mui/material";

import AdminListItem from "./utils/AdminListItem";
import { LinkType, navLink } from "../../../../data/link";
import AdminList from "./utils/AdminList";

export default function AdminNavbar() {
  return (
    <List
      sx={{ bgcolor: "background.paper" }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography
            fontWeight={"bold"}
            fontSize={30}
            fontFamily={"Rubik"}
            sx={{ mt: 5, mb: 5 }}
          >
            Admin
          </Typography>
        </ListSubheader>
      }
    >
      {navLink
        .filter((x) => x.showAdminNavLink)
        .map((x) => {
          if (x.id === LinkType.ADMIN_GERAL_VEHICLE) {
            return (
              <AdminListItem
                title={x.subTitle}
                iconType={x.id}
                url={x.url}
                collapse
                children={
                  <>
                    {AdminList(LinkType.ADMIN_MARK)}
                    {AdminList(LinkType.ADMIN_MODEL)}
                    {AdminList(LinkType.ADMIN_VEHICLE)}
                  </>
                }
              />
            );
          } else {
            return (
              <AdminListItem title={x.subTitle} url={x.url} iconType={x.id} />
            );
          }
        })}
    </List>
  );
}
