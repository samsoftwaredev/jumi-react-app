import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const AudioHeader = ({ title = "", subTitle = "", description = "" }) => {
  const { t } = useTranslation();
  return (
    <div className="text-right">
      <h5 className="title">{t(title)}</h5>
      <small className="mb-1 d-block sub-title">{t(subTitle)}</small>
      <small className="mb-1 d-block description">{t(description)}</small>
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
