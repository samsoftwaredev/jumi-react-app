import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useTranslation } from "react-i18next";
import {
  defaultEndingPrayers,
  defaultEndMysteryPrayers,
  defaultBeginningPrayers,
  beginningPrayersKey,
  endMysteryPrayersKey,
  endingPrayersKey,
} from "../../../../constants/prayers";
import EditRosary from "./EditRosary";

const listOfDefaultPrayers = {
  [beginningPrayersKey]: defaultBeginningPrayers,
  [endMysteryPrayersKey]: defaultEndMysteryPrayers,
  [endingPrayersKey]: defaultEndingPrayers,
};

const EditRosaryModal = ({
  modal,
  toggle,
  rosary,
  currentMystery = {},
  isMusicEnable = false,
  isAutoPlayAudio = true,
  isAudioMute = false,
  currentListOfPrayers = listOfDefaultPrayers,
  save,
}) => {
  const { t } = useTranslation();

  const [mystery, setMystery] = useState(currentMystery);
  const [bgMusic, setBgMusic] = useState(isMusicEnable);
  const [autoPlayAudio, setAutoplayAudio] = useState(isAutoPlayAudio);
  const [audioMute, setAudioMute] = useState(isAudioMute);
  const [listOfPrayers, setListOfPrayers] = useState(currentListOfPrayers);

  const onToggleAudioAutoplay = () => {
    setAutoplayAudio(!autoPlayAudio);
  };

  const onToggleAudioVolume = () => {
    setAudioMute(!audioMute);
  };

  const onToggleBackgroundMusic = () => {
    setBgMusic(!bgMusic);
  };

  const onUpdateMystery = ({ value: name = "" } = { name: "" }) => {
    rosary.setMystery(rosary.getMysteryInfo(name));
    setMystery(rosary.getMystery());
  };

  const updatePrayersList = (objList = listOfDefaultPrayers) => {
    setListOfPrayers(objList);
  };

  const onUpdatePrayers = (newList, key) => {
    updatePrayersList({ ...listOfPrayers, [key]: newList });
  };

  const onResetSettings = () => {
    setAutoplayAudio(true);
    setAudioMute(false);
    setBgMusic(false);
    updatePrayersList();
    onUpdateMystery();
  };

  const onSaveSettings = () => {
    save({
      mystery,
      bgMusic,
      audioMute,
      autoPlayAudio,
      beginningPrayers: listOfPrayers[beginningPrayersKey],
      endMysteryPrayers: listOfPrayers[endMysteryPrayersKey],
      endingPrayers: listOfPrayers[endingPrayersKey],
    });
    // close modal
    toggle();
  };

  return (
    <Modal isOpen={modal} size="lg" toggle={toggle}>
      <ModalHeader toggle={toggle}>{t("settings.label")}</ModalHeader>
      <ModalBody>
        <EditRosary
          autoPlayAudio={autoPlayAudio}
          onToggleAudioAutoplay={onToggleAudioAutoplay}
          audioMute={audioMute}
          onToggleAudioVolume={onToggleAudioVolume}
          bgMusic={bgMusic}
          onToggleBackgroundMusic={onToggleBackgroundMusic}
          mystery={mystery}
          onUpdateMystery={onUpdateMystery}
          listOfPrayers={listOfPrayers}
          onUpdatePrayers={onUpdatePrayers}
        />
      </ModalBody>
      <ModalFooter className="d-flex justify-content-between">
        <Button color="light" onClick={onResetSettings}>
          {t("reset.label")}
        </Button>
        <Button color="primary" onClick={onSaveSettings}>
          {t("save.label")}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

EditRosaryModal.propTypes = {
  rosary: PropTypes.shape(),
  currentMystery: PropTypes.shape(),
  isMusicEnable: PropTypes.bool,
  isAutoPlayAudio: PropTypes.bool,
  isAudioMute: PropTypes.bool,
  currentListOfPrayers: PropTypes.shape(),
  save: PropTypes.func,
};

export default EditRosaryModal;
