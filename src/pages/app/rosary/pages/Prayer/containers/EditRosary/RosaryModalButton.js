import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import { EditRosaryModal } from ".";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RosaryModalButton = () => {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="dark" onClick={toggle}>
        <FontAwesomeIcon icon={faCog} />
        &nbsp;
        {t("settings.label")}
      </Button>
      <EditRosaryModal modal={modal} toggle={toggle} />
    </>
  );
};

export default RosaryModalButton;
