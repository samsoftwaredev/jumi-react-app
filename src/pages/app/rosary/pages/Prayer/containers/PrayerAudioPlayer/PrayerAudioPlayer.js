import React from "react";
import PropTypes from "prop-types";
import AudioPlayer from "../../../../../../../components/AudioPlayer";

const PrayerAudioPlayer = ({
  prayer,
  nextPrayer,
  language,
  autoPlayAudio,
  currentPrayerIndex,
  index,
  audioMute,
  setAudioMute,
}) => {
  const audio = prayer?.audio ? prayer?.audio[language] : null;
  const isCurrentPrayer = currentPrayerIndex === index;
  return (
    <div className="text-right mb-5">
      <AudioPlayer
        audioSrc={audio}
        autoPlay={autoPlayAudio && isCurrentPrayer}
        audioEnded={() => nextPrayer(index)}
        audioMute={audioMute}
        onToggleAudioVolume={() => setAudioMute(!audioMute)}
      />
    </div>
  );
};

PrayerAudioPlayer.propTypes = {
  prayer: PropTypes.shape(),
  nextPrayer: PropTypes.func,
  language: PropTypes.string,
  autoPlayAudio: PropTypes.bool,
  currentPrayerIndex: PropTypes.number,
  index: PropTypes.number,
  audioMute: PropTypes.bool,
  setAudioMute: PropTypes.func,
};

export default PrayerAudioPlayer;
