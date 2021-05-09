import { reduxStatus } from "constants/reduxStatus";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Categories from "./Categories";
import {
  selectCategories, selectAddStatus, selectEditStatus, selectDeleteStatus, selectFetchStatus,
  Add, Fetch, Edit, Remove, FetchCategories, AddCategory, EditCategory, RemoveCategory
} from "../../../../store/States/Categories"

const Loader = ({
  fetchStatus,
  addStatus,
  addCategory,
  editStatus,
  editCategory,
  deleteStatus,
  removeCategory,
  categories,
}) => {
  const [data, setData] = useState([]);
  const [fetchLock, setFetchLock] = useState(true);
  const [addLock, setAddLock] = useState(true);
  const [editLock, setEditLock] = useState(true);
  const [deleteLock, setDeleteLock] = useState(true);

  useEffect(() => {
    setData(categories);
  }, [categories, setData]);

  useEffect(() => {
    setFetchLock(false);
  }, [setFetchLock]);

  useEffect(() => {
    const { status } = fetchStatus;
    if (status === reduxStatus.failure && !fetchLock) {
      toast.error("Failed fetching Categorys");
      setFetchLock(true);
    }
  }, [fetchStatus, setFetchLock, fetchLock]);

  useEffect(() => {
    const { status } = addStatus;
    if (status === reduxStatus.failure && !addLock) {
      setAddLock(true);
    } else if (status === reduxStatus.success && !addLock) {
      toast.success("Added Category");
      setAddLock(true);
    }
  }, [addStatus, setAddLock, addLock]);

  useEffect(() => {
    const { status } = editStatus;
    if (status === reduxStatus.failure && !editLock) {
      setEditLock(true);
    } else if (status === reduxStatus.success && !editLock) {
      toast.success("Edited Category");
      setEditLock(true);
    }
  }, [editStatus, setEditLock, editLock]);

  useEffect(() => {
    const { status } = deleteStatus;
    if (status === reduxStatus.failure && !deleteLock) {
      setDeleteLock(true);
    } else if (status === reduxStatus.success && !deleteLock) {
      toast.success("Deleted Category");
      setDeleteLock(true);
    }
  }, [deleteStatus, setDeleteLock, deleteLock]);

  const _addCategory = ({ name }) => {
    addCategory(name)
    setAddLock(false);
  };

  const _editCategory = ({ id, name }) => {
    setEditLock(false);
    editCategory(id, name)
  };

  const _deleteCategory = (id) => {
    setDeleteLock(false);
    removeCategory(id)
  };
  return (
    <Categories
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      addCategory={_addCategory}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      editCategory={_editCategory}
      doneDelete={deleteStatus.status === reduxStatus.success && !deleteLock}
      deleteCategory={_deleteCategory}
      categories={data}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  editStatus: selectEditStatus(state),
  deleteStatus: selectDeleteStatus(state),
  categories: selectCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(Fetch(FetchCategories())),
  addCategory: (name) => dispatch(Add(AddCategory(name))),
  editCategory: (id, name) => dispatch(Edit(EditCategory(id, name))),
  removeCategory: (id) => dispatch(Remove(RemoveCategory(id))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
