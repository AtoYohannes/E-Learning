import React from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import CoursesCardTwo from "../../../Components/Card/CoursesCardTwo";

const popularCourses = [{}, {}, {}, {}];

const PopularCourses = () => {
  return (
    <div className="popularCoursesContainer">
      <CardHeader className="header">
        <h5>Popular Courses</h5>
      </CardHeader>
      <CardBody className="popularCoursesBody">
        <Row>
          {popularCourses.map(() => (
            <Col md={3} sm={6} xs={12}>
              <CoursesCardTwo />
            </Col>
          ))}
        </Row>
      </CardBody>
    </div>
  );
};
export default PopularCourses;
