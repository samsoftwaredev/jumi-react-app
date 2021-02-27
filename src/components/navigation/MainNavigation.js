import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const MainNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar fixed color="light" light expand="md">
      <NavbarBrand href="/">JUMI</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link class="nav-link" to="/app/rosary">
              Rezar Rosario
            </Link>
          </NavItem>
          <NavItem>
            <Link class="nav-link" to="/app/groups">
              Grupos Religiosos
            </Link>
          </NavItem>
        </Nav>
        <NavbarText>Juventud Misionera</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default MainNavigation;
