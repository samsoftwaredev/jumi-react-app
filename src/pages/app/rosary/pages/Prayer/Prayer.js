import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Rosary from "../../classes/rosary";
import { useRosaryContext } from "../../context/RosaryContext";
// import RosaryList from "./containers/RosaryTemplates";
import RosaryPlayer from "./containers/RosaryPlayer";

const Prayer = () => {
  const {
    setTrackIndex,
    setTrack,
    setCurrentMystery,
    track,
  } = useRosaryContext();

  const { i18n } = useTranslation();
  const language = i18n.language;
  const rosary = new Rosary();
  const mystery = rosary.getMystery();
  rosary.setMystery(mystery);

  useEffect(() => {
    setTrackIndex(0);
    setTrack(rosary.getPrayersList()[0]);
    setCurrentMystery(mystery);
  }, []);

  // wait for the track to load
  if (!track) return null;

  // return <RosaryList rosary={rosary} language={language} />;
  return <RosaryPlayer rosary={rosary} language={language} />;
};

export default Prayer;
