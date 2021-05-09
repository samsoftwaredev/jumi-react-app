import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const RosaryContext = React.createContext();

const RosaryContextProvider = ({ children }) => {
  const [rosary, setRosary] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(null);
  const [track, setTrack] = useState(null);
  const [currentMystery, setCurrentMystery] = useState(null);
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [audioMute, setAudioMute] = useState(false);

  const store = {
    rosary,
    setRosary,
    isPlaying,
    setIsPlaying,
    trackIndex,
    setTrackIndex,
    track,
    setTrack,
    currentMystery,
    setCurrentMystery,
    backgroundMusic,
    setBackgroundMusic,
    audioMute,
    setAudioMute,
  };

  return (
    <RosaryContext.Provider value={store}>{children}</RosaryContext.Provider>
  );
};

RosaryContext.propTypes = {
  children: PropTypes.node,
};

export const useRosaryContext = () => useContext(RosaryContext);

export default RosaryContextProvider;
