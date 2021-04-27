import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const RosaryContext = React.createContext({
  prayersListAudio: [],
  setPrayersListAudio: () => {},
});

const RosaryContextProvider = ({ children }) => {
  const [prayersListAudio, setPrayersListAudio] = useState([]);

  const store = {
    prayersListAudio,
    setPrayersListAudio,
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
