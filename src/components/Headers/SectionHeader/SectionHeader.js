import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({
  className = "text-center text-light m-5",
  title = "",
  description = "",
}) => (
  <div className={className}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

SectionHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SectionHeader;
