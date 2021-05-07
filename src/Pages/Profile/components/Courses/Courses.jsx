import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import CoursesCardTwo from "Components/Card/CoursesCardTwo";
import React, { useEffect, useReducer } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import CoursesForm from "./CoursesForm";

const coursess = [{}, {}, {}, {}];
const Courses = ({ doneAdd, doneEdit, addCourse, options }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (doneAdd || doneEdit) {
      _toggle({ type: "CLOSE" }, dispatch);
    }
  }, [doneAdd, doneEdit]);

  return (
    <Card className="mt-2 p-2 bg-none">
      <CommonModals
        size={state.size}
        data={state.data}
        openModal={state.openModal}
        component={state.Component}
        toggle={_toggle}
        dispatch={dispatch}
        title={state.title}
      />
      <Col align="right" className="newButton">
        <Button
          onClick={() =>
            _toggle(
              {
                type: "ADD",
                Component: CoursesForm,
                submit: addCourse,
                title: "New Courses",
                size: "md",
                options,
              },
              dispatch
            )
          }
          size="sm"
        >
          Add New Course
        </Button>
      </Col>
      <h5>Courses</h5>
      <hr />
      <Row>
        {coursess.map((course, index) => (
          <Col md={3} sm={12}>
            <CoursesCardTwo index={index} course={course} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Courses;
