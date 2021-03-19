import React from "react";
import { Col, Nav, NavItem, Row } from "reactstrap";
import RichTextDisplay from "interweave";
import { Link as ReactScrollLink } from "react-scroll";
import { prayers } from "./constants/prayers";
import { rosaryMysteries } from "./constants/mysteries";
import { strToId } from "../../../helpers/transform";
import { useTranslation } from "react-i18next";

const menu = [
  {
    id: "summary",
    label: "summary.label",
    path: "summary",
    description: "summary.description",
  },
  {
    id: "how-to-pray",
    label: "howToPray.label",
    path: "how-to-pray",
    description: "howToPray.description",
  },
  {
    id: "mysteries",
    label: "mysteries.label",
    path: "mysteries",
    subMenu: Object.values(rosaryMysteries).map((p) => ({
      id: strToId(p.label),
      path: strToId(p.label),
      label: p.label,
      subMenu: p.mysteries.map((p, subIndex) => ({
        id: subIndex,
        label: p.label,
        description: p.description,
      })),
    })),
    description: "mysteries.description",
  },
  {
    label: "prayers.label",
    path: "prayers",
    id: "prayers",
    subMenu: Object.values(prayers).map((p) => ({
      id: strToId(p.label),
      path: strToId(p.label),
      label: p.label,
      description: p.description,
    })),
    description: "prayers.description",
  },
];

const HowTo = () => {
  const { t } = useTranslation();
  return (
    <Row className="mt-4">
      {/* Navigation */}
      <Col md="4">
        <Nav vertical>
          {/* Nav links */}
          {menu.map((m) => (
            <NavItem key={m.id}>
              <ReactScrollLink
                className="nav-item"
                offset={-60}
                to={m.path}
                smooth
              >
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
      </Col>
      {/* Content */}
      <Col md="8">
        {menu.map((m) => (
          <div key={m.id} id={m.id}>
            <h1>{t(m.label)}</h1>
            <p>
              {" "}
              <RichTextDisplay content={t(m.description)} />
            </p>

            {/* sub nav */}
            {Array.isArray(m.subMenu) &&
              m.subMenu.map((s) => (
                <div key={s.id} id={s.id} className="ml-1">
                  <h5>
                    <RichTextDisplay content={t(s.label)} />
                  </h5>
                  <div className="ml-3">
                    <RichTextDisplay content={t(s.description)} />
                  </div>

                  {/* sub sub nav */}
                  <ol className="ml-3">
                    {Array.isArray(s.subMenu) &&
                      s.subMenu.map((ss) => (
                        <li key={ss.id} id={ss.id}>
                          <h6>
                            <RichTextDisplay content={t(ss.label)} />
                          </h6>
                          <div className="ml-3">
                            <RichTextDisplay content={t(s.description)} />
                          </div>
                        </li>
                      ))}
                  </ol>
                </div>
              ))}
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default HowTo;
