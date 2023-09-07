import { Link, NavLink } from "react-router-dom";
import Img1 from "../../../images/team/1.png";
import Logo from "../../../images/logo/logo.png";
import { useState } from "react";
import { LinkType, navLink } from "../../../data/link";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";

import NavbarListItem from "./admin/utils/NavbarListItem";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const currentUser = useSelector((state: RootState) => state.userSlice.user);

  return (
    <nav>
      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="mobile-navbar__links">
          {navLink
            .filter((x) => x.showNavLink)
            .map((data) => (
              <li key={data.id}>
                <NavLink
                  onClick={openNav}
                  to={data.url}
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        color: isActive ? "#ff4d30" : "black",
                        fontWeight: "bold",
                        fontSize: 18,
                      };
                    } else {
                      return {
                        fontSize: 16,
                        "&:hover": {
                          color: "#ff4d30",
                        },
                      };
                    }
                  }}
                >
                  {data.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>

      {/* desktop */}

      <div className="navbar">
        <div>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo" width={180} height={140} />
          </NavLink>
        </div>

        <ul className="navbar__links">
          {navLink
            .filter((x) => x.showNavLink)
            .map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.url}
                  style={({ isActive, isPending }) => {
                    if (isActive) {
                      return {
                        color: isActive ? "#ff4d30" : "black",
                        fontWeight: "bold",
                        fontSize: 18,
                      };
                    } else {
                      return {
                        fontSize: 16,
                        "&:hover": {
                          color: "#ff4d30",
                        },
                      };
                    }
                  }}
                >
                  {data.title}
                </NavLink>
              </li>
            ))}
        </ul>

        <div className="navbar__buttons">
          {currentUser ? (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton size={"large"} onClick={handleOpenUserMenu}>
                <Avatar src={Img1} />
              </IconButton>

              <Menu
                sx={{ mt: "45px" }}
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
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem sx={{ pointerEvents: "none" }}>
                  <Typography
                    sx={{ fontSize: 14, color: "black" }}
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

                <NavbarListItem
                  handleClose={handleCloseUserMenu}
                  title={"Minha Conta"}
                  iconType={LinkType.PROFILE}
                  url={"/profile"}
                />

                <NavbarListItem
                  handleClose={handleCloseUserMenu}
                  title={"Administração"}
                  iconType={LinkType.ADMIN}
                  url={"/admin"}
                />

                <Divider sx={{ mt: 1, mb: 1 }} />
                <NavbarListItem
                  handleClose={handleCloseUserMenu}
                  title={"Sair"}
                  iconType={LinkType.LOGIN}
                  url={"/user"}
                />
              </Menu>
            </Box>
          ) : (
            <>
              <Link
                style={{ fontWeight: "bold", fontSize: 16 }}
                className="navbar__buttons__sign-in"
                to="/user/login"
              >
                {"Entrar"}
              </Link>
              <Link
                style={{ fontWeight: "bold", fontSize: 16 }}
                className="navbar__buttons__register"
                to="/user/registration"
              >
                {"Registar"}
              </Link>
            </>
          )}
        </div>

        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}
