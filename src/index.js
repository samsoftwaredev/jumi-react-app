import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "moment-timezone";
import Main from "./pages/main";
import reportWebVitals from "./reportWebVitals";
import i18next from "i18next";
import es from "./constants/languages/es.json";
import en from "./constants/languages/en.json";
import { initReactI18next } from "react-i18next";
import ThemeContextProvider from "./context/ThemeContext";

i18next.use(initReactI18next).init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: "en", // 'en' | 'es'
  fallbackLng: "es",
  // Using simple hardcoded resources for simple example
  resources: {
    en,
    es,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your Main, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
