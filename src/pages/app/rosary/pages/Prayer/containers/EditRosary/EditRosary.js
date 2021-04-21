import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  defaultEndingPrayers,
  defaultEndMysteryPrayers,
  defaultBeginningPrayers,
  beginningPrayersKey,
  endMysteryPrayersKey,
  endingPrayersKey,
} from "../../../../constants/prayers";
import { SideBySide } from "../../../../../../../components/Layouts";
import UpdateLangauge from "../UpdateLangauge";
import { ChangeMystery } from "../SelectMystery";
import { CheckboxContainer } from "../../../../../../../components/Fields/Checkbox";
import PrayerEditList from "../PrayerEditList";

const listOfDefaultPrayers = {
  [beginningPrayersKey]: defaultBeginningPrayers,
  [endMysteryPrayersKey]: defaultEndMysteryPrayers,
  [endingPrayersKey]: defaultEndingPrayers,
};

const EditRosary = ({
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

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const manipulateList = (obj) => Object.values(obj);

  const onToggleAudioAutoplay = (val = autoPlayAudio) => {
    setAutoplayAudio(val !== undefined ? val : !val);
  };

  const onToggleAudioVolume = (val = audioMute) => {
    setAudioMute(val !== undefined ? val : !val);
  };

  const onToggleBackgroundMusic = (val = bgMusic) => {
    setBgMusic(val !== undefined ? val : !val);
  };

  const onUpdateMystery = ({ value: name = "" } = { name: "" }) => {
    rosary.setMystery(name);
    setMystery(rosary.getMystery());
  };

  const updatePrayersList = (objList = listOfDefaultPrayers) => {
    setListOfPrayers(objList);
  };

  const onUpdatePrayers = (newList, key) => {
    updatePrayersList({ ...listOfPrayers, [key]: newList });
  };

  const onResetSettings = () => {
    onToggleAudioAutoplay(true);
    onToggleAudioVolume(false);
    onToggleBackgroundMusic(false);
    updatePrayersList();
    onUpdateMystery();
  };

  const onSaveSettings = () => {
    save({
      mystery: mystery,
      music: bgMusic,
      mute: audioMute,
      play: audioMute,
      beginningPrayers: listOfPrayers[beginningPrayersKey],
      endMysteryPrayers: listOfPrayers[endMysteryPrayersKey],
      endingPrayers: listOfPrayers[endingPrayersKey],
    });
    // close modal
    toggle();
  };

  return (
    <div>
      <Button color="dark" size="sm" className="m-3" onClick={toggle}>
        <FontAwesomeIcon icon={faCog} />
      </Button>
      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalHeader toggle={toggle}>{t("settings.label")}</ModalHeader>
        <ModalBody>
          <Row className="align-items-center">
            <SideBySide
              title="Language:"
              description="You can change the language of the rosary. The audio will also update depending on the language you select."
            >
              <UpdateLangauge />
            </SideBySide>
            <hr />
            {/* Audio Settings */}
            <SideBySide
              title="Audio:"
              description="You can mute the audio if prefer to read the prayers."
            >
              <>
                <CheckboxContainer
                  value={autoPlayAudio}
                  onChange={onToggleAudioAutoplay}
                >
                  Autoplay Audio
                </CheckboxContainer>
                <CheckboxContainer
                  value={audioMute}
                  onChange={onToggleAudioVolume}
                >
                  Mute Audio
                </CheckboxContainer>
              </>
            </SideBySide>
            <hr />
            <SideBySide
              title="Music:"
              description="You can add background music while you pray the rosary. Once you start the rosary the music will autoplay."
            >
              <CheckboxContainer
                value={bgMusic}
                onChange={onToggleBackgroundMusic}
              >
                Background Music
              </CheckboxContainer>
            </SideBySide>
            <hr />
            {/* user can select the mystery the will like to pray */}
            <SideBySide
              title="Mystery:"
              description="Select the mystery you would like meditate today."
            >
              <ChangeMystery
                mystery={mystery}
                onUpdateMystery={onUpdateMystery}
              />
            </SideBySide>
            <hr />
            {/* Rosary, starting prayers that user can select */}
            <SideBySide
              title="Beginnig prayers:"
              description="List of prayers that you would like to pray at the beginning of the rosary."
            >
              <PrayerEditList
                defaultList={manipulateList(listOfPrayers[beginningPrayersKey])}
                onChange={(newList) =>
                  onUpdatePrayers(newList, beginningPrayersKey)
                }
              />
            </SideBySide>
            <hr />
            {/* Rosary, last prayers that user can select */}
            <SideBySide
              title="Prayers after each mystery:"
              description="List of prayers that you would like to pray at the end of each of the mysteries."
            >
              <PrayerEditList
                defaultList={manipulateList(
                  listOfPrayers[endMysteryPrayersKey]
                )}
                onChange={(newList) =>
                  onUpdatePrayers(newList, endMysteryPrayersKey)
                }
              />
            </SideBySide>
            <hr />
            {/* Rosary, last prayers that user can select */}
            <SideBySide
              title="Ending prayers:"
              description="List of prayers that you would like to pray at the end of the rosary."
            >
              <PrayerEditList
                defaultList={manipulateList(listOfPrayers[endingPrayersKey])}
                onChange={(newList) =>
                  onUpdatePrayers(newList, endingPrayersKey)
                }
              />
            </SideBySide>
          </Row>
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
    </div>
  );
};

EditRosary.propTypes = {
  rosary: PropTypes.shape(),
  currentMystery: PropTypes.shape(),
  isMusicEnable: PropTypes.bool,
  isAutoPlayAudio: PropTypes.bool,
  isAudioMute: PropTypes.bool,
  currentListOfPrayers: PropTypes.shape(),
  save: PropTypes.func,
};

export default EditRosary;
