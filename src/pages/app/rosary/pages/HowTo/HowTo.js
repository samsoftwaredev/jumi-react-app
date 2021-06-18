import React from "react";
import { Col, Row } from "reactstrap";
import { prayers } from "../../constants/prayers";
import { rosaryMysteries } from "../../constants/mysteries";
import { strToId } from "../../../../../helpers/transform";
import { HowToNav, HowToContent } from "./containers";

const menu = [
  {
    id: "summary",
    label: "summary.label",
    path: "summary",
    description: "summary.description",
  },
  {
    id: "how-to-pray",
    label: "howToPray.label",
    path: "how-to-pray",
    description: "howToPray.description",
  },
  {
    id: "mysteries",
    label: "mysteries.label",
    path: "mysteries",
    subMenu: Object.values(rosaryMysteries).map((p) => ({
      id: strToId(p.label),
      path: strToId(p.label),
      label: p.label,
      subMenu: p.mysteries.map((p, subIndex) => ({
        id: subIndex,
        label: p.label,
        description: p.description,
      })),
    })),
    description: "mysteries.description",
  },
  {
    label: "prayers.label",
    path: "prayers",
    id: "prayers",
    subMenu: Object.values(prayers).map((p) => ({
      id: strToId(p.label),
      path: strToId(p.label),
      label: p.label,
      description: p.description,
    })),
    description: "prayers.description",
  },
];

const HowTo = () => {
  return (
    <Row className="mt-4">
      {/* Navigation */}
      <Col md="4">
        <HowToNav menu={menu} />
      </Col>
      {/* Content */}
      <Col md="8">
        <HowToContent menu={menu} />
      </Col>
    </Row>
  );
};

export default HowTo;
