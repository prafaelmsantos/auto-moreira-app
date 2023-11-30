/** @format */

import {NavLink} from "react-router-dom";
import Img1 from "../../../images/team/1.png";
import Logo from "../../../images/logo/logo.png";
import {useState} from "react";
import {LinkType, navLink} from "../../../data/link";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import {useSelector} from "react-redux";

import {RootState} from "../../../redux/store";

import NavbarListItem from "./admin/utils/NavbarListItem";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const currentUser = useSelector((state: RootState) => state.userSlice.user);

  return (
    <>
      <AppBar color="inherit" position="static" sx={{px: 10}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                mr: 2,
                display: {xs: "none", md: "flex"},
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo" width={220} height={160} />
              </NavLink>
            </Box>

            <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: "block", md: "none"},
                }}
              >
                {navLink
                  .filter((x) => x.showNavLink)
                  .map((page, i) => (
                    <MenuItem key={i}>
                      <NavLink
                        onClick={handleCloseNavMenu}
                        to={page.url}
                        style={({isActive}) => {
                          if (isActive) {
                            return {
                              color: "#ff4d30",
                              fontWeight: "bold",
                              fontSize: 16,
                              textDecoration: "none",
                            };
                          } else {
                            return {
                              color: "black",
                              fontSize: 16,
                              textDecoration: "none",
                            };
                          }
                        }}
                      >
                        <Typography textAlign="center">{page.title}</Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>

            <Box
              sx={{
                mr: 2,
                display: {xs: "flex", md: "none"},
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo" width={220} height={160} />
              </NavLink>
            </Box>
            <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
              {navLink
                .filter((x) => x.showNavLink)
                .map((page, i) => (
                  <Box
                    key={i}
                    onClick={handleCloseNavMenu}
                    sx={{mx: 1.5, mt: 1.5, display: "block"}}
                  >
                    <NavLink
                      onClick={handleCloseNavMenu}
                      to={page.url}
                      style={({isActive}) => {
                        if (isActive) {
                          return {
                            color: "#ff4d30",
                            fontWeight: "bold",
                            fontSize: 16,
                            textDecoration: "none",
                          };
                        } else {
                          return {
                            color: "black",
                            fontSize: 16,
                            textDecoration: "none",
                            "a:hover": {
                              color: "#ff4d30",
                            },
                          };
                        }
                      }}
                    >
                      {page.title}
                    </NavLink>
                  </Box>
                ))}
            </Box>

            <Box sx={{flexGrow: 0}}>
              {currentUser ? (
                <Box sx={{flexGrow: 0}}>
                  <IconButton size={"large"} onClick={handleOpenUserMenu}>
                    <Avatar src={Img1} />
                  </IconButton>

                  <Menu
                    sx={{mt: "45px"}}
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

                    <Divider sx={{mt: 1, mb: 1}} />
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
                  <NavLink
                    onClick={handleCloseNavMenu}
                    to={"/user/login"}
                    style={({isActive}) => {
                      if (isActive) {
                        return {
                          color: "#ff4d30",
                          fontWeight: "bold",
                          fontSize: 16,
                          textDecoration: "none",
                        };
                      } else {
                        return {
                          color: "black",
                          fontSize: 16,
                          textDecoration: "none",
                        };
                      }
                    }}
                  >
                    <Typography textAlign="center">{"Entrar"}</Typography>
                  </NavLink>

                  <NavLink
                    onClick={handleCloseNavMenu}
                    to={"/user/registration"}
                    style={({isActive}) => {
                      if (isActive) {
                        return {
                          color: "#ff4d30",
                          fontWeight: "bold",
                          fontSize: 16,
                          textDecoration: "none",
                        };
                      } else {
                        return {
                          color: "black",
                          fontSize: 16,
                          textDecoration: "none",
                        };
                      }
                    }}
                  >
                    <Typography textAlign="center">{"Registar"}</Typography>
                  </NavLink>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
