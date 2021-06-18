import React from "react";
import { UserCard } from "../../../../../../../components/Users";
import { UncontrolledButtonDropdown } from "reactstrap";
import ChangeLanguage from "../../../../../../../components/Translate/ChangeLanguage";
import { useTranslation } from "react-i18next";

const UpdateLanguage = () => {
  const { i18n } = useTranslation();

  const getSpeaker = () => {
    switch (i18n.language) {
      case "en":
        return <UserCard name="Dalia" text="Woman's Voice" />;
      case "es":
        return <UserCard name="Belkys" text="Voz de Mujer" />;
      default:
        return null;
    }
  };
  return (
    <div className="d-flex justify-content-between">
      <UncontrolledButtonDropdown>
        <ChangeLanguage />
      </UncontrolledButtonDropdown>
      {getSpeaker()}
    </div>
  );
};

export default UpdateLanguage;
