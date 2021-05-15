import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import AudioCover from "../../../../../../../components/AudioCover";
import AudioHeader from "../../../../../../../components/AudioHeader/AudioHeader";
import { useRosaryContext } from "../../../../context/RosaryContext";
import { strToId } from "../../../../../../../helpers/transform";
import { getOrdinalNumbers } from "../../helpers/transform";
import AudioControls from "../../../../../../../components/AudioControls";

const RosaryAudio = ({ audioRef, rosary }) => {
  const {
    isPlaying,
    trackIndex,
    setTrackIndex,
    audioMute,
    setIsPlaying,
    togglePlayPause,
    toggleAudioMute,
    listOfPrayers,
  } = useRosaryContext();

  const { t } = useTranslation();

  const track = rosary.jumpToPrayer(trackIndex);
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
      // play track and set timer
      audioRef.current.play();
      startTimer();
    } else {
      // pause track and clear timer
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    setTrackIndex(0);
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    // exit block if track id is falsy
    if (!id) return;

    audioRef.current.pause();
    if (isReady.current) {
      // makes a request to get the audio
      audioRef.current = new Audio(audioSrc);
      // mute audio if audioMute was set by the user
      audioRef.current.volume = audioMute ? 0 : 1;
      // play the track automatically
      audioRef.current.play();
      setIsPlaying(true);
      // set timer of track
      setTrackProgress(audioRef.current.currentTime);
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
    if (prayer) setTrackIndex(index);
  };

  const toggleMute = (bool) => {
    audioRef.current.volume = bool ? 0 : 1;
    toggleAudioMute(bool);
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
          onMute={toggleMute}
          isPlaying={isPlaying}
          onPlayPauseClick={togglePlayPause}
          onPrevClick={() => moveToTrack(trackIndex - 1)}
          onNextClick={() => moveToTrack(trackIndex + 1)}
        />
      </div>
    </div>
  );
};

export default RosaryAudio;
