import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import AudioCard from "../../../../../../../components/AudioCard";
import { strToId } from "../../../../../../../helpers/transform";
import { getOrdinalNumbers } from "../../helpers/transform";
import RosaryModalButton from "../EditRosary";

const RosaryPlayer = ({ rosary, language }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { t } = useTranslation();
  const mystery = rosary.getMystery();
  rosary.setMystery(mystery);

  const [trackIndex, setTrackIndex] = useState(0);
  const [track, setTrack] = useState(rosary.getPrayersList()[trackIndex]);
  const [currentMystery, setCurrentMystery] = useState(mystery);
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [audioMute, setAudioMute] = useState(false);

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
    if (track.isMystery) {
      return track.audioDescription[language];
    } else {
      return track.audio ? track.audio[language] : null;
    }
  };

  const onSave = (options) => {
    // when the user click the save button
    // update all the parameters

    const {
      mystery = currentMystery,
      bgMusic = backgroundMusic,
      mute = audioMute,
      beginningPrayers,
      endMysteryPrayers,
      endingPrayers,
    } = options;

    setCurrentMystery(mystery);
    setBackgroundMusic(bgMusic);
    setAudioMute(mute);
    rosary.setPrayersList(beginningPrayers, endMysteryPrayers, endingPrayers);
    // setListOfPrayers(rosary.getPrayersList());
  };

  return (
    <>
      <RosaryModalButton
        rosary={rosary}
        currentMystery={currentMystery}
        isMusicEnable={backgroundMusic}
        isAudioMute={audioMute}
        save={onSave}
      />
      <div className="mt-4">
        <AudioCard
          title={track.mystery?.label}
          subTitle={getOrdinalNumbers(track.mystery?.mysteryIndex)}
          audioTitle={
            track.isHailMary
              ? `${track.hailMaryIndex}. ${t(track.label)}`
              : track.label
          }
          audioArtist={track.artist}
          audioDescription={track.description}
          audioImage={track.mystery?.image || track.image}
          id={strToId(track.label, trackIndex)}
          audioSrc={getAudio(track)}
          toPrevTrack={prevPrayer}
          toNextTrack={nextPrayer}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioMute={audioMute}
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
