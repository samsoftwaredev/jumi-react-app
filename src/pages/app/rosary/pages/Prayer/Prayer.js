import React from "react";
import { useTranslation } from "react-i18next";
import Rosary from "../../classes/rosary";
import RosaryPlayer from "./containers/RosaryPlayer";

const Prayer = () => {
  const { i18n } = useTranslation();

  let rosary = new Rosary(i18n.language);

  return <RosaryPlayer rosary={rosary} />;
};

export default Prayer;
