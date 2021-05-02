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
  audioSrc,
  audioEnded,
  autoPlay = false,
  audioMute,
  onToggleAudioVolume,
}) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(audioSrc);
  const onPause = () => {
    audioRef?.current?.pause();
    setIsPlaying(false);
  };

  const onPlay = () => {
    audioRef?.current?.play();
    setIsPlaying(true);
  };

  const onMute = () => {
    onToggleAudioVolume();
  };

  const onUnmute = () => {
    onToggleAudioVolume();
  };

  const resetAudioToStart = () => {
    // set the current time of the audio to the beggining
    if (audioRef?.current) audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    if (autoPlay) {
      onPlay();
    } else {
      resetAudioToStart();
      onPause();
    }
  }, [autoPlay]);

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = audioMute ? 0 : 1;
    }
  }, [audioMute]);

  if (!audioSrc) return null;
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
        <source src={audioSrc} type="audio/ogg" />
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc} type="audio/mp3" />
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
  audioSrc: PropTypes.string,
  audioEnded: PropTypes.func,
  autoPlay: PropTypes.bool,
};

export default AudioPlayer;
