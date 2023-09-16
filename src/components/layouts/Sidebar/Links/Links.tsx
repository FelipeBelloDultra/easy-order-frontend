import { Home, List, Package, Users } from "react-feather";
import { NavLink } from "react-router-dom";

import S from "./style.module.css";

const LINK_MAPPING = [
  {
    label: "Home",
    to: "/",
    ElementIcon: Home,
  },
  {
    label: "Pedidos",
    to: "/orders",
    ElementIcon: List,
  },
  {
    label: "Clientes",
    to: "/clients",
    ElementIcon: Users,
  },
  {
    label: "Produtos",
    to: "/products",
    ElementIcon: Package,
  },
];

export function Links() {
  return LINK_MAPPING.map((link) => (
    <span key={link.label.toLowerCase()} className={S.link}>
      <NavLink to={link.to}>
        {({ isActive }) => (
          <span data-active={isActive}>
            <link.ElementIcon /> {link.label}
          </span>
        )}
      </NavLink>
    </span>
  ));
}
