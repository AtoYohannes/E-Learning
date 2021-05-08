import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import CoursesCard from "../../Components/Card/CoursesCardTwo";
import { selectCourses } from "../../store/States/Courses"

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

const AllCourses = ({ courses }) => {
  return (
    <div className="allCoursesContainer">
      <h5>All Courses</h5>
      <hr />
      <div className="coursesBody">
        <Row>
          {courses.map((course) => (
            <Col md={4} sm={6} xs={12}>
              <CoursesCard course={course} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  courses: selectCourses(state)
})

export default connect(mapStateToProps)(AllCourses);
