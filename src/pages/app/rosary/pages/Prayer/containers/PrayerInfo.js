import React from "react";
import PropTypes from "prop-types";
import {
  faBible,
  faCross,
  faDotCircle,
  faPrayingHands,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RichTextDisplay from "interweave";
import { useTranslation } from "react-i18next";

const PrayerInfo = ({ prayer, currentMystery }) => {
  const { t } = useTranslation();

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

  const getImage = (p) => {
    if (p.isMystery) {
      // if the prayer is a mystery, show label and place
      return <img height="400" src={p.image} alt={p.mystery?.label} />;
    }
    return null;
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

  return (
    <>
      <h6 className="text-right small mb-0 text-muted">
        {t(currentMystery.label)}
      </h6>
      <h6 className="text-right small font-weight-bold">
        <RichTextDisplay content={t(getMysteryHeader(prayer))} />
      </h6>
      <h5 className="d-flex justify-content-between align-items-center">
        <span>
          {getIcon(prayer)} {t(prayer?.label)}
        </span>
        {prayer.isHailMary && (
          <small className="text-muted">{prayer.hailMaryIndex}</small>
        )}
        {prayer.isMystery && (
          <small className="text-muted">
            {getMysteryPlace(prayer.mystery?.mysteryIndex)}
          </small>
        )}
      </h5>
      <hr />
      <RichTextDisplay content={t(prayer?.description)} />
      <div className="text-center" style={{ maxHeight: "200" }}>
        {getImage(prayer)}
      </div>
    </>
  );
};

PrayerInfo.propTypes = {
  p: PropTypes.shape().isRequired,
  currentMystery: PropTypes.shape().isRequired,
};

export default PrayerInfo;
