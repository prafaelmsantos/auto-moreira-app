export enum LinkType {
  HOME = 1,
  ABOUT = 2,
  VEHICLES = 3,
  TESTIMONIALS = 4,
  TEAM = 5,
  CONTACT = 6,
  LOGIN = 7,
  REGISTRATION = 8,
  ADMIN = 9,
}

export const navLink = [
  { id: LinkType.HOME, url: "/", link: "Início", showNavLink: true },
  { id: LinkType.ABOUT, url: "/about", link: "Sobre Nós", showNavLink: true },
  {
    id: LinkType.VEHICLES,
    url: "/vehicles",
    link: "Veículos",
    showNavLink: true,
  },
  {
    id: LinkType.TESTIMONIALS,
    url: "/testimonials",
    link: "Testemunhos",
    showNavLink: true,
  },
  {
    id: LinkType.TEAM,
    url: "/team",
    link: "A Nossa Equipa",
    showNavLink: true,
  },
  {
    id: LinkType.CONTACT,
    url: "/contact",
    link: "Contactos",
    showNavLink: true,
  },
  { id: LinkType.LOGIN, url: "/login", link: "Entrar", showNavLink: false },
  {
    id: LinkType.REGISTRATION,
    url: "/user/registration",
    link: "Registar",
    showNavLink: false,
  },
  {
    id: LinkType.ADMIN,
    url: "/admin",
    link: "Administração",
    showNavLink: false,
  },
];
