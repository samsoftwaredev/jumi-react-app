import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";

const SideBySide = ({ children, title = "" }) => {
  return (
    <>
      <Col md={4} className="my-3 font-weight-bold">
        {title}
      </Col>
      <Col md={8} className="my-3">
        {children}
      </Col>
    </>
  );
};

SideBySide.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default SideBySide;
