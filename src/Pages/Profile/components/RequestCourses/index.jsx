import { reduxStatus } from "constants/reduxStatus";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  Add,
  Edit,
  Fetch,
  Remove,
  selectAddStatus,
  selectCategories,
  selectDeleteStatus,
  selectEditStatus,
  selectFetchStatus,
} from "store/Categories";
import Courses from "./Courses";

const Loader = ({
  fetchStatus,
  addStatus,
  fetchCourses,
  addCourse,
  editStatus,
  editCourse,
  deleteStatus,
  deleteCourse,
  categorys,
  categories,
  selectedRestaurant,
}) => {
  const [data, setData] = useState([]);
  const [fetchLock, setFetchLock] = useState(true);
  const [addLock, setAddLock] = useState(true);
  const [editLock, setEditLock] = useState(true);
  const [deleteLock, setDeleteLock] = useState(true);

  useEffect(() => {
    setData(categorys);
  }, [categorys, setData]);

  useEffect(() => {
    setFetchLock(false);
    fetchCourses();
  }, [fetchCourses, setFetchLock]);

  useEffect(() => {
    const { status } = fetchStatus;
    if (status === reduxStatus.failure && !fetchLock) {
      toast.error("Failed fetching Courses");
      setFetchLock(true);
    }
  }, [fetchStatus, setFetchLock, fetchLock]);

  useEffect(() => {
    const { status } = addStatus;
    if (status === reduxStatus.failure && !addLock) {
      setAddLock(true);
    } else if (status === reduxStatus.success && !addLock) {
      toast.success("Added Course");
      setAddLock(true);
    }
  }, [addStatus, setAddLock, addLock]);

  useEffect(() => {
    const { status } = editStatus;
    if (status === reduxStatus.failure && !editLock) {
      setEditLock(true);
    } else if (status === reduxStatus.success && !editLock) {
      toast.success("Edited Course");
      setEditLock(true);
    }
  }, [editStatus, setEditLock, editLock]);

  useEffect(() => {
    const { status } = deleteStatus;
    if (status === reduxStatus.failure && !deleteLock) {
      setDeleteLock(true);
    } else if (status === reduxStatus.success && !deleteLock) {
      toast.success("Deleted Course");
      setDeleteLock(true);
    }
  }, [deleteStatus, setDeleteLock, deleteLock]);

  const _addCourse = (data) => {
    setAddLock(false);
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    addCourse(formData);
  };

  const _editCourse = (data) => {
    setEditLock(false);
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    editCourse(formData);
  };

  const _deleteCourse = (id) => {
    setDeleteLock(false);
    deleteCourse(id);
  };
  return (
    <Courses
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      addCourse={_addCourse}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      editCourse={_editCourse}
      doneDelete={deleteStatus.status === reduxStatus.success && !deleteLock}
      deleteCourse={_deleteCourse}
      categorys={data}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  editStatus: selectEditStatus(state),
  deleteStatus: selectDeleteStatus(state),
  categorys: selectCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: () => dispatch(Fetch()),
  addCourse: (data) => dispatch(Add(data)),
  editCourse: (data) => dispatch(Edit(data)),
  deleteCourse: (id) => dispatch(Remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
