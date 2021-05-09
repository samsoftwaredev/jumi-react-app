import React, { useEffect, useRef, useState } from "react";
import { Input } from "reactstrap";
import PropTypes from "prop-types";
import AudioControls from "../AudioControls";
import AudioCover from "../AudioCover";
import AudioHeader from "../AudioHeader/AudioHeader";

const AudioCard = ({
  audioTitle = "",
  audioArtist = "",
  audioImage = "",
  audioSrc = "",
  audioDescription = "",
  title = "",
  description = "",
  subTitle = "",
  id = "",
  audioMute = false,
  toPrevTrack = null,
  toNextTrack = null,
  setIsPlaying = null,
  isPlaying = false,
}) => {
  const [trackProgress, setTrackProgress] = useState(null);
  const [mute, setMute] = useState(audioMute);
  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleAudioMute = (bool) => {
    audioRef.current.volume = bool ? 0 : 1;
    setMute(bool);
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
      audioRef.current.volume = mute ? 0 : 1;
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
    <div className="track-card">
      <AudioHeader
        title={title}
        subTitle={subTitle}
        description={description}
      />
      <div className="track-info">
        <AudioCover
          title={audioTitle}
          artist={audioArtist}
          image={audioImage}
          description={audioDescription}
        />
        <AudioControls
          mute={mute}
          onMute={toggleAudioMute}
          isPlaying={isPlaying}
          onPlayPauseClick={playPause}
          // disabledPrev
          // disabledNext
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
        />
      </div>
    </div>
  );
};

AudioCard.propTypes = {
  audioTitle: PropTypes.string,
  audioArtist: PropTypes.string,
  audioImage: PropTypes.string,
  audioSrc: PropTypes.string,
  audioDescription: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
  isPlaying: PropTypes.func,
  toPrevTrack: PropTypes.func,
  toNextTrack: PropTypes.func,
};

export default AudioCard;
