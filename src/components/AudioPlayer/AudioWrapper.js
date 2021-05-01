import { useState, useEffect, useRef } from "react";

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const toPrevTrack = () => {
    console.log("TODO go to prev");
  };

  const toNextTrack = () => {
    console.log("TODO go to next");
  };

  // Destructure for conciseness
  const { duration } = audioRef.current;
  return null;
  // return <AudioControls title={""} image={""} artist={""} />;
};

export default AudioPlayer;
