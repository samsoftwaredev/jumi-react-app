import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <Row className="flex-column align-items-center mt-4">
      <Col md={1} className="text-center">
        <Button block color="light" onClick={rosary.prevPrayer}>
          <FontAwesomeIcon icon={faChevronUp} />
        </Button>
      </Col>
      <Col className="d-flex flex-column align-items-center">
        <div
          className="d-flex flex-column text-center w-100 justify-content-center"
          style={{ minHeight: "70vh" }}
        >
          <h2>{todaysMystery.label}</h2>
          <Moment format="DD MMMM, YYYY">{todaysDate}</Moment>
        </div>
        {masagePrayerList.map((p) => {
          const isLetanias = p?.name?.toLowerCase() === "letanias";
          return (
            <Col
              md={isLetanias ? 12 : 6}
              id={p.id}
              key={p.id}
              style={{ minHeight: "100vh" }}
            >
              <h6 className="text-right small">{todaysMystery.label}</h6>
              <h5>{p?.name || p?.label}</h5>
              <hr />
              <p>{p?.text?.replace(/\//g, "\n")}</p>
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
