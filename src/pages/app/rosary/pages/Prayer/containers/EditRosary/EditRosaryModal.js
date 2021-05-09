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
import { useRosaryContext } from "../../../../context/RosaryContext";

const listOfDefaultPrayers = {
  [beginningPrayersKey]: defaultBeginningPrayers,
  [endMysteryPrayersKey]: defaultEndMysteryPrayers,
  [endingPrayersKey]: defaultEndingPrayers,
};

const EditRosaryModal = ({
  modal,
  toggle,
  currentListOfPrayers = listOfDefaultPrayers,
}) => {
  const {
    rosary,
    currentMystery,
    setCurrentMystery,
    backgroundMusic,
    setBackgroundMusic,
    audioMute,
    setAudioMute,
  } = useRosaryContext();

  const { t } = useTranslation();

  const [listOfPrayers, setListOfPrayers] = useState(currentListOfPrayers);

  const onToggleAudioVolume = () => {
    setAudioMute(!audioMute);
  };

  const onToggleBackgroundMusic = () => {
    setBackgroundMusic(!backgroundMusic);
  };

  const onUpdateMystery = ({ value: name = "" } = { name: "" }) => {
    rosary.setMystery(rosary.getMysteryInfo(name));
    setCurrentMystery(rosary.getMystery());
  };

  const updatePrayersList = (objList = listOfDefaultPrayers) => {
    setListOfPrayers(objList);
  };

  const onUpdatePrayers = (newList, key) => {
    updatePrayersList({ ...listOfPrayers, [key]: newList });
  };

  const onResetSettings = () => {
    setAudioMute(false);
    setBackgroundMusic(false);
    updatePrayersList();
    onUpdateMystery();
  };

  // const onSave = (options) => {
  //   // when the user click the save button
  //   // update all the parameters

  //   const {
  //     mystery = currentMystery,
  //     backgroundMusic = backgroundMusic,
  //     mute = audioMute,
  //     beginningPrayers,
  //     endMysteryPrayers,
  //     endingPrayers,
  //   } = options;

  //   setCurrentMystery(mystery);
  //   setBackgroundMusic(backgroundMusic);
  //   setAudioMute(mute);
  //   rosary.setPrayersList(beginningPrayers, endMysteryPrayers, endingPrayers);
  //   setTrack(rosary.getPrayersList()[trackIndex]);
  // };

  return (
    <Modal isOpen={modal} size="lg" toggle={toggle}>
      <ModalHeader toggle={toggle}>{t("settings.label")}</ModalHeader>
      <ModalBody>
        <EditRosary
          audioMute={audioMute}
          onToggleAudioVolume={onToggleAudioVolume}
          backgroundMusic={backgroundMusic}
          onToggleBackgroundMusic={onToggleBackgroundMusic}
          currentMystery={currentMystery}
          onUpdateMystery={onUpdateMystery}
          listOfPrayers={listOfPrayers}
          onUpdatePrayers={onUpdatePrayers}
        />
      </ModalBody>
      <ModalFooter className="d-flex justify-content-between">
        <Button color="light" onClick={onResetSettings}>
          {t("reset.label")}
        </Button>
        <Button color="primary" onClick={() => {}}>
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
  isAudioMute: PropTypes.bool,
  currentListOfPrayers: PropTypes.shape(),
  save: PropTypes.func,
};

export default EditRosaryModal;
