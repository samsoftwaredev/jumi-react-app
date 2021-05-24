import React from "react";
import PropTypes from "prop-types";
import { mysteries, rosaryMysteries } from "../../../../constants/mysteries";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";

const SelectMystery = ({ currentMystery, onUpdateMystery, todaysMystery }) => {
  const { t } = useTranslation();

  return (
    <div className="d-md-block">
      {mysteries.map((mysteryName) => {
        const active = currentMystery.id === mysteryName;
        const forToday = todaysMystery === mysteryName;
        return (
          <Button
            size="sm"
            className="m-3"
            color={active ? "primary" : "light"}
            style={{ borderColor: forToday ? "gold" : "none" }}
            onClick={() => onUpdateMystery(mysteryName)}
          >
            {t(rosaryMysteries[mysteryName].label)}
          </Button>
        );
      })}
    </div>
  );
};

SelectMystery.propTypes = {
  currentMystery: PropTypes.shape(),
  onUpdateMystery: PropTypes.shape(),
  todaysMystery: PropTypes.shape(),
};

export default SelectMystery;
