import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useTranslation } from "react-i18next";
import EditRosary from "./EditRosary";
import { useRosaryContext } from "../../../../context/RosaryContext";
import {
  beginningPrayersKey,
  endingPrayersKey,
  endMysteryPrayersKey,
} from "../../../../constants/prayers";

const EditRosaryModal = ({ modal, toggle, rosary }) => {
  const {
    currentMystery,
    setCurrentMystery,
    backgroundMusic,
    setBackgroundMusic,
    audioMute,
    setAudioMute,
    toggleAudioMute,
    toggleBackgroundMusic,
    listOfPrayers,
    updateListOfPrayers,
    setIsPlaying,
  } = useRosaryContext();

  const { t } = useTranslation();

  const onUpdateMystery = ({ value: name = "" } = { name: "" }) => {
    rosary.setMystery(name);
    setCurrentMystery(rosary.getMysteryInfo(name));
  };

  const onUpdatePrayers = (newList, key) => {
    const listOfPrayersCopy = { ...listOfPrayers, [key]: newList };
    updateListOfPrayers(listOfPrayersCopy);
    // update the rosary prayers base on what the user selected
    rosary.setPrayersList(
      listOfPrayersCopy[beginningPrayersKey],
      listOfPrayersCopy[endMysteryPrayersKey],
      listOfPrayersCopy[endingPrayersKey]
    );
    // // don't start rosary when prayers list is updated
    // setTimeout(() => {
    //   setIsPlaying(false);
    // }, 100);
  };

  const onResetSettings = () => {
    setAudioMute(false);
    setBackgroundMusic(false);
    updateListOfPrayers();
    onUpdateMystery();
  };

  useEffect(() => {
    // set a mystery as default
    setCurrentMystery(rosary.getMystery());
  }, []);

  return (
    <Modal isOpen={modal} size="lg" toggle={toggle}>
      <ModalHeader toggle={toggle}>{t("settings.label")}</ModalHeader>
      <ModalBody>
        <EditRosary
          rosary={rosary}
          audioMute={audioMute}
          onToggleAudioVolume={toggleAudioMute}
          backgroundMusic={backgroundMusic}
          onToggleBackgroundMusic={toggleBackgroundMusic}
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
        <Button color="primary" onClick={toggle}>
          {t("save.label")}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

EditRosaryModal.propTypes = {
  rosary: PropTypes.shape(),
  modal: PropTypes.bool,
  toggle: PropTypes.func,
};

export default EditRosaryModal;
