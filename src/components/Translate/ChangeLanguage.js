import React from "react";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Translate from "./Translate";
import { useTranslation } from "react-i18next";

const ChangeLanguage = ({ props }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const languages = [
    {
      label: "Español",
      abbrv: "es",
    },
    {
      label: "English",
      abbrv: "en",
    },
  ];

  const langIndex = languages.findIndex(
    ({ abbrv }) => abbrv === currentLanguage
  );

  const changeLanguage = (language) => {
    i18n
      .changeLanguage(language)
      .catch(console.error("Unable to change language"));
  };

  return (
    <>
      <DropdownToggle nav caret>
        {languages[langIndex]?.label || <Translate text="language_label" />}
      </DropdownToggle>
      <DropdownMenu right>
        {languages.map(({ abbrv, label }) => (
          <DropdownItem
            active={abbrv === currentLanguage}
            key={abbrv}
            onClick={() => changeLanguage(abbrv)}
          >
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </>
  );
};

export default ChangeLanguage;
