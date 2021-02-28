import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { animateScroll } from "react-scroll";

const MainNavigation = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    {
      label: "Rezar Rosario",
      path: "/app/rosary",
    },
    {
      label: "Grupos Religiosos",
      path: "/app/groups",
      disabled: true,
    },
  ];

  useEffect(() => {
    // smooth scroll to the correct prayer
    animateScroll.scrollToTop({
      smooth: true,
      offset: -150,
    });
  }, [location.pathname]);

  return (
    <Navbar fixed="top" color="light" light expand="md">
      <Link className="navbar-brand" to="/">
        JUMI
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {menu.map((m) => (
            <NavItem key={m.label} active={location.pathname === m.path}>
              <Link
                className={`nav-link ${m.disabled && "disabled"}`}
                to={m.path}
              >
                {m.label}
              </Link>
            </NavItem>
          ))}
        </Nav>
        <NavbarText>Juventud Misionera</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default MainNavigation;
