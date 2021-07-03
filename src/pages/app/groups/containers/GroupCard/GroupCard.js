import React from "react";
import { Col, CardBody, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
import { GroupCardStyle } from "./GroupCard.style";
import { useTranslation } from "react-i18next";
import ShareButton from "../ShareButton";
import ViewMoreButton from "../ViewMoreButton";

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

  return (
    <Col md={6} lg={4} className="my-4 px-sm-0 px-md-3">
      <GroupCardStyle className="clear-card">
        {image ? (
          <img className="rounded" src={image} alt={eventName} />
        ) : (
          <div className="bg-light rounded" style={{ height: "200px" }}></div>
        )}
        <CardBody>
          <ShareButton />
          <CardTitle>{eventName}</CardTitle>
          {/* <p>{institutionName}</p> */}
          <p>
            {t("age.label")} {ages}
          </p>
          <p>{online && "Is Online"}</p>
          <p>{inPerson && "in Person"}</p>
        </CardBody>
        <ViewMoreButton text={t("viewMore.label")} id={id} />
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
