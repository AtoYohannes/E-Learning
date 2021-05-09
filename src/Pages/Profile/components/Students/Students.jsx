import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import CustomTable from "common/table";
import React, { useEffect, useReducer } from "react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Button, Card, Col, Row } from "reactstrap";
import StudentsForm from "./StudentForm";

const Students = ({
  students,
  doneAdd,
  doneEdit,
  addStudent,
  editStudent,
  deleteStudent,
  doneDelete,
  options,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const columns = [
    { path: "firstName", label: "First Name" },
    { path: "lastName", label: "Last Name" },
    { path: "email", label: "Email" },
    {
      key: "view",
      label: "Actions",
      content: (categorys) => (
        <Row>
          <Button
            className="buttons"
            size="sm"
            color="blue"
            onClick={() => {
              _toggle(
                {
                  type: "VIEW",
                  Component: StudentsForm,
                  data: categorys,
                  title: "View Students",
                  options,
                },
                dispatch
              );
            }}
          >
            <icon>
              {" "}
              <MdRemoveRedEye />
            </icon>
            <small>
              <b>View</b>
            </small>
          </Button>
        </Row>
      ),
    },
  ];

  useEffect(() => {
    if (doneAdd || doneEdit) {
      _toggle({ type: "CLOSE" }, dispatch);
    }
  }, [doneAdd, doneEdit]);

  const okDelete = (id) => {
    deleteStudent(id);
  };
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
                Component: StudentsForm,
                submit: addStudent,
                title: "New Students",
                size: "md",
                options,
              },
              dispatch
            )
          }
          size="sm"
        >
          Add New Student
        </Button>
      </Col>
      <CustomTable title="Students" columns={columns} data={students} />
    </Card>
  );
};

export default Students;
