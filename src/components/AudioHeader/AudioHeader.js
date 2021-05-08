import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const AudioHeader = ({ title = "", subTitle = "", description = "" }) => {
  const { t } = useTranslation();
  return (
    <div className="text-right">
      <small className="sub-title">{t(subTitle)}</small>
      <h5 className="title">{t(title)}</h5>
      <h3 className="description">{t(description)}</h3>
    </div>
  );
};

AudioHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default AudioHeader;
