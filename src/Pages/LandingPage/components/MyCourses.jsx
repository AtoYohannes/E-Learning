import CategoriesCard from "Components/Card/CategoriesCard";
import CoursesCardTwo from "Components/Card/CoursesCardTwo";
import React from "react";
import { Card, CardHeader, Col, Row } from "reactstrap";

const categories = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
const courses = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const MyCourses = () => {
  return (
    <div className="myCoursesContainer">
      <Row>
        <Col md={2} sm={2} xs={12}>
          <Card className="bg-background border-0">
            <CardHeader>
              <h4>Categories</h4>
            </CardHeader>
            <div className="categoriesContainer">
              {categories.map(() => (
                <CategoriesCard />
              ))}
            </div>
          </Card>
        </Col>
        <Col md={10} sm={10} xs={12}>
          <div className="coursesContainer">
            <Row>
              {courses.map(() => (
                <Col md={3} sm={3} xs={12}>
                  <CoursesCardTwo />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MyCourses;
