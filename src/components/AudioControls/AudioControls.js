import { Button } from "reactstrap";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AudioControlsStyle from "./AudioControls.style";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  mute,
  onMute,
  disablePrev = false,
  disableNext = false,
}) => (
  <AudioControlsStyle>
    <Button
      className="prev btn-clear"
      aria-label="Previous"
      disabled={disablePrev}
      onClick={onPrevClick}
    >
      <FontAwesomeIcon icon={faBackward} />
    </Button>
    {isPlaying ? (
      <Button
        className="pause btn-clear"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <FontAwesomeIcon icon={faPause} />
      </Button>
    ) : (
      <Button
        className="play btn-clear"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <FontAwesomeIcon icon={faPlay} />
      </Button>
    )}
    <Button
      className="next btn-clear"
      aria-label="Next"
      disabled={disableNext}
      onClick={onNextClick}
    >
      <FontAwesomeIcon icon={faForward} />
    </Button>
    {mute ? (
      <Button
        color="light"
        className="btn-clear"
        onClick={() => onMute(false)}
        aria-label="Unmute"
      >
        <FontAwesomeIcon icon={faVolumeMute} />
      </Button>
    ) : (
      <Button
        color="light"
        className="btn-clear"
        onClick={() => onMute(true)}
        aria-label="Mute"
      >
        <FontAwesomeIcon icon={faVolumeUp} />
      </Button>
    )}
  </AudioControlsStyle>
);

export default AudioControls;
