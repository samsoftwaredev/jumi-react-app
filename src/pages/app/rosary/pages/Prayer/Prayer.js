import React from "react";
import { useTranslation } from "react-i18next";
import RosaryPrayer from "../../classes/rosaryPrayer";
import { RosaryList } from "./containers/RosaryTemplates";
// import { useRosaryContext } from "../../context/RosaryContext";

const Prayer = () => {
  const { i18n } = useTranslation();
  // const { prayersListAudio } = useRosaryContext();
  const rosary = new RosaryPrayer();
  const language = i18n.language;

  return <RosaryList rosary={rosary} language={language} />;
};

export default Prayer;
