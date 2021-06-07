import React from "react";
import { Button } from "reactstrap";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrevButton = ({ onPrevClick, disablePrev = false }) => (
  <Button
    id="previous-track"
    className="prev btn-clear"
    aria-label="Previous"
    disabled={disablePrev}
    onClick={onPrevClick}
  >
    <FontAwesomeIcon icon={faBackward} />
  </Button>
);

export default PrevButton;
