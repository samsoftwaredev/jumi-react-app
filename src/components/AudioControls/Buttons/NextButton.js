import React, { useState } from "react";
import { Button, Tooltip } from "reactstrap";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextButton = ({ onNextClick, disableNext = false }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
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
      <Tooltip
        isOpen={tooltipOpen}
        toggle={toggle}
        placement="top"
        target="next-track"
      >
        Next Track
      </Tooltip>
    </>
  );
};

export default NextButton;
