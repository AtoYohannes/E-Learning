import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import CustomTable from "common/table";
import React, { useEffect, useReducer } from "react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Button, Card, Col, Row } from "reactstrap";
import SchoolsForm from "./SchoolsForm";

const Schools = ({
  doneAdd,
  doneEdit,
  deleteSchool,
  options,
  universities,
  addUniversity,
  editUniversity,
  removeUniversity
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const columns = [
    { path: "name", label: "Name" },
    { path: "description", label: "Subtitle" },
    {
      key: "view",
      label: "Actions",
      content: (schools) => (
        <Row>
          <Button
            className="buttons"
            size="sm"
            color="blue"
            onClick={() => {
              _toggle(
                {
                  type: "VIEW",
                  Component: SchoolsForm,
                  data: schools,
                  title: "View Schools",
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
                  Component: SchoolsForm,
                  submit: editUniversity,
                  data: schools,
                  title: "Edit Schools",
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
            color="danger"
            onClick={() => {
              removeUniversity(schools._id)
              _toggle(
                {
                  type: "DELETE",
                  deleteOptions: {
                    okCallback: okDelete,
                    title: "Are you sure?",
                    id: schools._id,
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
    deleteSchool(id);
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
                Component: SchoolsForm,
                submit: addUniversity,
                title: "New School",
                size: "md",
                options,
              },
              dispatch
            )
          }
          size="sm"
        >
          Add New School
        </Button>
      </Col>
      <CustomTable title="Schools" columns={columns} data={universities} />
    </Card>
  );
};

export default Schools
