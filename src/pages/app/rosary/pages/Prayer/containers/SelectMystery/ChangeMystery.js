import React from "react";
import PropTypes from "prop-types";
import SelectableList from "../../../../../../../components/List";
import { mysteries, rosaryMysteries } from "../../../../constants/mysteries";
import { useTranslation } from "react-i18next";

const ChangeMystery = ({ mysteryLabel, onUpdateMystery }) => {
  const { t } = useTranslation();

  const getMysteries = () =>
    mysteries.map((name) => ({
      label: t(rosaryMysteries[name].label),
      value: rosaryMysteries[name].id,
    }));

  return (
    <SelectableList
      value={{ label: mysteryLabel, value: rosaryMysteries[mysteryLabel] }}
      onChange={onUpdateMystery}
      options={getMysteries()}
    />
  );
};

ChangeMystery.propTypes = {
  onUpdateMystery: PropTypes.func,
  mystery: PropTypes.shape(),
};

export default ChangeMystery;
