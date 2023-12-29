import { NavLinkType, NavType } from "../models/enums/NavLinkType";

export const navLink = [
  { id: 1, url: "/", link: "Início", type: NavLinkType.HOME, navType: NavType.MAIN },
  { id: 2, url: "/about", link: "Sobre Nós", type: NavLinkType.ABOUT, navType: NavType.MAIN },
  { id: 3, url: "/vehicles", link: "Veículos", type: NavLinkType.VEHICLES, navType: NavType.MAIN },
  { id: 4, url: "/testimonials", link: "Testemunhos", type: NavLinkType.TESTIMONIALS, navType: NavType.MAIN },
  { id: 5, url: "/team", link: "A Nossa Equipa", type: NavLinkType.TEAM, navType: NavType.MAIN },
  { id: 6, url: "/contact", link: "Contactos", type: NavLinkType.CONTACT, navType: NavType.MAIN },
  { id: 7, url: "/user/login", link: "Entrar", type: NavLinkType.LOGIN, navType: NavType.USER },
  { id: 8, url: "/user/registration", link: "Registar", type: NavLinkType.REGISTRATION, navType: NavType.USER },
  { id: 9, url: "/admin", link: "Administração", type: NavLinkType.ADMIN, navType: NavType.ADMIN },
  { id: 10, url: "/profile", link: "Minha Conta", type: NavLinkType.PROFILE, navType: NavType.ADMIN_AVATAR },
];


