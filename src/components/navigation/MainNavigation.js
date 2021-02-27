import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const MainNavigation = (props) => {
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
    },
  ];

  return (
    <Navbar fixed color="light" light expand="md">
      <Link className="navbar-brand" to="/">
        JUMI
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {menu.map((m) => (
            <NavItem active={location.pathname === m.path}>
              <Link class="nav-link" to={m.path}>
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
