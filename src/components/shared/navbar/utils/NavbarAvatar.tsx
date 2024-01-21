/** @format */

import {NavLink} from "react-router-dom";
import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {NavLinkType, NavType} from "../../../../models/enums/NavLinkType";
import NavbarListItem from "./NavbarListItem";
import {navLink} from "../../../../data/link";
import {useState} from "react";

export default function NavbarAvatar() {
  const currentUser = useSelector((state: RootState) => state.userSlice.user);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <div className="hidden lg:flex items-center gap-4 font-medium">
      {currentUser ? (
        <Box sx={{flexGrow: 0}}>
          <IconButton size={"large"} onClick={handleOpenUserMenu}>
            <Avatar src={require("../../../../images/parry-hotter.jpg")} />
          </IconButton>

          <Menu
            sx={{mt: "50px"}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem sx={{pointerEvents: "none"}}>
              <Typography
                sx={{fontSize: 14, color: "black"}}
                textAlign="center"
              >
                {"Bem-vindo"}
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "black",
                  fontWeight: "bold",
                  mx: 0.5,
                }}
                textAlign="center"
              >
                {`${currentUser?.firstName}`}
              </Typography>
            </MenuItem>
            <Divider />
            {navLink
              .filter((navLink) => navLink.navType === NavType.ADMIN)
              .map((navLink) => {
                return (
                  <NavbarListItem
                    handleClose={handleCloseUserMenu}
                    type={navLink.type}
                  />
                );
              })}

            <Divider sx={{mt: 1, mb: 1}} />
            <NavbarListItem
              handleClose={handleCloseUserMenu}
              title={"Sair"}
              type={NavLinkType.LOGIN}
            />
          </Menu>
        </Box>
      ) : (
        <>
          {navLink
            .filter((x) => x.navType === NavType.USER)
            .map((data) => (
              <NavLink
                to={data.url}
                className={
                  data.type === NavLinkType.LOGIN
                    ? "hover:text-custom-orange transition-all duration-300 ease-linear"
                    : "bg-custom-orange py-3 px-7 text-white shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded"
                }
              >
                {data.link}
              </NavLink>
            ))}
        </>
      )}
    </div>
  );
}
