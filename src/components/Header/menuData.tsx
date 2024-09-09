import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "Links",
  //   path: "/links",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Chinese Services(NZSEC)",
    path: "https://nzsec.net/",
    newTab: true,
  },
  {
    id: 4,
    title: "NZCLW",
    path: "https://www.nzclw.com/",
    newTab: true,
  },
  {
    id: 5,
    title: "Support",
    path: "/support",
    newTab: false,
  },
  {
    id: 6,
    title: "About",
    path: "/about",
    newTab: false,
  },
];
export default menuData;
