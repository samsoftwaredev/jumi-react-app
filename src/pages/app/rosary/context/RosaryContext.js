import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  defaultEndingPrayers,
  defaultEndMysteryPrayers,
  defaultBeginningPrayers,
  beginningPrayersKey,
  endMysteryPrayersKey,
  endingPrayersKey,
} from "../constants/prayers";

const listOfDefaultPrayers = {
  [beginningPrayersKey]: defaultBeginningPrayers(),
  [endMysteryPrayersKey]: defaultEndMysteryPrayers(),
  [endingPrayersKey]: defaultEndingPrayers(),
};

const RosaryContext = React.createContext();

const RosaryContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(null);
  const [currentMystery, setCurrentMystery] = useState(null);
  const [backgroundMusic, setBackgroundMusic] = useState(true);
  const [audioMute, setAudioMute] = useState(false);
  const [listOfPrayers, setListOfPrayers] = useState(listOfDefaultPrayers);

  const toggleAudioMute = (bool) => {
    setAudioMute(bool);
  };

  const toggleBackgroundMusic = () => {
    setBackgroundMusic(!backgroundMusic);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const updateListOfPrayers = (prayers = listOfDefaultPrayers) => {
    setListOfPrayers(prayers);
  };

  const store = {
    isPlaying,
    setIsPlaying,
    trackIndex,
    setTrackIndex,
    currentMystery,
    setCurrentMystery,
    backgroundMusic,
    setBackgroundMusic,
    audioMute,
    setAudioMute,
    listOfPrayers,
    updateListOfPrayers,
    toggleAudioMute,
    togglePlayPause,
    toggleBackgroundMusic,
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
