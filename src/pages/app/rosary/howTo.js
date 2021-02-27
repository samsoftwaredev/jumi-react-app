import React from "react";
import { useLocation } from "react-router-dom";
import { Col, Nav, NavItem, Row } from "reactstrap";
import { prayers } from "../../../constants/prayers";
import { rosaryMysteries } from "../../../constants/rosary";

const menu = [
  {
    label: "Resumen",
    path: "overview",
    component: (
      <>
        <p>
          El rosario nos ayuda a contemplar la Vida de Jesús mediante los ojos
          de Maria.
        </p>
        <p>
          No honramos a Maria, sino la acompañamos en su largo caminar. Al rezar
          el rosario, no hacemos otra cosa que pedirle a la Virgen María su
          ayuda para permanecer en unión espiritual con Jesús, para llegar a él.
        </p>
        <p>
          El rosario es un rezo cristiano que sirve para conmemorar los 20
          misterios de la vida y obra de Jesucristo y de la Virgen María. Se
          recitan después de anunciar cada uno de los misterios con un padre
          nuestro, diez avemarías y un gloria al Padre.
        </p>
      </>
    ),
  },
  {
    label: "¿Cómo rezar el Santo Rosario?",
    path: "how-to-pray",
    component: <>Text goes here</>,
  },
  {
    label: "¿Qué es el santo rosario?",
    path: "what-is-the-rosary",
    component: <>Text goes here</>,
  },
  {
    label: "¿Dónde podemos rezar el rosario?",
    path: "where-can-we-pray",
    component: <>Text goes here</>,
  },
  {
    label: "Misterios del Rosario",
    path: "mysteries",
    subMenu: Object.values(rosaryMysteries).map((p) => ({
      label: p.label,
      path: p.label.toLowerCase().replace(/ /g, "-"),
      subMenu: p.mysteries.map((p) => ({
        label: p.text,
        description: p.description.replace(/\//g, "\n"),
      })),
    })),
    component: <>Text goes here</>,
  },
  {
    label: "Oraciones",
    path: "prayers",
    subMenu: Object.values(prayers).map((p) => ({
      label: p.name,
      path: p.name.toLowerCase().replace(/ /g, "-"),
      description: p.text.replace(/\//g, "\n"),
    })),
    component: <>Text goes here</>,
  },
];

const HowTo = (props) => {
  let location = useLocation();
  return (
    <Row className="mt-4">
      <Col md="4">
        <Nav vertical>
          {menu.map((m) => (
            <NavItem>
              <a className="nav-item" href={`${location.pathname}#${m.path}`}>
                {m.label}
              </a>
              {Array.isArray(m.subMenu) && (
                <ul className="d-column">
                  {m.subMenu.map((s) => (
                    <a
                      className="nav-item d-block"
                      href={`${location.pathname}#${s.path}`}
                    >
                      {s.label}
                    </a>
                  ))}
                </ul>
              )}
            </NavItem>
          ))}
        </Nav>
      </Col>
      <Col md="8">
        {menu.map((m) => (
          <>
            <h1 id={m.path}>{m.label}</h1>
            <p>{m.component}</p>
            {Array.isArray(m.subMenu) &&
              m.subMenu.map((s) => (
                <div className="ml-1" id={s.path}>
                  <h5>{s.label}</h5>
                  <p className="ml-3">{s.description}</p>
                  {Array.isArray(s.subMenu) &&
                    s.subMenu.map((ss) => (
                      <div className="ml-3">
                        <h6>{ss.label}</h6>
                        <p>{ss.description}</p>
                      </div>
                    ))}
                </div>
              ))}
          </>
        ))}
      </Col>
    </Row>
  );
};

export default HowTo;
