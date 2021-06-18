import React from "react";
import { Col, CardBody, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import { GroupCardStyle } from "./GroupCard.style";
import { useTranslation } from "react-i18next";
import { useHistory, useRouteMatch } from "react-router-dom";

const GroupCard = ({
  id = "",
  image = "",
  eventName = "",
  institutionName = "",
  ages = "",
  online = false,
  inPerson = false,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  let match = useRouteMatch();

  return (
    <Col md={6} lg={4} className="my-4 px-sm-0 px-md-3">
      <GroupCardStyle className="clear-card">
        {image ? (
          <img className="rounded" src={image} alt={eventName} />
        ) : (
          <div className="bg-light rounded" style={{ height: "300px" }}></div>
        )}
        <CardBody>
          <CardTitle>{eventName}</CardTitle>
          {/* <p>{institutionName}</p> */}
          <p>
            {t("age.label")} {ages}
          </p>
          <p>{online && "Is Online"}</p>
          <p>{inPerson && "in Person"}</p>
        </CardBody>
        <Button
          className="btn-pink"
          onClick={() => history.push(`${match.path}/${id}`)}
        >
          View More
        </Button>
      </GroupCardStyle>
    </Col>
  );
};

GroupCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  eventName: PropTypes.string,
  institutionName: PropTypes.string,
  ages: PropTypes.string,
  online: PropTypes.bool,
  inPerson: PropTypes.bool,
};

export default GroupCard;
