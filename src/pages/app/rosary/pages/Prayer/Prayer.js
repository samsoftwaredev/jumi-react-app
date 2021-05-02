import React from "react";
import { useTranslation } from "react-i18next";
import Rosary from "../../classes/rosary";
// import RosaryList from "./containers/RosaryTemplates";
import RosaryPlayer from "./containers/RosaryPlayer";

const Prayer = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const rosary = new Rosary();

  // return <RosaryList rosary={rosary} language={language} />;
  return <RosaryPlayer rosary={rosary} language={language} />;
};

export default Prayer;
