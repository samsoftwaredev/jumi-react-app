import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const RosaryContext = React.createContext({
  prayersListAudio: {},
  updatePrayerList: () => {},
  prayerAudioExist: () => {},
  setPrayersListAudio: () => {},
});

const RosaryContextProvider = ({ children }) => {
  const [prayersListAudio, setPrayersListAudio] = useState(null);

  const updatePrayerList = (key, value) => {
    setPrayersListAudio(...prayersListAudio, { key, value });
  };

  const prayerAudioExist = (key) => !!prayersListAudio[key];

  const store = {
    prayersListAudio,
    setPrayersListAudio,
    updatePrayerList,
    prayerAudioExist,
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
