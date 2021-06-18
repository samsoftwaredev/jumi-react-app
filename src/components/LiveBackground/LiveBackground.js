import React from "react";
import PropTypes from "prop-types";
import { LiveBackgroundStyle, ItemStyle } from "./LiveBackgroundStyle";

const LiveBackground = ({ children }) => {
  return (
    <LiveBackgroundStyle>
      <ItemStyle />
      <ItemStyle />
      <ItemStyle />
      <ItemStyle />
      <ItemStyle />
      {children}
    </LiveBackgroundStyle>
  );
};

LiveBackground.propTypes = {
  children: PropTypes.element,
};

export default LiveBackground;
