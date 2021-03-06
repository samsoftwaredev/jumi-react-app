import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { animateScroll } from "react-scroll";
import Translate from "../Translate";

const MainNavigation = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    {
      label: "pray_rosary_label",
      path: "/app/rosary",
    },
    {
      label: "religious_groups_label",
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
        <Translate text="app_short_name_label" />
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
                <Translate text={m.label} />
              </Link>
            </NavItem>
          ))}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <Translate text="language_label" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Español</DropdownItem>
              <DropdownItem>English</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNavigation;
