import { List, ListSubheader, Typography } from "@mui/material";
import { useState } from "react";
import { AdminListType } from "../../../../models/enums/AdminListType";
import AdminListItem from "./AdminListItem";

export default function AdminNavbar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      <AdminListItem
        id={0}
        title={"Início"}
        iconType={AdminListType.HOME}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <AdminListItem
        id={1}
        title={"Utilizadores"}
        iconType={AdminListType.USER}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <AdminListItem
        id={2}
        title={"Veículos"}
        iconType={AdminListType.VEHICLE}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        collapse
        children={
          <>
            <AdminListItem
              id={3}
              title={"Marcas"}
              iconType={AdminListType.MARK}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
            <AdminListItem
              id={4}
              title={"Modelos"}
              iconType={AdminListType.MODEL}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
            <AdminListItem
              id={5}
              title={"Veículos"}
              iconType={AdminListType.VEHICLE}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </>
        }
      />
      <AdminListItem
        id={6}
        title={"Pedidos de Informação de Clientes"}
        iconType={AdminListType.INFO}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </List>
  );
}
