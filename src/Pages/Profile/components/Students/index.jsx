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
import Students from "./Students";

const Loader = ({
  fetchStatus,
  addStatus,
  fetchStudents,
  addStudent,
  editStatus,
  editStudent,
  deleteStatus,
  deleteStudent,
  students,
}) => {
  const [data, setData] = useState([]);
  const [fetchLock, setFetchLock] = useState(true);
  const [addLock, setAddLock] = useState(true);
  const [editLock, setEditLock] = useState(true);
  const [deleteLock, setDeleteLock] = useState(true);

  useEffect(() => {
    setData(students);
  }, [students, setData]);

  useEffect(() => {
    setFetchLock(false);
    fetchStudents();
  }, [fetchStudents, setFetchLock]);

  useEffect(() => {
    const { status } = fetchStatus;
    if (status === reduxStatus.failure && !fetchLock) {
      toast.error("Failed fetching Students");
      setFetchLock(true);
    }
  }, [fetchStatus, setFetchLock, fetchLock]);

  useEffect(() => {
    const { status } = addStatus;
    if (status === reduxStatus.failure && !addLock) {
      setAddLock(true);
    } else if (status === reduxStatus.success && !addLock) {
      toast.success("Added Student");
      setAddLock(true);
    }
  }, [addStatus, setAddLock, addLock]);

  useEffect(() => {
    const { status } = editStatus;
    if (status === reduxStatus.failure && !editLock) {
      setEditLock(true);
    } else if (status === reduxStatus.success && !editLock) {
      toast.success("Edited Student");
      setEditLock(true);
    }
  }, [editStatus, setEditLock, editLock]);

  useEffect(() => {
    const { status } = deleteStatus;
    if (status === reduxStatus.failure && !deleteLock) {
      setDeleteLock(true);
    } else if (status === reduxStatus.success && !deleteLock) {
      toast.success("Deleted Student");
      setDeleteLock(true);
    }
  }, [deleteStatus, setDeleteLock, deleteLock]);

  const _addStudent = (data) => {
    setAddLock(false);
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    addStudent(formData);
  };

  const _editStudent = (data) => {
    setEditLock(false);
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    editStudent(formData);
  };

  const _deleteStudent = (id) => {
    setDeleteLock(false);
    deleteStudent(id);
  };
  return (
    <Students
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      addStudent={_addStudent}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      editStudent={_editStudent}
      doneDelete={deleteStatus.status === reduxStatus.success && !deleteLock}
      deleteStudent={_deleteStudent}
      students={data}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  editStatus: selectEditStatus(state),
  deleteStatus: selectDeleteStatus(state),
  students: selectCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(Fetch()),
  addStudent: (data) => dispatch(Add(data)),
  editStudent: (data) => dispatch(Edit(data)),
  deleteStudent: (id) => dispatch(Remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
