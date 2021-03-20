import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserCard = ({ image, name, text }) => {
  return (
    <Card>
      <CardBody className="d-flex py-1 align-items-center">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <FontAwesomeIcon icon={faUser} className="btn-circle text-muted" />
        )}
        <div className="ml-4">
          <CardTitle className="mb-0">{name}</CardTitle>
          <CardSubtitle className="small text-muted">{text}</CardSubtitle>
        </div>
      </CardBody>
    </Card>
  );
};

UserCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
};
UserCard.defaultProps = {
  image: "",
  name: "",
  text: "",
};

export default UserCard;
