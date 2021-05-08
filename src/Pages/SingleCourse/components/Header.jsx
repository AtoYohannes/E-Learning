import { Button } from "reactstrap";
import React from "react";
import { MdApps, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";
import { selectMainBuffer } from "../../../store/States/Buffer/"
import { selectUniversities } from "../../../store/States/Universities"
import { selectTeachers } from "../../../store/States/Teachers"
import { connect } from "react-redux"
import { resolveUniversity, resolveTeacher } from "../../../helpers/customResolvers"

const CourseHeader = ({ buffer, universities, teachers }) => {
  return buffer.selectedCourse && (
    <div className="singleCourseHeaderContainer">
      <h5>{resolveUniversity(buffer.selectedCourse.universityID, universities)}</h5>
      <div className="label">
        <h1>{buffer.selectedCourse.title}</h1>
        <Button>
          <Link to={{ pathname: routes.singleCourseInsider }}>
            <MdApps className="mr-2" />
            Enroll Now
          </Link>
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
  teachers: selectTeachers(state)
})

export default connect(mapStateToProps)(CourseHeader);
