import React from "react";
import PropTypes from "prop-types";
import { AudioCoverStyle } from "./AudioCover.style";
import { useTranslation } from "react-i18next";

const AudioCover = ({ title = "", artist = "", image = "" }) => {
  const { t } = useTranslation();
  return (
    <AudioCoverStyle>
      <img
        className="artwork"
        src={image}
        alt={`Track artwork for ${t(title)} by ${t(artist)}`}
      />
      <h2 className="title">{t(title)}</h2>
      <h3 className="artist">{t(artist)}</h3>
    </AudioCoverStyle>
  );
};

AudioCover.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
};

export default AudioCover;