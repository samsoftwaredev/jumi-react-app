import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import { animateScroll } from "react-scroll";
import Translate from "../../Translate";
import ChangeLanguage from "../../Translate/ChangeLanguage";

const TopNav = ({ darkMode = false }) => {
  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    {
      label: "prayRosary.label",
      path: "/app/rosary",
    },
    {
      label: "religiousGroups.label",
      path: "/app/groups",
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
    <Navbar
      // background color
      dark={darkMode}
      light={!darkMode}
      // color of text
      color={!darkMode && "light"}
      fixed="top"
      expand="md"
    >
      <Link className="navbar-brand" to="/">
        <Translate text="app.shortName" />
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
        </Nav>
        <UncontrolledDropdown inNavbar>
          <ChangeLanguage />
        </UncontrolledDropdown>
      </Collapse>
    </Navbar>
  );
};

export default TopNav;
