import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";

const SelectableList = (props) => {
  return <Select {...props} />;
};

SelectableList.propTypes = {
  options: PropTypes.arrayOf(),
  onChange: PropTypes.func,
  value: PropTypes.shape(),
};

export default SelectableList;
