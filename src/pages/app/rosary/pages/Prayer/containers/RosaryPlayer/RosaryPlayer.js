import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import AudioCard from "../../../../../../../components/AudioCard";
import { strToId } from "../../../../../../../helpers/transform";
import { getOrdinalNumbers } from "../../helpers/transform";
import RosaryModalButton from "../EditRosary";
import AudioBackground from "../../../../../../../components/AudioPlayer/AudioBackground";
import aveMaria from "../../../../audio/ave.mp3";
import { useRosaryContext } from "../../../../context/RosaryContext";

const RosaryPlayer = ({ language }) => {
  const {
    rosary,
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

  const nextPrayer = () => {
    // set prayerIndex
    const nextPrayerIndex = trackIndex + 1;
    const prayer = rosary.jumpToPrayer(nextPrayerIndex);
    // check if the prayer is defined
    if (prayer) {
      setTrackIndex(nextPrayerIndex);
      setTrack(prayer);
    }
  };

  const prevPrayer = () => {
    // set prayerIndex
    const prevPrayerIndex = trackIndex - 1;
    const prayer = rosary.jumpToPrayer(prevPrayerIndex);
    // check if the prayer is defined
    if (prayer) {
      setTrackIndex(prevPrayerIndex);
      setTrack(prayer);
    }
  };

  const getAudio = (track) => {
    if (track?.isMystery) {
      return track?.audioDescription[language];
    } else {
      return track?.audio ? track?.audio[language] : null;
    }
  };

  return (
    <>
      <AudioBackground
        audioSrc={aveMaria}
        isPlaying={isPlaying}
        audioLoop
        audioMute={audioMute}
      />
      <RosaryModalButton />
      <div className="mt-4">
        <AudioCard
          title={track?.mystery?.label}
          subTitle={getOrdinalNumbers(track?.mystery?.mysteryIndex)}
          audioTitle={
            track?.isHailMary
              ? `${track?.hailMaryIndex}. ${t(track?.label)}`
              : track?.label
          }
          audioArtist={track?.artist}
          audioDescription={track?.description}
          audioImage={track?.mystery?.image || track?.image}
          id={strToId(track?.label, trackIndex)}
          audioSrc={getAudio(track)}
          toPrevTrack={prevPrayer}
          toNextTrack={nextPrayer}
          audioMute={audioMute}
          setAudioMute={setAudioMute}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
};

RosaryPlayer.propTypes = {
  rosary: PropTypes.shape(),
  language: PropTypes.string,
};

export default RosaryPlayer;
