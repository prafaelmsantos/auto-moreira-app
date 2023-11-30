/** @format */

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {CgProfile} from "react-icons/cg";

import {MdLogout, MdOutlineAdminPanelSettings} from "react-icons/md";
import {NavLink, useNavigate} from "react-router-dom";
import {LinkType} from "../../../../../data/link";
import UserService from "../../../../../services/UserService";
import {useAppDispatch} from "../../../../../redux/hooks";

type INavbarListItem = {
  handleClose: () => void;
  title: string;
  iconType: LinkType;
  url: string;
};

export default function NavbarListItem(props: INavbarListItem) {
  const {handleClose, title, iconType, url} = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <NavLink
      onClick={() => {
        void handleClose();
        iconType !== LinkType.LOGIN && navigate(url);
        iconType === LinkType.LOGIN && UserService.logout(dispatch, navigate);
      }}
      to={url}
      style={({isActive}) => {
        if (isActive) {
          return {
            fontWeight: "bold",
            fontSize: 12,
            textDecoration: "none",
            color: "black",
          };
        } else {
          return {
            fontSize: 12,
            textDecoration: "none",
            color: "black",
          };
        }
      }}
    >
      {({isActive}) => (
        <>
          <ListItemButton
            selected={isActive}
            sx={{
              fontSize: 14,
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
          >
            <ListItemIcon
              sx={{
                fontSize: iconType === LinkType.LOGIN ? 18 : 24,
                color: "GrayText",
              }}
            >
              {iconType === LinkType.ADMIN && <MdOutlineAdminPanelSettings />}
              {iconType === LinkType.PROFILE && <CgProfile />}
              {iconType === LinkType.LOGIN && <MdLogout />}
            </ListItemIcon>
            <ListItemText
              sx={{mt: 0.5}}
              primary={
                <Typography fontSize={13} fontFamily={"Rubik"}>
                  {title}
                </Typography>
              }
            />
          </ListItemButton>
        </>
      )}
    </NavLink>
  );
}
