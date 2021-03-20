import React, { useEffect, useRef } from "react";

const AudioBackground = ({ audioFile, autoplay }) => {
  const audioRef = useRef();

  const onPause = () => {
    audioRef?.current?.pause();
  };

  const onPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
    }
  };

  useEffect(() => {
    if (autoplay) {
      onPlay();
    } else {
      onPause();
    }
  }, [autoplay]);

  return (
    <audio id="myAudio" controls className="d-none" ref={audioRef}>
      <source src={audioFile} type="audio/ogg" />
      <source src={audioFile} type="audio/mpeg" />
      <source src={audioFile} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

AudioBackground.propTypes = {};

export default AudioBackground;
