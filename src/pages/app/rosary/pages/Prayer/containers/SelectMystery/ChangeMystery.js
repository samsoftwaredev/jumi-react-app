import React from "react";
import PropTypes from "prop-types";
import SelectableList from "../../../../../../../components/List";
import { mysteries, rosaryMysteries } from "../../../../constants/mysteries";
import { useTranslation } from "react-i18next";

const ChangeMystery = ({ currentMystery, onUpdateMystery }) => {
  const { t } = useTranslation();

  const initValue = {
    label: t(currentMystery.label),
    value: currentMystery.id,
  };

  const getMysteries = () => {
    return mysteries.map((name) => ({
      label: t(rosaryMysteries[name].label),
      value: rosaryMysteries[name].id,
    }));
  };

  return (
    <SelectableList
      value={initValue}
      onChange={onUpdateMystery}
      options={getMysteries()}
    />
  );
};

ChangeMystery.propTypes = {
  onUpdateMystery: PropTypes.func,
  currentMystery: PropTypes.shape(),
};

export default ChangeMystery;
