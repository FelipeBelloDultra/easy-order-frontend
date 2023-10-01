import { useCallback } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Files, Package, Users, House } from "@phosphor-icons/react";

import { Link } from "~/components/core";

import * as S from "./styles";

const LINKS = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: House,
    subLinks: [],
  },
  {
    to: "/dashboard/orders",
    label: "Pedidos",
    icon: Files,
    subLinks: [
      {
        to: "/dashboard/orders/create",
        label: "Criar pedido",
      },
    ],
  },
  {
    to: "/dashboard/products",
    label: "Produtos",
    icon: Package,
    subLinks: [
      {
        to: "/dashboard/products/create",
        label: "Cadastrar produto",
      },
    ],
  },
  {
    to: "/dashboard/clients",
    label: "Clientes",
    icon: Users,
    subLinks: [
      {
        to: "/dashboard/clients/create",
        label: "Cadastrar cliente",
      },
    ],
  },
];

function Links() {
  const location = useLocation();

  const isRoutePath = useCallback(
    (path: string, childLinks: Array<{ to: string; label: string }>) => {
      const url = location.pathname;

      if (path === url) return true;

      if (childLinks.some((link) => link.to === url)) return true;

      return false;
    },
    [location.pathname]
  );

  return (
    <S.NavContainer>
      <p>Menu principal</p>

      {LINKS.map(({ subLinks, to, label, icon: Icon }) => (
        <span key={to} className={isRoutePath(to, subLinks) ? "active" : ""}>
          <Link to={to}>
            <Icon size={24} weight="duotone" />

            <span>{label}</span>
          </Link>

          {isRoutePath(to, subLinks) && subLinks.length ? (
            <div className="sub-menu">
              {subLinks.map((subLink) => (
                <NavLink key={subLink.to} to={subLink.to} end>
                  {subLink.label}
                </NavLink>
              ))}
            </div>
          ) : null}
        </span>
      ))}
    </S.NavContainer>
  );
}

export function Sidebar() {
  return (
    <S.SidebarContainer>
      <Links />
    </S.SidebarContainer>
  );
}
