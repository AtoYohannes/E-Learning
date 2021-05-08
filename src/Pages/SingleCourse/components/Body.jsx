import React from "react";
import { MdVideoCall, MdReceipt, MdPictureAsPdf, MdHelp } from "react-icons/md";
import { Card, Row, Col, Button } from "reactstrap";
import InstructorImage from "../../../Assets/Nunu.jpg";
import Avatar from "../../../Components/Avatar";
import { selectMainBuffer } from "../../../store/States/Buffer/"
import { selectUniversities } from "../../../store/States/Universities"
import { selectTeachers } from "../../../store/States/Teachers"
import { connect } from "react-redux"
import { resolveUniversity, resolveTeacher, getCourseChapters } from "../../../helpers/customResolvers"
import { selectChapters } from "../../../store/States/Chapters/"

const chapters = [
  { type: "video" },
  { type: "reading" },
  { type: "pdf" },
  { type: "test" },
  { type: "video" },
];

const Body = ({ buffer, teachers, chapters }) => {
  return buffer.selectedCourse && (
    <div className="singleCourseBodyContainer">
      <h3>Course Insights</h3>
      <hr />
      <p>
        {buffer.selectedCourse.briefIntroduction}
      </p>
      <h3>Course Structure</h3>
      <hr />
      <h6>The Course Has 5 Chapters</h6>
      <Row>
        {getCourseChapters(buffer.selectedCourse._id, chapters).map((chapter, index) => {
          return (
            <Col key={index} md={4} sm={6} xs={12}>
              <Card className="chapters">
                <h6>{chapter.title}</h6>
                {/* <h6>Basics of The Course</h6> */}
                <div className="courseType">
                  {chapter.numberOfVideos > 0 ? <MdVideoCall size={20} /> : null}
                  {chapter.numberOfAssignments > 0 ? <MdReceipt size={20} /> : null}
                  {chapter.numberOfReading > 0 ? <MdPictureAsPdf size={20} /> : null}
                  {/* {course.numberOfReading > 0 ? <MdHelp size={20} /> : null} */}
                  <h7>Estimated 1hr 30 Minutes</h7>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
      <h3>Your Instructor</h3>
      <hr />
      <div className="instructorContainer">
        <Avatar size={200} src={InstructorImage} />
        <h5>{resolveTeacher(buffer.selectedCourse.teacherID, teachers)}</h5>
        <h7>{resolveTeacher(buffer.selectedCourse.teacherID, teachers, true).qualification}</h7>
        <hr />
        <Button>Enroll Now</Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  buffer: selectMainBuffer(state),
  universities: selectUniversities(state),
  teachers: selectTeachers(state),
  chapters: selectChapters(state)
})

export default connect(mapStateToProps)(Body);
