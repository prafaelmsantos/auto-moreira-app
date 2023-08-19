import { Link, NavLink } from "react-router-dom";
import Logo from "../../../images/logo/logo.png";
import { useState } from "react";
import { navLink } from "../../../data/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

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
          <Link
            style={{ fontWeight: "bold", fontSize: 16 }}
            className="navbar__buttons__sign-in"
            to="/user/login"
          >
            Entrar
          </Link>
          <Link
            style={{ fontWeight: "bold", fontSize: 16 }}
            className="navbar__buttons__register"
            to="/user/registration"
          >
            Registar
          </Link>
          <Link
            style={{ fontWeight: "bold", fontSize: 16 }}
            className="navbar__buttons__register"
            to="/admin"
          >
            Admin
          </Link>
        </div>

        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}
