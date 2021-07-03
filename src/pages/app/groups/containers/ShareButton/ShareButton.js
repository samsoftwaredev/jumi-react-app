import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ShareButton = ({ url }) => {
  return (
    <div style={{ position: "absolute", right: "10px", top: "10px" }}>
      <Button className="btn-circle" color="light" onClick={() => {}}>
        <FontAwesomeIcon icon={faShareAlt} />
      </Button>
    </div>
  );
};

ShareButton.propTypes = {};

export default ShareButton;
