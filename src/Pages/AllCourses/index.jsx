import React from "react";
import { Row, Col } from "reactstrap";
import CoursesCard from "../../Components/Card/CoursesCardTwo";

const courses = [
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
  {},
  {},
];

const AllCourses = () => {
  return (
    <div className="allCoursesContainer">
      <h5>All Courses</h5>
      <hr />
      <div className="coursesBody">
        <Row>
          {courses.map(() => (
            <Col md={4} sm={6} xs={12}>
              <CoursesCard />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default AllCourses;
