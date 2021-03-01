import React, { useState } from "react";
import {
  faBible,
  faChevronDown,
  faCross,
  faDotCircle,
  faPrayingHands,
} from "@fortawesome/free-solid-svg-icons";
import RichTextDisplay from "interweave";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import { scroller } from "react-scroll";
import { Button, Col, Row } from "reactstrap";
import { RosaryPrayer } from "../../../common/rosary/rosaryPrayer";

const getId = (str) => str.toLowerCase().replace(/ /g, "-");

const Prayer = () => {
  let nextButtonClicked = false;
  const rosary = new RosaryPrayer();
  const todaysMystery = rosary.getMystery();
  const todaysDate = new Date();
  const prayersList = rosary.getPrayersList();
  const masagePrayerList = prayersList.map((p, index) => ({
    ...p,
    // create a unique ID for all prayers in the rosary
    id: getId(`${p.label} ${index}`),
  }));

  const [disabledButton, setDisabledButton] = useState(false);

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
    const prayerIndex = rosary.getPrayerIndex();
    // check if the prayer is defined
    if (prayer) scrollToPrayer(prayer);

    // button functionality
    if (prayerIndex === prayersList.length - 1) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  const getMysteryPlace = (place) => {
    // get the place of the mystery
    switch (place) {
      case 1:
        return "Primer Misterio";
      case 2:
        return "Segundo Misterio";
      case 3:
        return "Tercer Misterio";
      case 4:
        return "Cuarto Misterio";
      case 5:
        return "Quinto Misterio";
      default:
        return "";
    }
  };

  const getIcon = (p) => {
    if (p.isMystery) return <FontAwesomeIcon icon={faBible} />;
    if (p.isCross) return <FontAwesomeIcon icon={faCross} />;
    if (p.isHailMary) return <FontAwesomeIcon icon={faPrayingHands} />;
    return <FontAwesomeIcon icon={faDotCircle} />;
  };

  const getMysteryHeader = (p) => {
    if (p.isMystery) {
      // if the prayer is a mystery, show label and place
      return `${p.label} (${getMysteryPlace(p.mysteryIndex)})`;
    } else if (p.mystery?.label) {
      // if the mystery label is defined, show mystery label and place
      const { label, mysteryIndex } = p.mystery;
      return `${label} (${getMysteryPlace(mysteryIndex)})`;
    } else {
      // don't show anythign
      return "";
    }
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
                {getMysteryHeader(p)}
              </h6>
              <h5 className="d-flex justify-content-between align-items-center">
                <span>
                  {getIcon(p)} {p?.label}
                </span>
                {p.isHailMary && (
                  <small className="text-muted">{p.hailMaryIndex}</small>
                )}
                {p.isMystery && (
                  <small className="text-muted">
                    {getMysteryPlace(p.mystery?.mysteryIndex)}
                  </small>
                )}
              </h5>
              <hr />
              <RichTextDisplay content={p?.description} />
            </Col>
          );
        })}
      </Col>
      <Col md={2} className="text-center">
        <Button disabled={disabledButton} onClick={nextPrayer}>
          <FontAwesomeIcon icon={faChevronDown} /> Próximo
        </Button>
      </Col>
    </Row>
  );
};

export default Prayer;
