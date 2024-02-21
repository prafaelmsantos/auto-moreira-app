import { NavLinkType } from "../models/enums/NavLinkType";

export const navLink = [
  { id: 1, url: "/", link: "Início", type: NavLinkType.HOME },
  { id: 2, url: "/about", link: "Sobre Nós", type: NavLinkType.ABOUT },
  { id: 3, url: "/vehicles", link: "Veículos", type: NavLinkType.VEHICLES },
  { id: 4, url: "/testimonials", link: "Testemunhos", type: NavLinkType.TESTIMONIALS },
  { id: 5, url: "/team", link: "A Nossa Equipa", type: NavLinkType.TEAM },
  { id: 6, url: "/contact", link: "Contactos", type: NavLinkType.CONTACT },
];

export enum LinkType {
  HOME,
  ABOUT,
  VEHICLES,
  TESTIMONIALS,
  TEAM,
  CONTACT,
  LOGIN,
  REGISTRATION,
  ADMIN,
  ADMIN_VEHICLE,
  ADMIN_GERAL_VEHICLE,
  ADMIN_MARK,
  ADMIN_MODEL,
  ADMIN_INFO,
  ADMIN_USER,
  PROFILE,
}

export const navLinkX = [
  {
    id: LinkType.HOME,
    url: "/",
    title: "Início",
    subTitle: "",
    showNavLink: true,
    showAdminNavLink: false,
  },
  {
    id: LinkType.ABOUT,
    url: "/about",
    title: "Sobre Nós",
    subTitle: "",
    showNavLink: true,
    showAdminNavLink: false,
  },
  {
    id: LinkType.VEHICLES,
    url: "/vehicles",
    title: "Veículos",
    subTitle: "",
    showNavLink: true,
    showAdminNavLink: false,
  },
  {
    id: LinkType.TESTIMONIALS,
    url: "/testimonials",
    title: "Testemunhos",
    subTitle: "",
    showNavLink: true,
    showAdminNavLink: false,
  },
  {
    id: LinkType.TEAM,
    url: "/team",
    title: "A Nossa Equipa",
    subTitle: "",
    showNavLink: true,
    showAdminNavLink: false,
  },
  {
    id: LinkType.CONTACT,
    url: "/contact",
    title: "Contactos",
    subTitle: "",
    showNavLink: true,
    showAdminNavLink: false,
  },
];



