import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextButton = ({ onNextClick, disableNext = false }) => (
  <>
    <Button
      id="next-track"
      className="next btn-clear"
      aria-label="Next"
      disabled={disableNext}
      onClick={onNextClick}
    >
      <FontAwesomeIcon icon={faForward} />
    </Button>
    <UncontrolledTooltip placement="top" target="next-track">
      Next Track
    </UncontrolledTooltip>
  </>
);

export default NextButton;
