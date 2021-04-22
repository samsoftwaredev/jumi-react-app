import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AudioBackground = ({
  audioFile,
  autoPlay = false,
  audioLoop = true,
  volume = 0.3,
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
      <source src={audioFile} type="audio/ogg" />
      <source src={audioFile} type="audio/mpeg" />
      <source src={audioFile} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

AudioBackground.propTypes = {
  audioFile: PropTypes.string,
  autoPlay: PropTypes.bool,
  audioLoop: PropTypes.bool,
};

export default AudioBackground;
