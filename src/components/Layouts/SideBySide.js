import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";

const SideBySide = ({ children, title = "", description = "" }) => (
  <>
    <Col md={4} className="my-3 font-weight-bold">
      <div>{title}</div>
      <small className="text-muted">{description}</small>
    </Col>
    <Col md={8} className="my-3">
      {children}
    </Col>
  </>
);

SideBySide.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default SideBySide;
