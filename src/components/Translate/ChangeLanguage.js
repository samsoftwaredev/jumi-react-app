import React from "react";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Translate from "./Translate";
import { useTranslation } from "react-i18next";
import { setLocalStorage } from "../../storage/localStorage";
import languages from "../../constants/languages/options";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const langIndex = languages.findIndex(
    ({ abbrv }) => abbrv === currentLanguage
  );

  const changeLanguage = (language) => {
    i18n
      .changeLanguage(language)
      .then(() => {
        // remember user language - storage value in local storage
        setLocalStorage("language", language);
      })
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
