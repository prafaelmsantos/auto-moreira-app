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
}

export const navLink = [
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
  {
    id: LinkType.LOGIN,
    url: "/user/login",
    title: "Entrar",
    subTitle: "",
    showNavLink: false,
    showAdminNavLink: false,
  },
  {
    id: LinkType.REGISTRATION,
    url: "/user/registration",
    title: "Registar",
    subTitle: "",
    showNavLink: false,
    showAdminNavLink: false,
  },
  {
    id: LinkType.ADMIN,
    url: "/admin",
    title: "Admin",
    subTitle: "Início",
    showNavLink: false,
    showAdminNavLink: true,
  },
  {
    id: LinkType.ADMIN_USER,
    url: "/admin/user",
    title: "Admin",
    subTitle: "Utilizadores",
    showNavLink: false,
    showAdminNavLink: true,
  },
  {
    id: LinkType.ADMIN_GERAL_VEHICLE,
    url: "",
    title: "",
    subTitle: "Veículos",
    showNavLink: false,
    showAdminNavLink: true,
  },
  {
    id: LinkType.ADMIN_VEHICLE,
    url: "/admin/vehicle",
    title: "Admin",
    subTitle: "Veículos",
    showNavLink: false,
    showAdminNavLink: false,
  },
  {
    id: LinkType.ADMIN_MARK,
    url: "/admin/mark",
    title: "Admin",
    subTitle: "Marcas",
    showNavLink: false,
    showAdminNavLink: false,
  },
  {
    id: LinkType.ADMIN_MODEL,
    url: "/admin/model",
    title: "Admin",
    subTitle: "Modelos",
    showNavLink: false,
    showAdminNavLink: false,
  },
  {
    id: LinkType.ADMIN_INFO,
    url: "/admin/info",
    title: "Admin",
    subTitle: "Info de Clientes",
    showNavLink: false,
    showAdminNavLink: true,
  },
];
