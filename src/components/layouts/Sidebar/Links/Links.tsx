import { Home, List, Package, Users } from "react-feather";
import { NavLink } from "react-router-dom";

import S from "./style.module.css";

const LINK_MAPPING = [
  {
    label: "Home",
    to: "/dashboard/",
    ElementIcon: Home,
  },
  {
    label: "Pedidos",
    to: "/dashboard/orders",
    ElementIcon: List,
  },
  {
    label: "Clientes",
    to: "/dashboard/clients",
    ElementIcon: Users,
  },
  {
    label: "Produtos",
    to: "/dashboard/products",
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
