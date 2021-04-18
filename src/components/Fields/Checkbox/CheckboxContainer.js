import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import Checkbox from ".";

const CheckboxContainer = ({ value, onChange, children }) => (
  <FormGroup check>
    <Label check>
      <Checkbox checked={value} onChange={onChange} />{" "}
      <span className="text-muted">{children}</span>
    </Label>
  </FormGroup>
);

CheckboxContainer.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool,
  children: PropTypes.element,
};

export default CheckboxContainer;
