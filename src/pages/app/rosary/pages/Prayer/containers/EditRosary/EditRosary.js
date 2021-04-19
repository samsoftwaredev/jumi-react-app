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
  defaultEndOfMysteryPrayers,
  defaultBeginningPrayers,
} from "../../../../constants/prayers";
import { SideBySide } from "../../../../../../../components/Layouts";
import UpdateLangauge from "../UpdateLangauge";
import { ChangeMystery } from "../SelectMystery";
import { CheckboxContainer } from "../../../../../../../components/Fields/Checkbox";
import PrayerEditList from "../PrayerEditList";

const EditRosary = ({
  rosary,
  onToggleAudioAutoplay,
  autoPlayAudio,
  audioMute,
  onToggleAudioVolume,
  onUpdateMystery,
  currentMystery,
  onResetSettings,
  backgroundMusic,
  onToggleBackgroundMusic,
  onDefaultPrayersUpdate,
}) => {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
                value={backgroundMusic}
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
                currentMystery={currentMystery}
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
                defaultList={Object.values(defaultBeginningPrayers) || []}
                onChange={(newList) =>
                  onDefaultPrayersUpdate(newList, defaultBeginningPrayers)
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
                defaultList={Object.values(defaultEndOfMysteryPrayers) || []}
                onChange={(newList) =>
                  onDefaultPrayersUpdate(newList, defaultEndOfMysteryPrayers)
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
                defaultList={Object.values(defaultEndingPrayers) || []}
                onChange={(newList) =>
                  onDefaultPrayersUpdate(newList, defaultEndingPrayers)
                }
              />
            </SideBySide>
          </Row>
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
    </div>
  );
};

EditRosary.propTypes = {
  rosary: PropTypes.shape(),
  onToggleAudioAutoplay: PropTypes.func,
  autoPlayAudio: PropTypes.bool,
  audioMute: PropTypes.bool,
  onToggleAudioVolume: PropTypes.func,
  onUpdateMystery: PropTypes.func,
  currentMystery: PropTypes.shape(),
  onResetSettings: PropTypes.func,
  backgroundMusic: PropTypes.bool,
  onToggleBackgroundMusic: PropTypes.func,
  onDefaultPrayersUpdate: PropTypes.func,
};

export default EditRosary;
