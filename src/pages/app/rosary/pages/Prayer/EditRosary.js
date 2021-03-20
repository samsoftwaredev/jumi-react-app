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
} from "reactstrap";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLanguage from "../../../../../components/Translate/ChangeLanguage";
import { Checkbox } from "../../../../../components/Fields";
import { UserCard } from "../../../../../components/Users";

const EditRosary = ({
  rosary,
  onToggleAudioAutoplay,
  autoplayAudio,
  audioMute,
  onToggleAudioVolume,
}) => {
  const { i18n } = useTranslation();

  const [modal, setModal] = useState(false);
  // const [rosaryPrayers, setRosaryPrayers] = useState(rosary.getPrayersList());

  const onSortEnd = (e) => {
    // var newTodos = arrayMove(todos, e.oldIndex, e.newIndex )
    // setTodos(newTodos)
  };

  const toggle = () => setModal(!modal);

  const getSpeaker = () => {
    switch (i18n.language) {
      case "en":
        return <UserCard name="Dalia" text="United States" />;
      case "es":
        return <UserCard name="Belkys" text="República Dominicana" />;
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
        <ModalHeader toggle={toggle}>Rosary Settings</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={4}>Change Language:</Col>
            <Col md={8} className="d-flex justify-content-between">
              <UncontrolledButtonDropdown>
                <ChangeLanguage />
              </UncontrolledButtonDropdown>
              {getSpeaker()}
            </Col>
            <hr />
            {/* Audio Settings */}
            <Col md={4}>Audio:</Col>
            <Col md={8}>
              <FormGroup check>
                <Label check>
                  <Checkbox
                    checked={autoplayAudio}
                    onChange={onToggleAudioAutoplay}
                  />{" "}
                  <span>Autoplay Audio</span>
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Checkbox
                    checked={audioMute}
                    onChange={onToggleAudioVolume}
                  />{" "}
                  <span>Mute Audio</span>
                </Label>
              </FormGroup>
            </Col>
            <hr />
            {/* Rosary */}
            <Col md={4}>Mysteries:</Col>
            <Col md={8}></Col>
            {/* Rosary */}
            {/* <Col md={4}>Rosary Prayers:</Col>
            <Col md={8}>
              <SortableList items={rosaryPrayers} onSortEnd={onSortEnd} />
            </Col> */}
          </Row>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <Button color="light" onClick={toggle}>
            Reset
          </Button>
          <Button color="primary" onClick={toggle}>
            Save
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
};

export default EditRosary;
