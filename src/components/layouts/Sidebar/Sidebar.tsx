import { NavLink } from "react-router-dom";
import { Files, Package, Users, House } from "@phosphor-icons/react";

import * as S from "./styles";

const LINKS = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: House,
  },
  {
    to: "/dashboard/orders",
    label: "Pedidos",
    icon: Files,
  },
  {
    to: "/dashboard/products",
    label: "Produtos",
    icon: Package,
  },
  {
    to: "/dashboard/clients",
    label: "Clientes",
    icon: Users,
  },
];

function Links() {
  return (
    <>
      <p>Menu principal</p>

      {LINKS.map(({ to, label, icon: Icon }) => (
        <span key={to}>
          <NavLink to={to} end>
            <Icon size={24} weight="duotone" />

            <span>{label}</span>
          </NavLink>
        </span>
      ))}
    </>
  );
}

export function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.NavContainer>
        <Links />
      </S.NavContainer>
    </S.SidebarContainer>
  );
}
