import React from "react";
import PropTypes from "prop-types";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import SortableAddList from "../../../../../../../components/SortableAddList/SortableAddList";
import { prayers } from "../../../../constants/prayers";

const modifyArrList = (arr = []) =>
  arr.map((p, index) => ({
    id: p.id,
    label: i18next.t(p.label),
    description: i18next.t(p.description),
    value: index,
  }));

const PrayerEditList = ({ defaultList = [], onChange }) => {
  const { t } = useTranslation();
  const arrOfAllPrayers = Object.values(prayers);
  const listOfAllPrayers = modifyArrList(arrOfAllPrayers);

  const onRemove = ({ value: index }) => {
    // if a prayer is removed from list
    const arrCopy = modifyArrList(defaultList);
    if (index >= 0) {
      // remove only one item form the list
      arrCopy.splice(index, 1);
      onChange(arrCopy.map(({ id }) => prayers[id]));
    }
  };

  // make sure the prayer list acually changed
  const checkComparison = ({ value, label }, index, array2) =>
    value === array2[index].value && label === array2[index].label;
  const compareArrays = (array1, array2) =>
    array1.length === array2.length &&
    array1.every((obj, index) => checkComparison(obj, index, array2));

  const onUpdate = (prayerList) => {
    // check if prayerList was updated
    if (!compareArrays(prayerList, defaultList)) {
      // check if the prayer list actually changed
      // if the order of the prayer list did changed
      // update the prayer list
      onChange(prayerList.map(({ id }) => prayers[id]));
    }
  };

  const onSelect = ({ value: index }) => {
    // when a prayer is select from the dropdown, add prayer to list
    const item = arrOfAllPrayers[index];
    onChange([...defaultList, item]);
  };

  return (
    <SortableAddList
      defaultList={modifyArrList(defaultList)}
      placeholder={`${t("add.label")} ${t("prayers.label")}...`}
      onRemove={onRemove}
      onUpdate={onUpdate}
      onSelect={onSelect}
      list={listOfAllPrayers}
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
