import RichTextDisplay from "interweave";
import React from "react";
import PropTypes from "prop-types";
import { AudioCoverStyle } from "./AudioCover.style";
import { useTranslation } from "react-i18next";

const AudioCover = ({
  title = "",
  artist = "",
  image = "",
  description = "",
}) => {
  const { t } = useTranslation();
  return (
    <AudioCoverStyle>
      {image && (
        <img
          className="artwork"
          src={image}
          alt={`Track artwork for ${t(title)} by ${t(artist)}`}
        />
      )}
      <p className="title">{t(title)}</p>
      <div className="description">
        <RichTextDisplay content={t(description)} />
      </div>
    </AudioCoverStyle>
  );
};

AudioCover.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default AudioCover;
