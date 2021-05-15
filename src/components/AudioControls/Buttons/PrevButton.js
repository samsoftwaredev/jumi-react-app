import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrevButton = ({ onPrevClick, disablePrev = false }) => (
  <>
    <Button
      id="previous-track"
      className="prev btn-clear"
      aria-label="Previous"
      disabled={disablePrev}
      onClick={onPrevClick}
    >
      <FontAwesomeIcon icon={faBackward} />
    </Button>
    <UncontrolledTooltip placement="top" target="previous-track">
      Previous Track
    </UncontrolledTooltip>
  </>
);

export default PrevButton;
