import React, { useState } from "react";
import PropTypes from "prop-types";
import AudioCard from "../../../../../../../components/AudioCard";
import { strToId } from "../../../../../../../helpers/transform";

const RosaryPlayer = ({ rosary, language }) => {
  const mystery = rosary.getMystery();
  rosary.setMystery(mystery);

  const [trackIndex, setTrackIndex] = useState(0);
  const [track, setTrack] = useState(rosary.getPrayersList()[trackIndex]);

  const nextPrayer = () => {
    console.log("next");
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

  return (
    <div className="mt-4">
      <AudioCard
        title={track.label}
        artist={track.artist}
        image={track.image}
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
