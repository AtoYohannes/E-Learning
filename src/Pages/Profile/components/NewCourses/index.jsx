import { reduxStatus } from "constants/reduxStatus";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  Add,
  AddCourse,
  Fetch,
  FetchCourses,
  selectAddStatus,
  selectCourses,
  selectDeleteStatus,
  selectEditStatus,
  selectFetchStatus,
} from "store/States/Courses";
import { selectUnVerifiedCourses } from "store/States/UnCompletedCourses"
import { selectEnrollments } from "../../../../store/States/Enrollments"
import { selectCategories } from "store/States/Categories"
import { selectUniversities } from "store/States/Universities"
import { selectTeachers } from "store/States/Teachers"
import { selectUserContent } from "store/States/User"
import { selectChapters } from "store/States/Chapters"
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
  courses,
  categories,
  universities,
  teachers,
  enrollments,
  unVerifiedCourses,
  userContent,
  chapters
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

    addCourse(data);
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
  console.log("her", userContent.userData.userType)
  return (
    <Courses
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      addCourse={_addCourse}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      editCourse={_editCourse}
      doneDelete={deleteStatus.status === reduxStatus.success && !deleteLock}
      deleteCourse={_deleteCourse}
      courses={courses}
      categories={categories}
      universities={universities}
      teachers={teachers}
      enrollments={enrollments}
      userType={userContent.userData.userType}
      unVerifiedCourses={unVerifiedCourses}
      chapters={chapters}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  fetchStatus: selectFetchStatus(state),
  addStatus: selectAddStatus(state),
  editStatus: selectEditStatus(state),
  deleteStatus: selectDeleteStatus(state),
  courses: selectCourses(state),
  categories: selectCategories(state),
  universities: selectUniversities(state),
  teachers: selectTeachers(state),
  enrollments: selectEnrollments(state),
  unVerifiedCourses: selectUnVerifiedCourses(state),
  userContent: selectUserContent(state),
  chapters: selectChapters(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: () => dispatch(Fetch(FetchCourses())),
  addCourse: (data) => dispatch(Add(AddCourse(data))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);