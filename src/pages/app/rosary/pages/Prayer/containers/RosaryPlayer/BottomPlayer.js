import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../../../../../../../components/AudioPlayer";

function BottomPlayer({
  prayer,
  language,
  index,
  nextPrayer,
  audioMute,
  setAudioMute,
  autoPlayAudio,
}) {
  console.log(prayer, language, index, audioMute, autoPlayAudio);
  if (typeof index !== "number" || !prayer) return null;
  return (
    <div className="fixed-bottom p-2 bg-dark">
      <div className="">
        <AudioPlayer
          audioSrc={prayer.audio[language]}
          autoPlay={autoPlayAudio}
          audioEnded={() => nextPrayer(index)}
          audioMute={audioMute}
          onToggleAudioVolume={() => setAudioMute(!audioMute)}
        />
      </div>
    </div>
  );
}

BottomPlayer.propTypes = {};

export default BottomPlayer;
