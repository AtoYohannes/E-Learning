import { initialState, reducer } from "common/ModalOptions";
import reduxStatus from "constants/reduxStatus";
import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import {
  Add,
  AddChapter,
  selectAddStatus as selectChapterAddStatus,
  selectChapters,
} from "store/States/Chapters/";
import {
  Add as addContent,
  AddContent,
  Edit,
  selectAddStatus as selectContentAddStatus,
  selectContents,
  selectEditStatus,
  VerifyCourse,
} from "store/States/Contents";
import { Fetch, FetchCourses, selectCourses } from "store/States/Courses/";
import { selectAddStatus } from "store/States/UnCompletedCourses";
import Courses from "./Courses";

const UncompletedCoures = ({
  unCompletedCourses,
  addStatus,
  addContentStatus,
  postChapter,
  postContent,
  addChapterStatus,
  chapters,
  contents,
  editStatus,
  verifyCourse,
  fetchCourses,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetchLock, setFetchLock] = useState(true);
  const [addLock, setAddLock] = useState(true);
  const [addChapterLock, setAddChapterLock] = useState(true);
  const [addContentLock, setAddContentLock] = useState(true);
  const [editLock, setEditLock] = useState(true);
  const [deleteLock, setDeleteLock] = useState(true);
  console.log("course", unCompletedCourses);
  const _addCourse = () => {
    setAddLock(false);
  };

  const _postChapter = (data) => {
    setAddChapterLock(false);
    postChapter(data);
  };

  const _postContent = (data) => {
    setAddContentLock(false);
    postContent(data);
  };

  const _verifyCourse = (id) => {
    setEditLock(false);
    verifyCourse(id);
  };

  useEffect(() => {
    if (editStatus.status === reduxStatus.success && !editLock) {
      setEditLock(true);
      fetchCourses();
    }
  }, [editStatus, editLock, setEditLock, fetchCourses]);

  return (
    <Courses
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      doneAddChapter={
        addChapterStatus.status === reduxStatus.success && !addChapterLock
      }
      doneAddContent={
        addContentStatus.status === reduxStatus.success && !addContentLock
      }
      addCourse={_addCourse}
      postChapter={_postChapter}
      postContent={_postContent}
      courses={unCompletedCourses}
      verifyCourse={_verifyCourse}
      chapters={chapters}
      contents={contents}
    />
    // <Courses />
  );
};

const mapStateToProps = (state) => ({
  unCompletedCourses: selectCourses(state),
  addStatus: selectAddStatus(state),
  addChapterStatus: selectChapterAddStatus(state),
  addContentStatus: selectContentAddStatus(state),
  chapters: selectChapters(state),
  contents: selectContents(state),
  editStatus: selectEditStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  postChapter: (data) => dispatch(Add(AddChapter(data))),
  postContent: (data) => dispatch(addContent(AddContent(data))),
  verifyCourse: (id) => dispatch(Edit(VerifyCourse(id))),
  fetchCourses: () => dispatch(Fetch(FetchCourses())),
});

export default connect(mapStateToProps, mapDispatchToProps)(UncompletedCoures);
