import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import routes from "../../Config/routes";
import { selectUniversities } from "../../store/States/Universities"
import { selectTeachers } from "../../store/States/Teachers"
import { connect } from "react-redux"
import { resolveUniversity, resolveTeacher } from "../../helpers/customResolvers"
import { UpdateMainBuffer } from "../../store/States/Buffer"

const CoursesCard = ({ course, universities, teachers, UpdateMainBuffer }) => {
  return (
    <Card className="coursesCardContainer">
      <CardBody className="coursesCard">
        <div>
          <header>{course.title}</header>
          <tag>New</tag>
        </div>
        <Link to={{ pathname: routes.singleCourse }} onClick={() => {
          UpdateMainBuffer({ selectedCourse: course })
        }}>
          <Button>Go to Course</Button>
        </Link>
      </CardBody>
      <CardFooter className="courseFooter">
        <h6>{resolveUniversity(course.universityID, universities)}</h6>
        <small>{resolveTeacher(course.teacherID, teachers)}</small>
      </CardFooter>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  universities: selectUniversities(state),
  teachers: selectTeachers(state)
})

const mapDispatchToProps = dispatch => ({
  UpdateMainBuffer: (data) => dispatch(UpdateMainBuffer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesCard);
