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
import { getOrdinalNumbers } from "../../helpers/transform";

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
      return `${t(p.label)}\n(${t(getOrdinalNumbers(p.mysteryIndex))})`;
    } else if (p.mystery?.label) {
      // if the mystery label is defined in prayer, show mystery label and place
      const { label, mysteryIndex } = p.mystery;
      return `${t(label)}\n(${t(getOrdinalNumbers(mysteryIndex))})`;
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
            {getOrdinalNumbers(prayer.mystery?.mysteryIndex)}
          </small>
        )}
      </h5>
      <hr />
      <p>
        <RichTextDisplay content={t(prayer?.description)} />
      </p>
      <div className="text-center" style={{ maxHeight: "200" }}>
        {getImage(prayer)}
      </div>
    </>
  );
};

PrayerInfo.propTypes = {
  prayer: PropTypes.shape().isRequired,
  currentMystery: PropTypes.shape().isRequired,
};

export default PrayerInfo;
