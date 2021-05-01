import React from "react";
import { AudioCardStyle } from "./AudioCard.style";

const AudioCard = ({ title = "", artist = "", image = "" }) => {
  return (
    <AudioCardStyle>
      <div className="audio-player">
        <div className="track-info">
          <img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
          />
          <h2 className="title">{title}</h2>
          <h3 className="artist">{artist}</h3>
        </div>
      </div>
    </AudioCardStyle>
  );
};

AudioCard.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
};

export default AudioCard;
