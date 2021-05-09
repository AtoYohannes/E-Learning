import { reduxStatus } from "constants/reduxStatus";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  Add, Edit, Fetch, Remove,
  selectAddStatus, selectDeleteStatus, selectEditStatus, selectFetchStatus, selectTeachers,
  AddTeacher, EditTeacher, RemoveTeacher
} from "../../../../store/States/Teachers";
import Teachers from "./Teachers";

const Loader = ({
  fetchStatus,
  addStatus,
  fetchTeachers,
  addTeacher,
  editStatus,
  editTeacher,
  deleteStatus,
  removeTeacher,
  teachers,
}) => {
  const [data, setData] = useState([]);
  const [fetchLock, setFetchLock] = useState(true);
  const [addLock, setAddLock] = useState(true);
  const [editLock, setEditLock] = useState(true);
  const [deleteLock, setDeleteLock] = useState(true);

  useEffect(() => {
    setData(teachers);
  }, [teachers, setData]);

  // useEffect(() => {
  //   setFetchLock(false);
  //   fetchTeachers();
  // }, [fetchTeachers, setFetchLock]);

  useEffect(() => {
    const { status } = fetchStatus;
    if (status === reduxStatus.failure && !fetchLock) {
      toast.error("Failed fetching Teachers");
      setFetchLock(true);
    }
  }, [fetchStatus, setFetchLock, fetchLock]);

  useEffect(() => {
    const { status } = addStatus;
    if (status === reduxStatus.failure && !addLock) {
      setAddLock(true);
    } else if (status === reduxStatus.success && !addLock) {
      toast.success("Added Teacher");
      setAddLock(true);
    }
  }, [addStatus, setAddLock, addLock]);

  useEffect(() => {
    const { status } = editStatus;
    if (status === reduxStatus.failure && !editLock) {
      setEditLock(true);
    } else if (status === reduxStatus.success && !editLock) {
      toast.success("Edited Teacher");
      setEditLock(true);
    }
  }, [editStatus, setEditLock, editLock]);

  useEffect(() => {
    const { status } = deleteStatus;
    if (status === reduxStatus.failure && !deleteLock) {
      setDeleteLock(true);
    } else if (status === reduxStatus.success && !deleteLock) {
      toast.success("Deleted Teacher");
      setDeleteLock(true);
    }
  }, [deleteStatus, setDeleteLock, deleteLock]);

  const _addTeacher = (data) => {
    setAddLock(false);
    addTeacher(data)
  };

  const _editTeacher = (data) => {
    setEditLock(false);
    editTeacher(data)
  };

  const _deleteTeacher = (id) => {
    setDeleteLock(false);
    removeTeacher(id)
  };
  return (
    <Teachers
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      addTeacher={_addTeacher}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      editTeacher={_editTeacher}
      doneDelete={deleteStatus.status === reduxStatus.success && !deleteLock}
      deleteTeacher={_deleteTeacher}
      teachers={data}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  editStatus: selectEditStatus(state),
  deleteStatus: selectDeleteStatus(state),
  teachers: selectTeachers(state),
});

const mapDispatchToProps = (dispatch) => ({
  addTeacher: (data) => dispatch(Add(AddTeacher(data))),
  editTeacher: (data) => dispatch(Edit(EditTeacher(data))),
  removeTeacher: (id) => dispatch(Remove(RemoveTeacher(id))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
