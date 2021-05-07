import CoursesCard from "Components/Card/CoursesCard";
import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import routes from "../../../Config/routes";

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
            <Col md={6} sm={6} xs={12}>
              <CoursesCard />
            </Col>
          ))}
        </Row>
      </CardBody>
      <Col align="center">
        <Link to={{ pathname: routes.allCourses }}>See All</Link>
      </Col>
    </div>
  );
};
export default PopularCourses;
