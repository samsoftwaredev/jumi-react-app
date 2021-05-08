import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import AudioCard from "../../../../../../../components/AudioCard";
import { strToId } from "../../../../../../../helpers/transform";
import { getOrdinalNumbers } from "../../helpers/transform";

const RosaryPlayer = ({ rosary, language }) => {
  const { t } = useTranslation();
  const mystery = rosary.getMystery();
  rosary.setMystery(mystery);

  const [trackIndex, setTrackIndex] = useState(0);
  const [track, setTrack] = useState(rosary.getPrayersList()[trackIndex]);

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
  console.log(track);
  return (
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
        audioSrc={track.audio ? track.audio[language] : null}
        toPrevTrack={prevPrayer}
        toNextTrack={nextPrayer}
      />
    </div>
  );
};

RosaryPlayer.propTypes = {
  rosary: PropTypes.shape(),
  language: PropTypes.string,
};

export default RosaryPlayer;
