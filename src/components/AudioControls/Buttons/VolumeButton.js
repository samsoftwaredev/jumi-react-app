import React from "react";
import { Button } from "reactstrap";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VolumeButton = ({ mute, onMute }) => {
  if (mute) {
    return (
      <Button
        id="mute-track"
        color="light"
        className="btn-clear"
        onClick={() => onMute(false)}
        aria-label="Mute"
      >
        <FontAwesomeIcon icon={faVolumeMute} />
      </Button>
    );
  } else {
    return (
      <Button
        id="unmute-track"
        color="light"
        className="btn-clear"
        onClick={() => onMute(true)}
        aria-label="Unmute"
      >
        <FontAwesomeIcon icon={faVolumeUp} />
      </Button>
    );
  }
};

export default VolumeButton;
