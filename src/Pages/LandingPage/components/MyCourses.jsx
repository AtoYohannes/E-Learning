import CategoriesCard from "Components/Card/CategoriesCard";
import CoursesCardTwo from "Components/Card/CoursesCardTwo";
import React, { useEffect } from "react";
import { Card, CardHeader, Col, Row } from "reactstrap";
import { selectCategories, Fetch, FetchCategories } from "../../../store/States/Categories"
import { selectCourses, Fetch as FetchCourseAPI, FetchCourses } from "../../../store/States/Courses/"
import { UpdateMainBuffer } from "store/States/Buffer"
import { connect } from "react-redux"

const courses = [{}, {}, {}, {}, {}];

const MyCourses = ({ fetchCategories, categories, courses, fetchCourses, UpdateMainBuffer }) => {
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  return (
    <div className="myCoursesContainer">
      <Row>
        <Col md={2} sm={2} xs={12}>
          <Card className="bg-background border-0">
            <CardHeader>
              <h4>Categories</h4>
            </CardHeader>
            <div className="categoriesContainer">
              {categories.map((item) => (
                  <CategoriesCard categoryName={item.name} />
              ))}
            </div>
          </Card>
        </Col>
        <Col md={10} sm={10} xs={12}>
          <div className="coursesContainer">
            <Row>
              {courses.map((course) => (
                <Col md={3} sm={3} xs={12}>
                  <CoursesCardTwo course={course} onClick={(id) => UpdateMainBuffer({ selectedContent: id })} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: selectCategories(state),
  courses: selectCourses(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(Fetch(FetchCategories())),
  fetchCourses: () => dispatch(FetchCourseAPI(FetchCourses())),
  UpdateMainBuffer: data => dispatch(UpdateMainBuffer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCourses)
