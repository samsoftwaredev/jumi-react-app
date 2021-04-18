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
  defaultStartingPrayers,
  prayers,
} from "../../../constants/prayers";
import SortableAddList from "../../../../../../components/SortableAddList/SortableAddList";
import SideBySide from "../../../../../../components/Layouts";
import UpdateLangauge from "./UpdateLangauge";
import { ChangeMystery } from "./SelectMystery";
import { CheckboxContainer } from "../../../../../../components/Fields/Checkbox";

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
}) => {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const getPrayers = () => {
    return Object.values(prayers).map((p) => ({
      label: t(p.label),
      value: p.label,
    }));
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
            <SideBySide title="Language:">
              <UpdateLangauge />
            </SideBySide>
            <hr />
            {/* Audio Settings */}
            <SideBySide title="Audio:">
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
            <SideBySide title="Music:">
              <CheckboxContainer
                value={backgroundMusic}
                onChange={onToggleBackgroundMusic}
              >
                Background Music
              </CheckboxContainer>
            </SideBySide>
            <hr />
            {/* user can select the mystery the will like to pray */}
            <SideBySide title="Mystery:">
              <ChangeMystery
                currentMystery={currentMystery}
                onUpdateMystery={onUpdateMystery}
              />
            </SideBySide>
            <hr />
            {/* Rosary, starting prayers that user can select */}
            <SideBySide title="Beginnig prayers:">
              <SortableAddList
                placeholder="Add prayer..."
                defaultList={Object.values(defaultStartingPrayers)}
                onRemove={() => {}}
                onUpdate={() => {}}
                onSelect={() => {}}
                list={getPrayers()}
              />
            </SideBySide>
            <hr />
            {/* Rosary, last prayers that user can select */}
            <SideBySide title="Prayers after each mystery:">
              <SortableAddList
                placeholder="Add prayer..."
                defaultList={Object.values(defaultEndOfMysteryPrayers)}
                onRemove={() => {}}
                onUpdate={() => {}}
                onSelect={() => {}}
                list={getPrayers()}
              />
            </SideBySide>
            <hr />
            {/* Rosary, last prayers that user can select */}
            <SideBySide title="Ending prayers:">
              <SortableAddList
                defaultList={Object.values(defaultEndingPrayers)}
                placeholder="Add prayer..."
                onRemove={() => {}}
                onUpdate={() => {}}
                onSelect={() => {}}
                list={getPrayers()}
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
};

export default EditRosary;
