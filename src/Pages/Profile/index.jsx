import React from "react";
import { Col, Row } from "reactstrap";
import { PersonalInfo, Tabs } from "./components";

const Loader = () => {
  return (
    <div className="profileContainer">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <PersonalInfo />
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Tabs />
        </Col>
      </Row>
    </div>
  );
};
export default Loader;
