import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import AudioControls from "../AudioControls";
import AudioCover from "../AudioCover";
import AudioHeader from "../AudioHeader/AudioHeader";
import { useRosaryContext } from "../../pages/app/rosary/context/RosaryContext";
import { strToId } from "../../helpers/transform";

const AudioCard = ({ getOrdinalNumbers, audioRef, rosary }) => {
  const {
    isPlaying,
    trackIndex,
    setTrackIndex,
    track,
    setTrack,
    audioMute,
    setAudioMute,
    setIsPlaying,
  } = useRosaryContext();
  const { t } = useTranslation();

  const title = track?.mystery?.label;
  const subTitle = getOrdinalNumbers(track?.mystery?.mysteryIndex);
  const audioTitle = track?.isHailMary
    ? `${track?.hailMaryIndex}. ${t(track?.label)}`
    : track?.label;
  const audioArtist = track?.artist;
  const audioDescription = track?.description;
  const audioImage = track?.mystery?.image || track?.image;
  const id = strToId(track?.label, trackIndex);
  const audioSrc = rosary?.getAudio(trackIndex);

  const [trackProgress, setTrackProgress] = useState(null);
  // Refs
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleAudioMute = (bool) => {
    audioRef.current.volume = bool ? 0 : 1;
    setAudioMute(bool);
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        moveToTrack(trackIndex + 1);
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
    setTrackIndex(0);
    setTrack(rosary.getPrayersList()[0]);
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
      audioRef.current.volume = audioMute ? 0 : 1;
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [id]);

  const moveToTrack = (index) => {
    // set prayerIndex
    const prayer = rosary.jumpToPrayer(index);
    // check if the prayer is defined
    if (prayer) {
      setTrackIndex(index);
      setTrack(prayer);
    }
  };

  if (!audioSrc) return null;

  return (
    <div className="track-card">
      <AudioHeader title={title} subTitle={subTitle} />
      <div className="track-info">
        <AudioCover
          title={audioTitle}
          artist={audioArtist}
          image={audioImage}
          description={audioDescription}
        />
        <AudioControls
          mute={audioMute}
          onMute={toggleAudioMute}
          isPlaying={isPlaying}
          onPlayPauseClick={playPause}
          onPrevClick={() => moveToTrack(trackIndex - 1)}
          onNextClick={() => moveToTrack(trackIndex + 1)}
        />
      </div>
    </div>
  );
};

export default AudioCard;