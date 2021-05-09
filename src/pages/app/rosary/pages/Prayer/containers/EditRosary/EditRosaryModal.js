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
  isAudioMute = false,
  currentListOfPrayers = listOfDefaultPrayers,
  save,
}) => {
  const { t } = useTranslation();

  const [mystery, setMystery] = useState(currentMystery);
  const [bgMusic, setBgMusic] = useState(isMusicEnable);
  const [mute, setMute] = useState(isAudioMute);
  const [listOfPrayers, setListOfPrayers] = useState(currentListOfPrayers);

  const onToggleAudioVolume = () => {
    setMute(!mute);
    save({ mute: !mute });
  };

  const onToggleBackgroundMusic = () => {
    setBgMusic(!bgMusic);
    save({ bgMusic: !bgMusic });
  };

  const onUpdateMystery = ({ value: name = "" } = { name: "" }) => {
    rosary.setMystery(rosary.getMysteryInfo(name));
    setMystery(rosary.getMystery());
    save({ mystery: rosary.getMystery() });
  };

  const updatePrayersList = (objList = listOfDefaultPrayers) => {
    setListOfPrayers(objList);
    save({
      beginningPrayers: objList[beginningPrayersKey],
      endMysteryPrayers: objList[endMysteryPrayersKey],
      endingPrayers: objList[endingPrayersKey],
    });
  };

  const onUpdatePrayers = (newList, key) => {
    updatePrayersList({ ...listOfPrayers, [key]: newList });
  };

  const onResetSettings = () => {
    setMute(false);
    setBgMusic(false);
    updatePrayersList();
    onUpdateMystery();
  };

  const onSaveSettings = () => {
    save({
      mystery,
      bgMusic,
      mute,
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
          audioMute={mute}
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
  isAudioMute: PropTypes.bool,
  currentListOfPrayers: PropTypes.shape(),
  save: PropTypes.func,
};

export default EditRosaryModal;
