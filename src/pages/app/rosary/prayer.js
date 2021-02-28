import {
  faBible,
  faChevronDown,
  faCross,
  faDotCircle,
  faPrayingHands,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Moment from "react-moment";
import { Button, Col, Row } from "reactstrap";
import { RosaryPrayer } from "../../../common/rosary/rosaryPrayer";

const Prayer = () => {
  const rosary = new RosaryPrayer();
  // const prayer = rosary.getPrayer();
  const prayersList = rosary.getPrayersList();
  const masagePrayerList = prayersList.map((p, index) => ({
    ...p,
    // create a unique ID for all prayers in the rosary
    id: `${p.label} ${index}`.toLowerCase().replace(/ /g, "-"),
  }));
  const todaysMystery = rosary.getMystery();
  const todaysDate = new Date();

  const getIcon = (p) => {
    if (p.isMystery) return <FontAwesomeIcon icon={faBible} />;
    if (p.isCross) return <FontAwesomeIcon icon={faCross} />;
    if (p.isHailMary) return <FontAwesomeIcon icon={faPrayingHands} />;
    return <FontAwesomeIcon icon={faDotCircle} />;
  };

  return (
    <Row className="flex-column align-items-center mt-4">
      <Col className="d-flex flex-column align-items-center">
        <div
          className="d-flex flex-column text-center w-100 justify-content-center"
          style={{ minHeight: "90vh" }}
        >
          <h2>{todaysMystery.label}</h2>
          <Moment format="DD MMMM, YYYY">{todaysDate}</Moment>
        </div>
        {masagePrayerList.map((p) => {
          const isLetanias = p.label?.toLowerCase() === "letanias";
          return (
            <Col
              md={isLetanias ? 12 : 6}
              id={p.id}
              key={p.id}
              style={{ minHeight: "100vh" }}
            >
              <h6 className="text-right small mb-0 text-muted">
                {todaysMystery.label}
              </h6>
              <h6 className="text-right small font-weight-bold">
                {p?.mystery?.label}
              </h6>
              <h5 className="d-flex justify-content-between align-items-center">
                <span>
                  {getIcon(p)} {p?.label}
                </span>
                <small className="text-muted">
                  {p.isHailMary && ` ${p.index} `}
                </small>
              </h5>
              <hr />
              <p>{p?.description?.replace(/\//g, "\n")}</p>
            </Col>
          );
        })}
      </Col>
      <Col md={1} className="text-center">
        <Button className="fixed-bottom" block onClick={rosary.nextPrayer}>
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </Col>
    </Row>
  );
};

export default Prayer;
