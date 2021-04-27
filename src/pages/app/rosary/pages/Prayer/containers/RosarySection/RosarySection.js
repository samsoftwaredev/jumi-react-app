import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PrayerInfo from "../PrayerInfo/PrayerInfo";
import AudioPlayer from "../../../../../../../components/AudioPlayer";
import { Col, Button } from "reactstrap";

const RosarySection = ({
  size,
  prayer,
  nextPrayer,
  language,
  currentMystery,
  autoPlayAudio,
  currentPrayerIndex,
  index,
  audioMute,
  setAudioMute,
}) => {
  const audio = prayer?.audio ? prayer?.audio[language] : null;
  const isCurrentPrayer = currentPrayerIndex === index;
  return (
    <Col
      md={6}
      id={prayer.id}
      key={prayer.id}
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "95vh", borderLeft: "1px solid #e3e3e3" }}
    >
      <div>
        <PrayerInfo currentMystery={currentMystery} prayer={prayer} />
      </div>
      <div className="text-right mb-5">
        <AudioPlayer
          audioFile={audio}
          autoPlay={autoPlayAudio && isCurrentPrayer}
          audioEnded={() => nextPrayer(index)}
          audioMute={audioMute}
          onToggleAudioVolume={() => setAudioMute(!audioMute)}
        />
        {size - 1 > index && (
          <Button
            className="btn-circle ml-1"
            color="info"
            onClick={() => nextPrayer(index)}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        )}
      </div>
    </Col>
  );
};

RosarySection.propTypes = {
  size: PropTypes.number,
  prayer: PropTypes.shape(),
  nextPrayer: PropTypes.func,
  language: PropTypes.string,
  currentMystery: PropTypes.shape(),
  autoPlayAudio: PropTypes.bool,
  currentPrayerIndex: PropTypes.string,
  index: PropTypes.number,
  audioMute: PropTypes.bool,
  setAudioMute: PropTypes.func,
};

export default RosarySection;
