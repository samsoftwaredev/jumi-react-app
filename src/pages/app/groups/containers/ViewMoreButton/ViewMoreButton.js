import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { useHistory, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ViewMoreButton = ({ id, text }) => {
  const history = useHistory();
  let match = useRouteMatch();
  return (
    <Button
      size="sm"
      className="btn-pink d-flex justify-content-between align-items-center"
      onClick={() => history.push(`${match.path}/${id}`)}
    >
      {text}
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  );
};

ViewMoreButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ViewMoreButton;
