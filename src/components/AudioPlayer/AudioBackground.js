import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AudioBackground = ({
  audioSrc,
  isPlaying = false,
  volume = 0.2,
  audioMute,
}) => {
  const audioRef = useRef(new Audio(audioSrc));

  const onPause = () => {
    audioRef?.current?.pause();
  };

  const onPlay = () => {
    if (audioRef?.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      onPlay();
    } else {
      onPause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = audioMute ? 0 : volume;
  }, [audioMute]);

  return null;
};

AudioBackground.propTypes = {
  audioSrc: PropTypes.string,
  isPlaying: PropTypes.bool,
  audioMute: PropTypes.bool,
};

export default AudioBackground;
