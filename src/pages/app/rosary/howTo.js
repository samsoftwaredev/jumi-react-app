import React from "react";
import { Col, Nav, NavItem, Row } from "reactstrap";
import RichTextDisplay from "interweave";
import { Link as ReactScrollLink } from "react-scroll";
import { prayers } from "./constants/prayers";
import { rosaryMysteries } from "./constants/mysteries";
import { translate } from "../../../helpers/translate";
import { strToId } from "../../../helpers/transform";

const menu = [
  {
    id: "overview",
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
    id: "how-to-pray",
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
    id: "mysteries",
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
    id: "prayers",
    subMenu: Object.values(prayers).map((p) => ({
      id: strToId(p.label),
      path: strToId(p.label),
      label: p.label,
      description: p.description,
    })),
    component: (
      <>
        <p>
          La oración es nuestra manera de comunicarnos con Dios. Así como los
          amigos y los miembros de la familia pasan tiempo hablando entre ellos
          para profundizar sus relaciones, la oración profundiza nuestra
          relación con Dios.
        </p>
      </>
    ),
  },
];

const HowTo = () => (
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
              {m.label}
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
                      <RichTextDisplay content={translate(s.label)} />
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
          <h1>{m.label}</h1>
          <div>{m.component}</div>

          {/* sub nav */}
          {Array.isArray(m.subMenu) &&
            m.subMenu.map((s) => (
              <div key={s.id} id={s.id} className="ml-1">
                <h5>
                  <RichTextDisplay content={translate(s.label)} />
                </h5>
                <div className="ml-3">
                  <RichTextDisplay content={translate(s.description)} />
                </div>

                {/* sub sub nav */}
                <ol className="ml-3">
                  {Array.isArray(s.subMenu) &&
                    s.subMenu.map((ss) => (
                      <li key={ss.id} id={ss.id}>
                        <h6>
                          <RichTextDisplay content={translate(ss.label)} />
                        </h6>
                        <div className="ml-3">
                          <RichTextDisplay content={translate(s.description)} />
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

export default HowTo;
