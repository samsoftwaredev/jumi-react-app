import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRosaryContext } from "../../pages/app/rosary/context/RosaryContext";

const AudioBackground = ({ audioRef, volume = 0.2 }) => {
  const { isPlaying, audioMute, backgroundMusic } = useRosaryContext();

  const onPause = () => {
    audioRef?.current?.pause();
  };

  const onPlay = () => {
    if (audioRef?.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (isPlaying && backgroundMusic) {
      onPlay();
    } else {
      onPause();
    }
  }, [isPlaying, backgroundMusic]);

  useEffect(() => {
    audioRef.current.volume = audioMute ? 0 : volume;
  }, [audioMute]);

  useEffect(() => {
    return () => {
      // clear audio
      onPause();
      audioRef.current = null;
    };
  }, []);

  return null;
};

AudioBackground.propTypes = {
  audioSrc: PropTypes.string,
  isPlaying: PropTypes.bool,
  audioMute: PropTypes.bool,
};

export default AudioBackground;
