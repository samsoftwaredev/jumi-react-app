import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({
  audioFile,
  audioEnded,
  autoplay = false,
  audioMute,
  onToggleAudioVolume,
}) => {
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

  const onMute = () => {
    if (audioRef) {
      audioRef.current.volume = 0;
      onToggleAudioVolume();
    }
  };

  const onUnmute = () => {
    if (audioRef) {
      audioRef.current.volume = 1;
      onToggleAudioVolume();
    }
  };

  useEffect(() => {
    if (autoplay) {
      onPlay();
    } else {
      onPause();
    }
  }, [autoplay]);

  useEffect(() => {
    if (audioRef?.current?.volume) {
      audioRef.current.volume = audioMute ? 0 : 1;
    }
  }, [audioMute]);

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
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      {audioMute ? (
        <Button color="light" className="ml-1 btn-circle" onClick={onUnmute}>
          <FontAwesomeIcon icon={faVolumeMute} />
        </Button>
      ) : (
        <Button color="light" className="ml-1 btn-circle" onClick={onMute}>
          <FontAwesomeIcon icon={faVolumeUp} />
        </Button>
      )}
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
