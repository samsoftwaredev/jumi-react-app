import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, UncontrolledTooltip } from "reactstrap";
import { EditRosaryModal } from ".";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const RosaryModalButton = ({ rosary }) => {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button
        id="rosary-settings"
        color="light"
        className="btn-clear"
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faCogs} />
      </Button>
      <UncontrolledTooltip placement="top" target="rosary-settings">
        {t("settings.label")}
      </UncontrolledTooltip>
      <EditRosaryModal modal={modal} toggle={toggle} rosary={rosary} />
    </>
  );
};

export default RosaryModalButton;
