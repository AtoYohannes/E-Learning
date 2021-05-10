import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Row } from "reactstrap";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import routes from "../../Config/routes";
import { selectUniversities } from "../../store/States/Universities"
import { selectTeachers } from "../../store/States/Teachers"
import { connect } from "react-redux"
import { resolveUniversity, resolveTeacher, getCourseChapters, checkCourseVerification, isCourseAvailable } from "../../helpers/customResolvers"
import { selectCourses } from "store/States/Courses"
import { UpdateMainBuffer } from "../../store/States/Buffer"
import { selectContents } from "store/States/Contents"
import { selectChapters } from "store/States/Chapters"
import CustomTable from "common/table";
import AddContent from "../../Pages/Profile/components/UncompletedCourses/AddContent"

const CoursesCard = ({
  course, universities, teachers, UpdateMainBuffer, disable, title, addChapter, contents, chapters,
  addContent, viewContent, verifyCourse, courses
}) => {
  const columns = [
    { path: "title", label: "Chapter Title" },
    {
      key: "view",
      label: "Actions",
      content: (chapter) => (
        <Row>
          <Button
            className="buttons"
            size="sm"
            color="blue"
            onClick={() => {
              // console.log("pop", chapter)
              addContent(chapter)
            }}
          >
            <icon>
              {" "}
              <MdRemoveRedEye />
            </icon>
            <small>
              <b>Add Content</b>
            </small>
          </Button>
        </Row>
      )
    },
    {
      key: "view",
      label: "Actions",
      content: (chapter) => (
        <Row>
          <Button
            className="buttons"
            size="sm"
            color="blue"
            onClick={() => {
              viewContent(chapter)
            }}
          >
            <icon>
              {" "}
              <MdRemoveRedEye />
            </icon>
            <small>
              <b>See Contents</b>
            </small>
          </Button>
        </Row>
      )
    }
  ]

  // console.log("here", isCourseAvailable(course._id, courses))

  return (
    <Card className="coursesCardContainer">
      <CardBody className="coursesCard">
        <div>
          <header>{course.title? course.title : ""}</header>
          <tag style={{ fontSize: 12 }} onClick={() => addChapter()}>New Chapter</tag>
          {course && checkCourseVerification(course, chapters, contents)?
          isCourseAvailable(course._id, courses)?
          <tag style={{ fontSize: 12 }}>Verified</tag> :
          <tag style={{ fontSize: 12 }} onClick={() => verifyCourse(course._id)}>Verify Course</tag>
           : <></>
          }
          <CustomTable title="Chapters" columns={columns} data={
            course._id? getCourseChapters(course._id, chapters) : []
          } />
        </div>
        {/* <Button style={{ width: 50, height: 30 }}>{
          title ? title : "Go to Course"
        }</Button> */}
      </CardBody>
      <CardFooter className="courseFooter">
        <h6>{
          course.universityID?
          resolveUniversity(course.universityID, universities) : ""
        }</h6>
        <small>{
          course.teacherID?
          resolveTeacher(course.teacherID, teachers) : ""
        }</small>
      </CardFooter>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  universities: selectUniversities(state),
  teachers: selectTeachers(state),
  contents: selectContents(state),
  chapters: selectChapters(state),
  courses: selectCourses(state)
})

const mapDispatchToProps = dispatch => ({
  UpdateMainBuffer: (data) => dispatch(UpdateMainBuffer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesCard);
