import React from "react";
import { Button } from "reactstrap";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VolumeButton = ({ mute, onMute }) => {
  if (mute) {
    return (
      <Button
        color="light"
        className="btn-clear"
        onClick={() => onMute(false)}
        aria-label="Unmute"
      >
        <FontAwesomeIcon icon={faVolumeMute} />
      </Button>
    );
  } else {
    return (
      <Button
        color="light"
        className="btn-clear"
        onClick={() => onMute(true)}
        aria-label="Mute"
      >
        <FontAwesomeIcon icon={faVolumeUp} />
      </Button>
    );
  }
};

export default VolumeButton;
