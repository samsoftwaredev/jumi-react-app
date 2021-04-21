import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import { ReactSortable } from "react-sortablejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sort = ({ list = [], onRemove, onUpdate }) => {
  const { t } = useTranslation();

  return (
    <ReactSortable animation={200} delay={2} list={list} setList={onUpdate}>
      {list.map((p, index) => (
        <Card
          key={index}
          className="px-2 py-2 mb-1"
          style={{ cursor: "s-resize" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Button
                onClick={() => onRemove(p)}
                size="sm"
                color="default"
                className="mr-1"
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
              <span>{t(p.label)}</span>
            </div>
            <div className="text-muted">
              <FontAwesomeIcon icon={faEllipsisV} />
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
        </Card>
      ))}
    </ReactSortable>
  );
};

Sort.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()),
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Sort;
