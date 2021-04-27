import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";
import { useTranslation } from "react-i18next";
import { EditRosaryModal } from "../EditRosary";
import { faChevronDown, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeginningView = ({
  onStartPrayer,
  rosary,
  currentMystery,
  isMusicEnable,
  isAutoPlayAudio,
  isAudioMute,
  save,
}) => {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <ButtonGroup className="mt-4 d-block">
        <Button color="primary" onClick={onStartPrayer}>
          <FontAwesomeIcon icon={faChevronDown} />
          &nbsp;{t("start.label")}
        </Button>
        <Button color="dark" onClick={toggle}>
          <FontAwesomeIcon icon={faCog} />
          &nbsp;
          {t("settings.label")}
        </Button>
      </ButtonGroup>
      <EditRosaryModal
        modal={modal}
        toggle={toggle}
        rosary={rosary}
        currentMystery={currentMystery}
        isMusicEnable={isMusicEnable}
        isAutoPlayAudio={isAutoPlayAudio}
        isAudioMute={isAudioMute}
        save={save}
      />
    </>
  );
};

BeginningView.propTypes = {
  currentMystery: PropTypes.shape().isRequired,
  onStartPrayer: PropTypes.func.isRequired,
};

export default BeginningView;
