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
    component: (
      <>
        <p>
          Se enuncia en cada decena el "misterio", por ejemplo, en el primer
          misterio: "La Encarnación del Hijo de Dios". Después de una breve
          pausa de reflexión, se rezan: un Padre nuestro, diez Avemarías y un
          Gloria. A cada decena del "rosario" se puede añadir una invocación. A
          la final del Rosario se recita la Letanía Lauretana, u otras oraciones
          marianas.
        </p>
      </>
    ),
  },
  {
    label: "Misterios del Rosario",
    path: "mysteries",
    subMenu: Object.values(rosaryMysteries).map((p, i) => ({
      id: i,
      label: p.label,
      path: p.label.toLowerCase().replace(/ /g, "-"),
      subMenu: p.mysteries.map((p, index) => ({
        id: index,
        label: p.label,
        description: p.description.replace(/\//g, "\n"),
      })),
    })),
    component: (
      <>
        <p>
          El Rosario está compuesto por veinte "misterios" (acontecimientos,
          momentos significativos) de la vida de Jesús y de María. Comprende los
          misterios gozosos (lunes y sábado), el segundo los luminosos (jueves),
          el tercero los dolorosos (martes y viernes) y el cuarto los gloriosos
          (miércoles y domingo).
        </p>
      </>
    ),
  },
  {
    label: "Oraciones",
    path: "prayers",
    subMenu: Object.values(prayers).map((p, i) => ({
      id: i,
      label: p.label,
      path: p.label.toLowerCase().replace(/ /g, "-"),
      description: p.description.replace(/\//g, "\n"),
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
            <NavItem id={m.label}>
              <a className="nav-item" href={`${location.pathname}#${m.path}`}>
                {m.label}
              </a>
              {Array.isArray(m.subMenu) && (
                <ul className="d-column">
                  {m.subMenu.map((s) => (
                    <a
                      id={s.label}
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
          <div id={m.path}>
            <h1>{m.label}</h1>
            <div>{m.component}</div>
            {Array.isArray(m.subMenu) &&
              m.subMenu.map((s) => (
                <div id={s.path} className="ml-1">
                  <h5>{s.label}</h5>
                  <p className="ml-3">{s.description}</p>
                  <ol className="ml-3">
                    {Array.isArray(s.subMenu) &&
                      s.subMenu.map((ss) => (
                        <li id={ss.label}>
                          <h6>{ss.label}</h6>
                          <p>{ss.description}</p>
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
