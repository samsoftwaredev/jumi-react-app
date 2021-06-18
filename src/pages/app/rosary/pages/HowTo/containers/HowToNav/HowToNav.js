import React from "react";
import PropTypes from "prop-types";
import RichTextDisplay from "interweave";
import { Nav, NavItem } from "reactstrap";
import { Link as ReactScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const HowToNav = ({ menu = [] }) => {
  const { t } = useTranslation();

  return (
    <Nav vertical>
      {/* Nav links */}
      {menu.map((m) => (
        <NavItem key={m.id}>
          <ReactScrollLink className="nav-item" offset={-60} to={m.path} smooth>
            <RichTextDisplay content={t(m.label)} />
          </ReactScrollLink>
          {/* Sub Nav links */}
          {Array.isArray(m.subMenu) && (
            <ul className="d-column">
              {m.subMenu.map((s) => (
                <li key={s.id}>
                  <ReactScrollLink
                    className="nav-item d-block"
                    to={s.path}
                    offset={-60}
                    smooth
                  >
                    <RichTextDisplay content={t(s.label)} />
                  </ReactScrollLink>
                </li>
              ))}
            </ul>
          )}
        </NavItem>
      ))}
    </Nav>
  );
};

HowToNav.propTypes = {
  menu: PropTypes.arrayOf(),
};

export default HowToNav;
