import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import { ReactSortable } from "react-sortablejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sort = ({ list, onRemove, onUpdate }) => {
  const { t } = useTranslation();

  const [state, setState] = useState(list);
  return (
    <ReactSortable list={state} setList={setState} onChange={onUpdate}>
      {state.map((p) => (
        <Card className="px-2 py-2 mb-1" style={{ cursor: "s-resize" }}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Button
                onClick={onRemove}
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
  list: PropTypes.arrayOf(),
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Sort;
