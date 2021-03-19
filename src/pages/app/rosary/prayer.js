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
import { RosaryPrayer } from "./classes/rosaryPrayer";
import AudioPlayer from "../../../components/AudioPlayer";
import { strToId } from "../../../helpers/transform";
import { useTranslation } from "react-i18next";

const Prayer = () => {
  const { t } = useTranslation();
  const language = "en";
  const todaysDate = new Date();
  const rosary = new RosaryPrayer();

  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(null);

  const todaysMystery = rosary.getMystery();
  const prayersList = rosary.getPrayersList();

  const masagePrayerList = prayersList.map((p, index) => ({
    ...p,
    // create a unique ID for all prayers in the rosary
    id: strToId(`${p.label} ${index}`),
  }));

  const scrollToPrayer = (prayer) => {
    const prayerIndex = rosary.getPrayerIndex();
    const elementId = strToId(`${prayer.label} ${prayerIndex}`);
    // smooth scroll to the correct prayer
    scroller.scrollTo(elementId, {
      smooth: true,
      offset: -60,
    });
  };

  const startPrayer = () => {
    const prayer = rosary.jumpToPrayer(0);
    if (prayer) {
      scrollToPrayer(prayer);
      setCurrentPrayerIndex(rosary.getPrayerIndex());
    }
  };

  const nextPrayer = (prayerIndex) => {
    const prayer = rosary.jumpToPrayer(prayerIndex + 1);
    // check if the prayer is defined
    if (prayer) {
      scrollToPrayer(prayer);
      setCurrentPrayerIndex(rosary.getPrayerIndex());
    }
  };

  const getMysteryPlace = (place) => {
    // get the place of the mystery
    switch (place) {
      case 1:
        return "mysteries.ordinalNumbers.first";
      case 2:
        return "mysteries.ordinalNumbers.second";
      case 3:
        return "mysteries.ordinalNumbers.third";
      case 4:
        return "mysteries.ordinalNumbers.fourth";
      case 5:
        return "mysteries.ordinalNumbers.fifth";
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
      return `${t(p.label)}\n(${t(getMysteryPlace(p.mysteryIndex))})`;
    } else if (p.mystery?.label) {
      // if the mystery label is defined in prayer, show mystery label and place
      const { label, mysteryIndex } = p.mystery;
      return `${t(label)}\n(${t(getMysteryPlace(mysteryIndex))})`;
    } else {
      // don't show anythign
      return "";
    }
  };

  return (
    <Row className="flex-column align-items-center">
      <Col className="d-flex flex-column align-items-center">
        {/* the rosary welcome screen */}
        <div
          className="d-flex flex-column text-center w-100 justify-content-center"
          style={{ minHeight: "85vh" }}
        >
          <h2>{t(todaysMystery.label)}</h2>
          <Moment format="D MMMM, YYYY">{todaysDate}</Moment>
          <div className="mt-4">
            <Button color="info" onClick={startPrayer}>
              <FontAwesomeIcon icon={faChevronDown} />
              &nbsp;&nbsp;
              {t("start.label")}
            </Button>
          </div>
        </div>
        {/* the rosary prayers */}
        {masagePrayerList.map((p, index) => {
          const isCurrentPrayer = currentPrayerIndex === index;
          return (
            <Col
              md={6}
              id={p.id}
              key={p.id}
              className="d-flex flex-column justify-content-between mb-3"
              style={{ minHeight: "90vh", borderLeft: "1px solid #e3e3e3" }}
            >
              <div>
                <h6 className="text-right small mb-0 text-muted">
                  {t(todaysMystery.label)}
                </h6>
                <h6 className="text-right small font-weight-bold">
                  <RichTextDisplay content={t(getMysteryHeader(p))} />
                </h6>
                <h5 className="d-flex justify-content-between align-items-center">
                  <span>
                    {getIcon(p)} {t(p?.label)}
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
                <RichTextDisplay content={t(p?.description)} />
              </div>
              <div className="text-right">
                <AudioPlayer
                  audioFile={p?.audio ? p?.audio[language] : null}
                  autoPlay={isCurrentPrayer}
                  audioEnded={() => nextPrayer(index)}
                />
                {masagePrayerList.length - 1 > index && (
                  <Button
                    className="btn-circle mt-4"
                    color="info"
                    onClick={() => nextPrayer(index)}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Button>
                )}
              </div>
            </Col>
          );
        })}
      </Col>
    </Row>
  );
};

export default Prayer;
