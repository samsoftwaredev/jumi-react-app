import RichTextDisplay from "interweave";
import React, { useState } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { AudioCoverStyle } from "./AudioCover.style";

const AudioCover = ({
  title = "",
  artist = "",
  image = "",
  description = "",
}) => {
  const { t } = useTranslation();
  const [hide, setHide] = useState(true);

  const toggle = () => {
    setHide(!hide);
  };

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
      <div className={`description ${hide && "text-truncate height-sm"}`}>
        <RichTextDisplay content={t(description)} />
      </div>
      <div className="text-center mt-3">
        <Button onClick={toggle} color="link">
          Show {hide ? "More" : "Less"}
        </Button>
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
