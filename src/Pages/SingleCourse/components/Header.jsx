import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import { MdApps, MdPerson } from "react-icons/md";
import { Link, Redirect } from "react-router-dom";
import routes from "../../../Config/routes";
import { selectMainBuffer } from "../../../store/States/Buffer/"
import { selectUniversities } from "../../../store/States/Universities"
import { selectTeachers } from "../../../store/States/Teachers"
import { connect } from "react-redux"
import { resolveUniversity, resolveTeacher, checkIfCourseIsPendingApproval } from "../../../helpers/customResolvers"
import { PostEnrollmentRequest, Add, selectAddStatus, selectEnrollmentRequests } from "../../../store/States/EnrollmentRequests"
import { Spinner } from "reactstrap"

const CourseHeader = ({
  buffer, universities, teachers, postEnrollmentRequest,
  addStatus, enrollmentRequests
}) => {
  const [addLock, setAddLock] = useState(true)
  const [redirect, setRedirect] = useState("")
  useEffect(() => {
    if (addStatus.status === "success" && !addLock) {
      return setRedirect(routes.profile)
    }
  }, [addStatus])

  return redirect.length > 0 ? <Redirect to={redirect} /> :
    buffer.selectedCourse && (
      <div className="singleCourseHeaderContainer">
        <h5>{resolveUniversity(buffer.selectedCourse.universityID, universities)}</h5>
        <div className="label">
          <h1>{buffer.selectedCourse.title}</h1>
          <Button
            onClick={() => {
              setAddLock(false)
              postEnrollmentRequest(buffer.selectedCourse._id, "6095d13e5a4a30193a5d9472")
            }}
            disabled={checkIfCourseIsPendingApproval("6095d13e5a4a30193a5d9472", buffer.selectedCourse._id, enrollmentRequests)}
          >
            {
            checkIfCourseIsPendingApproval("6095d13e5a4a30193a5d9472", buffer.selectedCourse._id, enrollmentRequests)?
            <>Awaiting Acceptance</>
            :(addLock ?
              <>
                <MdApps className="mr-2" />
                Enroll Now
              </> :
              <Spinner />)
              }
          </Button>
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
  enrollmentRequests: selectEnrollmentRequests(state)
})

const mapDispatchToProps = dispatch => ({
  postEnrollmentRequest: (courseID, studentID) => dispatch(Add(PostEnrollmentRequest({ courseID, studentID })))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseHeader);
