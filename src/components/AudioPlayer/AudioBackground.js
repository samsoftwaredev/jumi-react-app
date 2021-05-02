import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AudioBackground = ({
  audioSrc,
  autoPlay = false,
  audioLoop = true,
  volume = 0.2,
}) => {
  const audioRef = useRef();

  const onPause = () => {
    audioRef?.current?.pause();
  };

  const onPlay = () => {
    if (audioRef?.current) {
      audioRef.current.play();
      audioRef.current.volume = volume;
    }
  };

  useEffect(() => {
    if (autoPlay) {
      onPlay();
    } else {
      onPause();
    }
  }, [autoPlay]);

  return (
    <audio controls className="d-none" ref={audioRef} loop={audioLoop}>
      <source src={audioSrc} type="audio/ogg" />
      <source src={audioSrc} type="audio/mpeg" />
      <source src={audioSrc} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

AudioBackground.propTypes = {
  audioSrc: PropTypes.string,
  autoPlay: PropTypes.bool,
  audioLoop: PropTypes.bool,
};

export default AudioBackground;
