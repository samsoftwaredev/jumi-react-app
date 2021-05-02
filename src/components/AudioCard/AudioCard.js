import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AudioCardStyle } from "./AudioCard.style";
import AudioControls from "../AudioControls";
import AudioCover from "../AudioCover";

const AudioCard = ({
  title = "",
  artist = "",
  image = "",
  audioSrc = "",
  id = "",
  toPrevTrack = null,
  toNextTrack = null,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(null);
  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [id]);

  if (!audioSrc) return null;

  return (
    <AudioCardStyle>
      <div className="audio-player">
        <div className="track-info">
          <AudioCover title={title} artist={artist} image={image} />
          <AudioControls
            isPlaying={isPlaying}
            onPlayPauseClick={playPause}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
          />
        </div>
      </div>
    </AudioCardStyle>
  );
};

AudioCard.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
  isPlaying: PropTypes.func,
  toPrevTrack: PropTypes.func,
  toNextTrack: PropTypes.func,
};

export default AudioCard;
