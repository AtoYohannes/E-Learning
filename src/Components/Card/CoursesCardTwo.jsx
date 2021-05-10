import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import Image from "../../Assets/BookCover.jpg";
import routes from "../../Config/routes";
import { selectUniversities } from "../../store/States/Universities"
import { selectTeachers } from "../../store/States/Teachers"
import { connect } from "react-redux"
import { resolveUniversity, resolveTeacher } from "../../helpers/customResolvers"
import { UpdateMainBuffer } from "../../store/States/Buffer"

const CoursesCardTwo = ({ course, universities, teachers, UpdateMainBuffer, disabled, onClick }) => {
  return disabled ? (
    <Card className="courseTwoCard">
      <CardImg src={course.image} />
      <CardImgOverlay className="imageOverlay">
        <div className="title">{course.title ? course.title : ""}</div>
        <div className="courseBy">{
          course.universityID ?
            resolveUniversity(course.universityID, universities)
            : ""
        }</div>
        <div className="teacher">{
          course.teacherID ?
            resolveTeacher(course.teacherID, teachers)
            : ""
        }</div>
      </CardImgOverlay>
    </Card>
  ) : (
    <Link to={{ pathname: routes.singleCourse }} onClick={() => {
      UpdateMainBuffer({ selectedCourse: course })
    }}>
      <Card className="courseTwoCard">
        <CardImg src={course.image} />
        <CardImgOverlay className="imageOverlay">
          <div className="title">{course.title ? course.title : ""}</div>
          <div className="courseBy">{
            course.universityID ?
              resolveUniversity(course.universityID, universities)
              : ""
          }</div>
          <div className="teacher">{
            course.teacherID ?
              resolveTeacher(course.teacherID, teachers)
              : ""
          }</div>
        </CardImgOverlay>
      </Card>
    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesCardTwo);
