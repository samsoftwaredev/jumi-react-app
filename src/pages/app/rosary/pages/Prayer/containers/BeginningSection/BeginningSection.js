import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";

const BeginningSection = ({ currentMystery }) => {
  const { t } = useTranslation();

  const todaysDate = new Date();

  return (
    <>
      <h2>{t(currentMystery.label)}</h2>
      <Moment format="D MMMM, YYYY">{todaysDate}</Moment>
    </>
  );
};

BeginningSection.propTypes = {
  currentMystery: PropTypes.shape().isRequired,
};

export default BeginningSection;
