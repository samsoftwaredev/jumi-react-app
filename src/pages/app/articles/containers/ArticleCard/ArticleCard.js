import React from "react";
import { Col, CardBody, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
import { ArticleCardStyle } from "./ArticleCard.style";
import { useTranslation } from "react-i18next";
import { ShareButton, ViewMoreButton } from "../../../../../components";

const ArticleCard = ({ id = "", description = "", image = "", title = "" }) => {
  const { t } = useTranslation();

  return (
    <Col md={6} lg={4} className="my-4 px-sm-0 px-md-3">
      <ArticleCardStyle className="clear-card">
        {image ? (
          <img className="rounded" src={image} alt={title} />
        ) : (
          <div className="bg-light rounded" style={{ height: "200px" }}></div>
        )}
        <CardBody>
          <ShareButton />
          <CardTitle>{title}</CardTitle>
          <CardTitle>{description}</CardTitle>
        </CardBody>
        <ViewMoreButton text={t("viewMore.label")} id={id} />
      </ArticleCardStyle>
    </Col>
  );
};

ArticleCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  institutionName: PropTypes.string,
  ages: PropTypes.string,
  online: PropTypes.bool,
  inPerson: PropTypes.bool,
};

export default ArticleCard;
