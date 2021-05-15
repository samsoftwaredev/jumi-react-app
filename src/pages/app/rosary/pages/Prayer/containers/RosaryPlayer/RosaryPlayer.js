import React, { useRef } from "react";
import PropTypes from "prop-types";
import AudioBackground from "../../../../../../../components/AudioPlayer/AudioBackground";
import aveMaria from "../../../../audio/ave.mp3";
import RosaryAudio from "../RosaryAudio";

const RosaryPlayer = ({ rosary }) => {
  const audioRef = useRef(new Audio(rosary.getAudio()));
  const audioBgRef = useRef(new Audio(aveMaria));

  return (
    <>
      <AudioBackground audioRef={audioBgRef} />
      <div className="mt-4">
        <RosaryAudio audioRef={audioRef} rosary={rosary} />
      </div>
    </>
  );
};

RosaryPlayer.propTypes = {
  rosary: PropTypes.shape(),
  language: PropTypes.string,
};

export default RosaryPlayer;
