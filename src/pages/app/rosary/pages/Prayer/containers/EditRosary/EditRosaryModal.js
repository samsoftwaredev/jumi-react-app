import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useTranslation } from "react-i18next";

import EditRosary from "./EditRosary";
import { useRosaryContext } from "../../../../context/RosaryContext";

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
    setListOfPrayers,
  } = useRosaryContext();

  const { t } = useTranslation();

  const onUpdateMystery = ({ value: name = "" } = { name: "" }) => {
    rosary.setMystery(rosary.getMysteryInfo(name));
    setCurrentMystery(rosary.getMystery());
  };

  const updatePrayersList = (objList = listOfPrayers) => {
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
