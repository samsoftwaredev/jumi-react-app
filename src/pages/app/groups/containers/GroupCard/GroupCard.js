import React from "react";
import { Col } from "reactstrap";
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
      <div className="card">
        <div style={{ maxWidth: "200px", minHeight: "200px" }}>
          <img className="rounded img-fluid" src={image} alt={eventName} />
        </div>
        <div>
          <h5>{eventName}</h5>
          <p>{institutionName}</p>
          <p>
            {t("age.label")} {ages}
          </p>
          <p>{online ? "Is Online" : "In Person"}</p>
        </div>
      </div>
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
