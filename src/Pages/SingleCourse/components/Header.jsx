import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import { MdApps, MdPerson } from "react-icons/md";
import { Link, Redirect } from "react-router-dom";
import routes from "../../../Config/routes";
import { selectMainBuffer } from "../../../store/States/Buffer/"
import { selectUniversities } from "../../../store/States/Universities"
import { selectTeachers } from "../../../store/States/Teachers"
import { selectCourses } from "store/States/Courses"
import { connect } from "react-redux"
import { resolveUniversity, resolveTeacher, checkIfCourseIsPendingApproval, isCourseAvailable, checkIfCourseIsEnrolled } from "../../../helpers/customResolvers"
import { PostEnrollmentRequest, Add, selectAddStatus, selectEnrollmentRequests } from "../../../store/States/EnrollmentRequests"
import { Spinner } from "reactstrap"
import { Fetch as fetchEnrolledCourses, FetchEnrolledCourses, selectEnrolledCourses } from "store/States/EnrolledCourses"
import { selectUserContent } from "store/States/User"

const CourseHeader = ({
  buffer, universities, teachers, postEnrollmentRequest,
  addStatus, enrollmentRequests, courses, userContent,
  fetchEnrolledCourses, enrolledCourses
}) => {
  const [addLock, setAddLock] = useState(true)
  const [redirect, setRedirect] = useState("")
  useEffect(() => {
    if (addStatus.status === "success" && !addLock) {
      return setRedirect(routes.profile)
    }
  }, [addStatus])

  useEffect(() => {
    fetchEnrolledCourses()
  }, [fetchEnrolledCourses])


  return redirect.length > 0 ? <Redirect to={redirect} /> :
    buffer.selectedCourse && isCourseAvailable(buffer.selectedCourse._id, courses) && (
      <div className="singleCourseHeaderContainer">
        <h5>{resolveUniversity(buffer.selectedCourse.universityID, universities)}</h5>
        <div className="label">
          <h1>{buffer.selectedCourse.title}</h1>
          {
            !checkIfCourseIsEnrolled(buffer.selectedCourse._id, enrolledCourses) && <Button
              onClick={() => {
                setAddLock(false)
                postEnrollmentRequest(buffer.selectedCourse._id, userContent.userData.externalID)
              }}
              disabled={checkIfCourseIsPendingApproval(userContent.userData.externalID, buffer.selectedCourse._id, enrollmentRequests)}
            >
              {
              checkIfCourseIsPendingApproval(userContent.userData.externalID, buffer.selectedCourse._id, enrollmentRequests)?
              <>Awaiting Acceptance</>
              :(addLock ?
                <>
                  <MdApps className="mr-2" />
                  Enroll Now
                </> :
                <Spinner />)
                }
            </Button>
          }
        </div>

        <h6>
          <MdPerson className="mr-2" />
          {resolveTeacher(buffer.selectedCourse.teacherID, teachers)}
        </h6>
      </div>
    );
};

const mapStateToProps = state => ({
  buffer: selectMainBuffer(state),
  universities: selectUniversities(state),
  teachers: selectTeachers(state),
  addStatus: selectAddStatus(state),
  enrollmentRequests: selectEnrollmentRequests(state),
  courses: selectCourses(state),
  userContent: selectUserContent(state),
  enrolledCourses: selectEnrolledCourses(state)
})

const mapDispatchToProps = dispatch => ({
  postEnrollmentRequest: (courseID, studentID) => dispatch(Add(PostEnrollmentRequest({ courseID, studentID }))),
  fetchEnrolledCourses: (id) => dispatch(fetchEnrolledCourses(FetchEnrolledCourses(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseHeader);
