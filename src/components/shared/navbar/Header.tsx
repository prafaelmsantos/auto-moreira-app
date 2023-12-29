/** @format */

import {AiOutlineMenu} from "react-icons/ai";
import {useTogglersContext} from "../../../context/togglers";
import {navLink} from "../../../data/link";
import {NavLink} from "react-router-dom";

import logo from "../../../images/logo.png";
import {NavType} from "../../../models/enums/NavLinkType";
import NavbarAvatar from "./utils/NavbarAvatar";

function Header() {
  const {setMobileNavbar} = useTogglersContext();

  return (
    <section id="top header">
      <header className="absolute top-6 inset-x-6 lg:inset-x-28 flex items-center justify-between z-50">
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" width={140} height={140} />
          </NavLink>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 font-medium">
            {navLink
              .filter((x) => x.navType === NavType.MAIN)
              .map((data) => (
                <li key={data.id}>
                  <NavLink
                    style={({isActive}) => {
                      if (isActive) {
                        return {
                          color: "#ff4d30",
                          fontWeight: "bold",
                        };
                      }
                    }}
                    className="hover:text-custom-orange transition-all duration-300 ease-linear"
                    to={data.url}
                    onClick={() => setMobileNavbar(false)}
                  >
                    {data.link}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>

        <NavbarAvatar />

        {/* <div className="hidden lg:flex items-center gap-4 font-medium">
          {navLink
            .filter((x) => x.navType === NavType.USER)
            .map((data) => (
              <NavLink
                to={data.url}
                className={
                  data.link === "Entrar"
                    ? "hover:text-custom-orange transition-all duration-300 ease-linear"
                    : "bg-custom-orange py-3 px-7 text-white shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded"
                }
              >
                {data.link}
              </NavLink>
            ))}
        </div> */}
        <div className="lg:hidden">
          <button
            className="text-3xl transition-all duration-300 ease-linear hover:text-custom-orange"
            onClick={() => setMobileNavbar(true)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
