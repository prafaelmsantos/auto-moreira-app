/** @format */

import {useEffect} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {navLink} from "../../../data/link";
import {useTogglersContext} from "../../../context/togglers";
import {NavLink} from "react-router-dom";
import {NavType} from "../../../models/enums/NavLinkType";

function MobileNavbar() {
  const {mobileNavbar, setMobileNavbar} = useTogglersContext();

  useEffect(() => {
    document.body.style.overflowY = mobileNavbar ? "hidden" : "auto";
  }, [mobileNavbar]);

  return (
    <section id="mobile-navbar">
      <nav
        className={`fixed inset-y-0 right-0 bg-white ${
          mobileNavbar ? "left-0" : "left-[150%]"
        } z-50 transition-all duration-300 ease-linear p-8 flex items-center justify-center flex-col`}
      >
        <button
          className="text-3xl absolute top-10 right-10 hover:text-custom-orange transition-all duration-300 ease-linear"
          onClick={() => setMobileNavbar(false)}
        >
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col items-center gap-8 font-medium text-2xl">
          {navLink
            .filter(
              (x) => x.navType !== NavType.ADMIN && x.navType !== NavType.USER
            )
            .map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.url}
                  style={({isActive}) => {
                    if (isActive) {
                      return {
                        color: "#ff4d30",
                        fontWeight: "bold",
                      };
                    }
                  }}
                  onClick={() => setMobileNavbar(false)}
                >
                  {data.link}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </section>
  );
}

export default MobileNavbar;
