import CoursesCard from "Components/Card/CoursesCard";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import routes from "../../../Config/routes";
import { selectCourses, Fetch, FetchCourses } from "../../../store/States/Courses"
import { connect } from "react-redux"

const popularCourses = [{}, {}, {}, {}];

const PopularCourses = ({ courses, fetchCourses }) => {
  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])


  return (
    <div className="popularCoursesContainer">
      <CardHeader className="header">
        <h5>Popular Courses</h5>
      </CardHeader>
      <CardBody className="popularCoursesBody">
        <Row>
          {courses.map((course) => (
            <Col md={6} sm={6} xs={12}>
              <CoursesCard course={course} />
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

const mapStateToProps = state => ({
  courses: selectCourses(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(Fetch(FetchCourses()))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopularCourses);
