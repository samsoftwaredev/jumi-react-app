import React, { useContext } from "react";
import PropTypes from "prop-types";
// import { prayers } from "../constants/prayers";

const RosaryContext = React.createContext({});

const RosaryContextProvider = ({ children }) => {
  // const [prayersListAudio, setPrayersListAudio] = useState(
  //   <audio controls>
  //     <source src={prayers.start.audio["en"]} type="audio/ogg" />
  //     <source src={prayers.start.audio["en"]} type="audio/mpeg" />
  //     <source src={prayers.start.audio["en"]} type="audio/mp3" />
  //     Your browser does not support the audio element.
  //   </audio>
  // );

  const store = {
    // prayersListAudio,
    // setPrayersListAudio,
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
