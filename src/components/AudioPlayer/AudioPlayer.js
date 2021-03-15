import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ audioFile, audioEnded, autoPlay = false }) => {
  // Refs
  const audioRef = useRef();
  // const [trackIndex, setTrackIndex] = useState(0);
  // const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle setup when changing tracks

  const onPause = () => {
    audioRef?.current?.pause();
    setIsPlaying(false);
  };

  const onPlay = () => {
    audioRef?.current?.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    if (autoPlay) {
      onPlay();
    } else {
      onPause();
    }
  }, [autoPlay]);

  if (audioFile) {
    // if audio file is set, display controls
    return (
      <div>
        <audio
          onEnded={audioEnded}
          id="myAudio"
          controls
          ref={audioRef}
          className="d-none"
        >
          <source src={audioFile} type="audio/ogg" />
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {isPlaying ? (
          <Button color="light" className="btn-circle" onClick={onPause}>
            <FontAwesomeIcon icon={faPause} />
          </Button>
        ) : (
          <Button color="light" className="btn-circle" onClick={onPlay}>
            <FontAwesomeIcon icon={faPlay} />
          </Button>
        )}
      </div>
    );
  }
  return null;
};

AudioPlayer.propTypes = {
  audioFile: PropTypes.string,
  audioEnded: PropTypes.func,
  autoPlay: PropTypes.bool,
};

export default AudioPlayer;
