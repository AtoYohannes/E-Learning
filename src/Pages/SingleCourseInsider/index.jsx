import React from "react";
import { Col, Row } from "reactstrap";
import { Body, Content } from "./components";

const SingleCourse = () => {
  return (
    <div className="singleCourseContainer">
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Content />
        </Col>
        <Col md={9} sm={6} xs={12}>
          <Body />
        </Col>
      </Row>
    </div>
  );
};
export default SingleCourse;
