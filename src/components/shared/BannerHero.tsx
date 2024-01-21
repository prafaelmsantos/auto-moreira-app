/** @format */

import {NavLink} from "react-router-dom";
import {navLink} from "../../data/link";
import {NavLinkType, NavType} from "../../models/enums/NavLinkType";

function BannerHero({page, type}: {type: NavLinkType; page?: string}) {
  const bannerLink = navLink.find((x) => x.type === type);

  return (
    <>
      {bannerLink && (
        <section id={bannerLink.id.toString()}>
          <div className="h-96 bg-[url('./images/banner-hero-bg.png')] bg-cover bg-[50%] bg-no-repeat relative flex items-center py-8 px-8 lg:px-28">
            <div className="absolute inset-0 bg-white/90" />
            <div className="z-10 space-y-2">
              <div>
                <h1 className="font-bold text-4xl">{bannerLink.link}</h1>
              </div>
              <div className="flex items-center gap-1 font-semibold">
                {bannerLink.navType !== NavType.ADMIN ? (
                  <>
                    <NavLink
                      className="hover:text-custom-orange transition-all duration-300 ease-linear"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <span>/</span>
                  </>
                ) : (
                  <>
                    <NavLink
                      className="hover:text-custom-orange transition-all duration-300 ease-linear"
                      to="/admin"
                    >
                      Administração
                    </NavLink>
                    <span>/</span>
                  </>
                )}

                {page ? (
                  <NavLink
                    className="hover:text-custom-orange transition-all duration-300 ease-linear"
                    to={bannerLink.url}
                  >
                    {bannerLink.link}
                  </NavLink>
                ) : (
                  <span>{bannerLink.link}</span>
                )}
                {page && (
                  <>
                    <span>/</span>
                    <span>{page}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default BannerHero;
