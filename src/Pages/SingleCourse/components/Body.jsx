import React, { useEffect, useState } from "react";
import { MdVideoCall, MdReceipt, MdPictureAsPdf, MdHelp } from "react-icons/md";
import { Card, Row, Col, Button } from "reactstrap";
import InstructorImage from "../../../Assets/Nunu.jpg";
import { Redirect } from "react-router-dom";
import Avatar from "../../../Components/Avatar";
import routes from "../../../Config/routes";
import { selectMainBuffer } from "../../../store/States/Buffer/"
import { selectUniversities } from "../../../store/States/Universities"
import { selectTeachers } from "../../../store/States/Teachers"
import { connect } from "react-redux"
import { resolveTeacher, getCourseChapters, checkIfCourseIsPendingApproval } from "../../../helpers/customResolvers"
import { PostEnrollmentRequest, Add, selectAddStatus, selectEnrollmentRequests } from "../../../store/States/EnrollmentRequests"
import { selectChapters } from "../../../store/States/Chapters/"

const chapters = [
  { type: "video" },
  { type: "reading" },
  { type: "pdf" },
  { type: "test" },
  { type: "video" },
];

const Body = ({ buffer, teachers, chapters, enrollmentRequests, postEnrollmentRequest, addStatus }) => {
  const [addLock, setAddLock] = useState(true)
  const [redirect, setRedirect] = useState("")
  useEffect(() => {
    if (addStatus.status === "success" && !addLock) {
      return setRedirect(routes.profile)
    }
  }, [addStatus])

  return redirect.length > 0 ? <Redirect to={redirect} /> :
    buffer.selectedCourse && (
      <div className="singleCourseBodyContainer">
        <h3>Course Insights</h3>
        <hr />
        <p>
          {buffer.selectedCourse.briefIntroduction}
        </p>
        <h3>Course Structure</h3>
        <hr />
        <h6>The Course Has {getCourseChapters(buffer.selectedCourse._id, chapters).length} Chapters</h6>
        <Row>
          {getCourseChapters(buffer.selectedCourse._id, chapters).map((chapter, index) => {
            return (
              <Col key={index} md={4} sm={6} xs={12}>
                <Card className="chapters">
                  <h6>{chapter.title}</h6>
                  {/* <h6>Basics of The Course</h6> */}
                  <div className="courseType">
                    {chapter.numberOfVideos > 0 ? <MdVideoCall size={10} /> : null}
                    {chapter.numberOfAssignments > 0 ? <MdReceipt size={10} /> : null}
                    {chapter.numberOfReading > 0 ? <MdPictureAsPdf size={10} /> : null}
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
          {!checkIfCourseIsPendingApproval("6095d13e5a4a30193a5d9472", buffer.selectedCourse._id, enrollmentRequests) &&
            <Button
              onClick={() => {
                setAddLock(false)
                postEnrollmentRequest(buffer.selectedCourse._id, "6095d13e5a4a30193a5d9472")
              }}
            >
              Enroll Now
          </Button>}
        </div>
      </div>
    );
};

const mapStateToProps = state => ({
  buffer: selectMainBuffer(state),
  universities: selectUniversities(state),
  teachers: selectTeachers(state),
  chapters: selectChapters(state),
  enrollmentRequests: selectEnrollmentRequests(state),
  addStatus: selectAddStatus(state)
})

const mapDispatchToProps = dispatch => ({
  postEnrollmentRequest: (courseID, studentID) => dispatch(Add(PostEnrollmentRequest({ courseID, studentID })))
})

export default connect(mapStateToProps, mapDispatchToProps)(Body);
