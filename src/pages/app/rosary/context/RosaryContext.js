import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const RosaryContext = React.createContext({
  prayersSubList: [],
  setPrayerSubList: () => {},
});

const RosaryContextProvider = ({ children }) => {
  const [prayersSubList, setPrayerSubList] = useState([]);

  const store = {
    prayersSubList,
    setPrayerSubList,
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
