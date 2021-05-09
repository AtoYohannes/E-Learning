import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import CustomTable from "common/table";
import React, { useEffect, useReducer } from "react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Button, Card, Col, Row } from "reactstrap";
import CategoryForm from "./CategoryForm";

const Categories = ({
  categories,
  doneAdd,
  doneEdit,
  addCategory,
  editCategory,
  deleteCategory,
  doneDelete,
  options,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const columns = [
    { path: "name", label: "Name" },
    {
      key: "view",
      label: "Actions",
      content: (category) => (
        <Row>
          <Button
            className="buttons"
            size="sm"
            color="blue"
            onClick={() => {
              _toggle(
                {
                  type: "VIEW",
                  Component: CategoryForm,
                  data: category,
                  title: "View Category",
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
                  Component: CategoryForm,
                  submit: editCategory,
                  data: category,
                  title: "Edit Category",
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
              deleteCategory(category._id)
              _toggle(
                {
                  type: "DELETE",
                  deleteOptions: {
                    okCallback: okDelete,
                    title: "Are you sure?",
                    id: category._id,
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
    deleteCategory(id);
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
                Component: CategoryForm,
                submit: addCategory,
                title: "New Category",
                size: "md",
                options,
              },
              dispatch
            )
          }
          size="sm"
        >
          Add New Category
        </Button>
      </Col>
      <CustomTable title="Categories" columns={columns} data={categories} />
    </Card>
  );
};

export default Categories;
