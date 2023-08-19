import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AiFillCar, AiFillHome } from "react-icons/ai";
import { ReactNode, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SiMercedes, SiThemodelsresource } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LinkType } from "../../../../../data/link";

type IAdminListItem = {
  title: string;
  collapse?: boolean;
  children?: ReactNode;
  iconType: LinkType;
  url: string;
};

export default function AdminListItem(props: IAdminListItem) {
  const { title, collapse = false, children, iconType, url } = props;

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <NavLink
      style={{ textDecoration: "none", color: "black" }}
      to={url}
      end={iconType === LinkType.ADMIN}
    >
      {({ isActive }) => (
        <>
          <ListItemButton
            sx={{
              mt: 1,
              "&.Mui-selected": {
                backgroundColor: "#ff4d30",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#ff4d30",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              "&:hover": {
                backgroundColor: "#ff4d30",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
            }}
            selected={isActive && iconType !== LinkType.ADMIN_GERAL_VEHICLE}
            onClick={() => {
              collapse && handleClick();
            }}
          >
            <ListItemIcon sx={{ fontSize: 22, color: "GrayText" }}>
              {iconType === LinkType.ADMIN && <AiFillHome />}
              {iconType === LinkType.ADMIN_GERAL_VEHICLE && <AiFillCar />}
              {iconType === LinkType.ADMIN_VEHICLE && <AiFillCar />}
              {iconType === LinkType.ADMIN_MARK && <SiMercedes />}
              {iconType === LinkType.ADMIN_MODEL && <SiThemodelsresource />}
              {iconType === LinkType.ADMIN_INFO && <MdEmail />}
              {iconType === LinkType.ADMIN_USER && <FaUsers />}
            </ListItemIcon>
            <ListItemText
              sx={{ mt: 1 }}
              primary={
                <Typography
                  fontWeight={"bold"}
                  fontSize={16}
                  fontFamily={"Rubik"}
                >
                  {title}
                </Typography>
              }
            />
            {collapse && (
              <Box>
                {open ? (
                  <ExpandLess sx={{ fontSize: 22, mt: 1 }} />
                ) : (
                  <ExpandMore sx={{ fontSize: 22, mt: 1 }} />
                )}
              </Box>
            )}
          </ListItemButton>
          {collapse && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ mx: 2 }}>
                {children}
              </List>
            </Collapse>
          )}
        </>
      )}
    </NavLink>
  );
}
