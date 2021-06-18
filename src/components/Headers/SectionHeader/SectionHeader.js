import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ className = "", title = "", description = "" }) => (
  <div className={`text-center text-light m-5 squares-bg ${className}`}>
    <h2 className="font-weight-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

SectionHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SectionHeader;
