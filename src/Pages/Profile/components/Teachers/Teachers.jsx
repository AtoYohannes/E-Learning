import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import CustomTable from "common/table";
import React, { useEffect, useReducer } from "react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Button, Card, Col, Row } from "reactstrap";
import TeachersForm from "./TeachersForm";
import { PostTeacherAccount, PostUser } from "store/States/User/action"
import { AddTeacher } from "store/States/Teachers/"
import { callAPI } from "services/directCall"

const Teachers = ({
  teachers,
  doneAdd,
  doneEdit,
  addTeacher,
  editTeacher,
  deleteTeacher,
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
      content: (teacher) => (
        <Row>
          <Button
            className="buttons"
            size="sm"
            color="blue"
            onClick={() => {
              _toggle(
                {
                  type: "VIEW",
                  Component: TeachersForm,
                  data: teacher,
                  title: "View Teachers",
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
          <Button
            className="buttons"
            size="sm"
            color="warning"
            onClick={() => {
              _toggle(
                {
                  type: "EDIT",
                  Component: TeachersForm,
                  submit: editTeacher,
                  data: teacher,
                  title: "Edit Teachers",
                  options,
                },
                dispatch
              );
            }}
          >
            <icon>
              <MdEdit />
            </icon>
            <small>
              <b>Edit</b>
            </small>
          </Button>
          <Button
            className="buttons"
            size="sm"
            color="warning"
            onClick={() => {
              callAPI(PostTeacherAccount({
                ...teacher,
                externalID: teacher._id
              }), "postUser", (userData) => {
                if (userData._id) {
                  window.location.reload()
                }
              })
            }}
          >
            <icon>
              <MdEdit />
            </icon>
            <small>
              Add Account
            </small>
          </Button>
          <Button
            className="buttons"
            size="sm"
            color="danger"
            onClick={() => {
              deleteTeacher(teacher._id)
              _toggle(
                {
                  type: "DELETE",
                  deleteOptions: {
                    okCallback: okDelete,
                    title: "Are you sure?",
                    id: teacher._id,
                    message: "",
                  },
                },
                dispatch
              );
            }}
          >
            <icon>
              <MdDelete />
            </icon>
            <small>
              <b>Delete</b>
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
    deleteTeacher(id);
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
                Component: TeachersForm,
                submit: addTeacher,
                title: "New Teacher",
                size: "md",
                options,
              },
              dispatch
            )
          }
          size="sm"
        >
          Add New Teacher
        </Button>
      </Col>
      <CustomTable title="Teachers" columns={columns} data={teachers} />
    </Card>
  );
};

export default Teachers;
