import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ audioFile, audioEnded, autoplay = false }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const onPause = () => {
    audioRef?.current?.pause();
    setIsPlaying(false);
  };

  const onPlay = () => {
    audioRef?.current?.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    if (autoplay) {
      onPlay();
    } else {
      onPause();
    }
  }, [autoplay]);

  if (!audioFile) return null;
  // if audio file is set, display controls
  return (
    <>
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
        <Button color="light" className="ml-1 btn-circle" onClick={onPause}>
          <FontAwesomeIcon icon={faPause} />
        </Button>
      ) : (
        <Button color="light" className="ml-1 btn-circle" onClick={onPlay}>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      )}
    </>
  );
};

AudioPlayer.propTypes = {
  audioFile: PropTypes.string,
  audioEnded: PropTypes.func,
  autoplay: PropTypes.bool,
};

export default AudioPlayer;
