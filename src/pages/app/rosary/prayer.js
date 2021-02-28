import React from "react";
import {
  faBible,
  faChevronDown,
  faCross,
  faDotCircle,
  faPrayingHands,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import { Button, Col, Row } from "reactstrap";
import { RosaryPrayer } from "../../../common/rosary/rosaryPrayer";
import { scroller } from "react-scroll";

const getId = (str) => str.toLowerCase().replace(/ /g, "-");

const setId = (p, index) => ({
  ...p,
  // create a unique ID for all prayers in the rosary
  id: getId(`${p.label} ${index}`),
});

const Prayer = () => {
  let nextButtonClicked = false;
  const rosary = new RosaryPrayer();
  const todaysMystery = rosary.getMystery();
  const todaysDate = new Date();
  const prayersList = rosary.getPrayersList();
  const masagePrayerList = prayersList.map(setId);

  const scrollToPrayer = (prayer) => {
    const prayerIndex = rosary.getPrayerIndex();
    const elementId = getId(`${prayer.label} ${prayerIndex}`);
    // smooth scroll to the correct prayer
    scroller.scrollTo(elementId, {
      smooth: true,
      offset: -150,
    });
  };

  const nextPrayer = () => {
    if (nextButtonClicked === false) {
      nextButtonClicked = true;
      const prayer = rosary.getPrayer();
      scrollToPrayer(prayer);
      // exit function
      return;
    }

    rosary.nextPrayer();
    const prayer = rosary.getPrayer();
    // check if the prayer is defined
    if (prayer) scrollToPrayer(prayer);
  };

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
          return (
            <Col
              md={6}
              id={p.id}
              key={p.id}
              style={{ minHeight: "100vh", borderLeft: "1px solid #e3e3e3" }}
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
        <Button className="fixed-bottom" block onClick={nextPrayer}>
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </Col>
    </Row>
  );
};

export default Prayer;
