import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import CoursesCardTwo from "Components/Card/CoursesCardTwo";
import React, { useEffect, useReducer } from "react";
import { Card, Col, Row } from "reactstrap";
import { selectEnrollmentRequests } from "../../../../store/States/EnrollmentRequests"
import { selectCourses } from "../../../../store/States/Courses"
import { connect } from "react-redux"
import { getRequestedCourses } from "../../../../helpers/customResolvers"

const Courses = ({ doneAdd, doneEdit, courses, enrollmentRequests }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (doneAdd || doneEdit) {
      _toggle({ type: "CLOSE" }, dispatch);
    }
  }, [doneAdd, doneEdit]);

  return (
    <Card className="mt-2 p-2 bg-none">
      <CommonModals
        size="xl"
        data={state.data}
        openModal={state.openModal}
        component={state.Component}
        toggle={_toggle}
        dispatch={dispatch}
        title={state.title}
      />
      <h5>Courses</h5>
      <hr />
      <Row>
        {getRequestedCourses("6095d13e5a4a30193a5d9472", enrollmentRequests, courses).map((course, index) => (
          <Col md={3} sm={12}>
            <CoursesCardTwo index={index} course={course} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

const mapStateToProps = state => ({
  enrollmentRequests: selectEnrollmentRequests(state),
  courses: selectCourses(state)
})

export default connect(mapStateToProps)(Courses);
