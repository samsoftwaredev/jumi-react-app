import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  UncontrolledButtonDropdown,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLanguage from "../../../../../components/Translate/ChangeLanguage";
import { Checkbox } from "../../../../../components/Fields";
import { UserCard } from "../../../../../components/Users";
import { mysteries, rosaryMysteries } from "../../constants/mysteries";

const EditRosary = ({
  rosary,
  onToggleAudioAutoplay,
  autoplayAudio,
  audioMute,
  onToggleAudioVolume,
  onUpdateMystery,
  currentMystery,
  onResetSettings,
  backgroundMusic,
  onToggleBackgroundMusic,
}) => {
  const { i18n, t } = useTranslation();

  const [modal, setModal] = useState(false);
  // const [rosaryPrayers, setRosaryPrayers] = useState(rosary.getPrayersList());

  const toggle = () => setModal(!modal);

  const getSpeaker = () => {
    switch (i18n.language) {
      case "en":
        return <UserCard name="Dalia" text="Woman's Voice" />;
      case "es":
        return <UserCard name="Belkys" text="Voz de Mujer" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Button className="my-2" color="light" onClick={toggle}>
        <FontAwesomeIcon icon={faCog} />
      </Button>
      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalHeader toggle={toggle}>{t("settings.label")}</ModalHeader>
        <ModalBody>
          <Row className="align-items-center">
            <Col md={4} className="my-3 font-weight-bold">
              Language:
            </Col>
            <Col md={8} className="d-flex justify-content-between">
              <UncontrolledButtonDropdown>
                <ChangeLanguage />
              </UncontrolledButtonDropdown>
              {getSpeaker()}
            </Col>
            <hr />
            {/* Audio Settings */}
            <Col md={4} className="my-3 font-weight-bold">
              Audio:
            </Col>
            <Col md={8}>
              <FormGroup check>
                <Label check>
                  <Checkbox
                    checked={autoplayAudio}
                    onChange={onToggleAudioAutoplay}
                  />{" "}
                  <span className="text-muted">Autoplay Audio</span>
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Checkbox
                    checked={audioMute}
                    onChange={onToggleAudioVolume}
                  />{" "}
                  <span className="text-muted">Mute Audio</span>
                </Label>
              </FormGroup>
            </Col>
            <hr />
            <Col md={4} className="my-3 font-weight-bold">
              Music:
            </Col>
            <Col md={8}>
              <FormGroup check>
                <Label check>
                  <Checkbox
                    checked={backgroundMusic}
                    onChange={onToggleBackgroundMusic}
                  />{" "}
                  <span className="text-muted">
                    Background Music - Ave Maria
                  </span>
                </Label>
              </FormGroup>
            </Col>
            <hr />
            {/* user can select the mystery the will like to pray */}
            <Col md={4} className="my-3 font-weight-bold">
              Mystery:
            </Col>
            <Col md={8}>
              <FormGroup>
                <Input
                  onChange={(e) => onUpdateMystery(e.target.value)}
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={currentMystery?.id}
                >
                  {mysteries.map((name) => (
                    <option value={name}>
                      {t(rosaryMysteries[name].label)}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            {/* Rosary, organize the prayers */}
            {/* <Col md={4} className="my-3 font-weight-bold">Rosary Prayers:</Col>
            <Col md={8}>
              <SortableList items={rosaryPrayers} onSortEnd={onSortEnd} />
            </Col> */}
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
  autoplayAudio: PropTypes.bool,
  audioMute: PropTypes.bool,
  onToggleAudioVolume: PropTypes.func,
  onUpdateMystery: PropTypes.func,
  currentMystery: PropTypes.shape(),
  onResetSettings: PropTypes.func,
  backgroundMusic: PropTypes.bool,
  onToggleBackgroundMusic: PropTypes.func,
};

export default EditRosary;
