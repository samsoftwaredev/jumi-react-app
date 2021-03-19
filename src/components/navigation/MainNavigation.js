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
import { useTranslation } from "react-i18next";

const MainNavigation = () => {
  let location = useLocation();

  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeLanguage = (language) => {
    i18n
      .changeLanguage(language)
      .catch(console.error("Unable to change language"));
  };

  const menu = [
    {
      label: "prayRosary.label",
      path: "/app/rosary",
    },
    {
      label: "religiousGroups.label",
      path: "/app/groups",
      disabled: true,
    },
  ];

  const languages = [
    {
      label: "Español",
      abbrv: "es",
    },
    {
      label: "English",
      abbrv: "en",
    },
  ];

  const langIndex = languages.findIndex(({ abbrv }) => abbrv === i18n.language);

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
          <DropdownToggle nav caret>
            {languages[langIndex]?.label || <Translate text="language_label" />}
          </DropdownToggle>
          <DropdownMenu right>
            {languages.map(({ abbrv, label }) => (
              <DropdownItem key={abbrv} onClick={() => changeLanguage(abbrv)}>
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Collapse>
    </Navbar>
  );
};

export default MainNavigation;
