import React, { useState } from "react";
import PropTypes from "prop-types";
import SortableAddList from "../../../../../../../components/SortableAddList/SortableAddList";
import { prayers } from "../../../../constants/prayers";
import { useTranslation } from "react-i18next";

const PrayerEditList = ({ defaultList = [], onChange }) => {
  const { t } = useTranslation();

  const getPrayers = (arr) =>
    Object.values(arr).map((p, index) => ({
      label: t(p.label),
      value: index,
    }));

  const [options, setOptions] = useState(getPrayers(defaultList));

  const onRemove = ({ value }) => {
    // if a prayer is removed from list
    const arr = getPrayers(options);
    const index = arr.findIndex(({ value: val }) => val === value);
    if (index >= 0) {
      arr.splice(index, 1);
      setOptions(arr);
      onChange(arr);
    }
  };

  const checkComparison = ({ value, label }, index, array2) =>
    value === array2[index].value && label === array2[index].label;

  const compareArrays = (array1, array2) =>
    array1.length === array2.length &&
    array1.every((obj, index) => checkComparison(obj, index, array2));

  const onUpdate = (prayerList) => {
    // check if prayerList was updated
    console.log(compareArrays(prayerList, options), prayerList, options);
    if (!compareArrays(prayerList, options)) {
      // if the order of the prayer list is changed
      onChange(prayerList);
      setOptions(prayerList);
    }
  };

  const onSelect = ({ label, value }) => {
    // if a prayer is added to the list
    setOptions([...options, { value, label }]);
  };

  return (
    <SortableAddList
      defaultList={getPrayers(options)}
      placeholder="Add prayer..."
      onRemove={onRemove}
      onUpdate={onUpdate}
      onSelect={onSelect}
      list={getPrayers(prayers)}
    />
  );
};

PrayerEditList.propTypes = {
  defaultList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func.isRequired,
};

export default PrayerEditList;
