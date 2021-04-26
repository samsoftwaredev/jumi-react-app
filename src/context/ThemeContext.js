import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import darkTheme from "../assets/themes/dark";
import lightTheme from "../assets/themes/light";

const themes = {
  dark: "dark",
  light: "light",
};

const applyTheme = (themeObj) => {
  const root = document.getElementsByTagName("html")[0];
  const arr = Object.keys(themeObj);
  const newArr = arr.map((key) => `${key}: ${themeObj[key]}`);
  root.style.cssText = newArr.join(";");
};

const ThemeContext = React.createContext({
  themes,
  currentTheme: themes.light,
  setLightTheme: () => {},
  setDarkTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const setTheme = (label, values) => {
    setCurrentTheme(label);
    applyTheme(values);
  };

  const setLightTheme = () => setTheme(themes.light, lightTheme);

  const setDarkTheme = () => setTheme(themes.dark, darkTheme);

  const store = {
    currentTheme,
    themes,
    setLightTheme,
    setDarkTheme,
  };

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

ThemeContext.propTypes = {
  children: PropTypes.node,
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;
