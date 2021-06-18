import React from "react";
import { Col, Card, CardBody, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const GroupCard = ({
  image = "",
  eventName = "",
  institutionName = "",
  ages = "",
  online = false,
}) => {
  const { t } = useTranslation();
  return (
    <Col md={6} lg={4}>
      <Card className="clear-card">
        <img src={image} alt={eventName} />
        <CardBody>
          <CardTitle>{eventName}</CardTitle>
          <p>{institutionName}</p>
          <p>
            {t("age.label")} {ages}
          </p>
          <p>{online ? "Is Online" : "In Person"}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

GroupCard.propTypes = {
  image: PropTypes.string,
  eventName: PropTypes.string,
  institutionName: PropTypes.string,
  ages: PropTypes.string,
  online: PropTypes.bool,
};

export default GroupCard;
