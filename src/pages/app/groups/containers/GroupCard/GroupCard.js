import React from "react";
import { Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const GroupCard = ({
  image = "",
  eventName = "",
  institutionName = "",
  ages = "",
  online = false,
  inPerson = false,
}) => {
  const { t } = useTranslation();
  return (
    <Col md={6} lg={4} className="my-4">
      <Card className="clear-card" style={{ height: "550px" }}>
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
        <Button className="btn-pink">View More</Button>
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
  inPerson: PropTypes.bool,
};

export default GroupCard;
