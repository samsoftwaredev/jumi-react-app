import React from "react";
import PropTypes from "prop-types";
import Sort from "../Sort/Sort";
import SelectableList from "../List";

const SortableAddList = ({
  defaultList = [],
  list = [],
  onRemove,
  onUpdate,
  onSelect,
  placeholder = "",
}) => {
  return (
    <div>
      <Sort list={defaultList} onRemove={onRemove} onUpdate={onUpdate} />
      <SelectableList
        placeholder={placeholder}
        onChange={onSelect}
        options={list.map((p) => ({
          ...p,
          label: `${p.label} - ${p.description?.slice(0, 30)}...`,
        }))}
      />
    </div>
  );
};

SortableAddList.propTypes = {
  defaultList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  placeholder: PropTypes.string,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  onSelect: PropTypes.func,
};

export default SortableAddList;
