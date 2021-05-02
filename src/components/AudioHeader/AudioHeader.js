import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const AudioHeader = ({ title = "", subTitle = "", description = "" }) => {
  const { t } = useTranslation();
  return (
    <div className="text-right">
      <h2 className="title">{t(title)}</h2>
      <h2 className="sub-title">{t(subTitle)}</h2>
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
