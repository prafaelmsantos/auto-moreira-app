export enum LinkType {
  HOME = 1,
  ABOUT = 2,
  VEHICLES = 3,
  TESTIMONIALS = 4,
  TEAM = 5,
  CONTACT = 6,
}

export const navLink = [
  { id: LinkType.HOME, url: "/", link: "Início" },
  { id: LinkType.ABOUT, url: "/about", link: "Sobre Nós" },
  { id: LinkType.VEHICLES, url: "/vehicles", link: "Veículos" },
  {
    id: LinkType.TESTIMONIALS,
    url: "/testimonials",
    link: "Testemunhos",
  },
  { id: LinkType.TEAM, url: "/team", link: "A Nossa Equipa" },
  { id: LinkType.CONTACT, url: "/contact", link: "Contactos" },
];
