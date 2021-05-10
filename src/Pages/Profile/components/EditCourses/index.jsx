import React, { useReducer, useEffect, useState } from "react"
import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import { Card, Col, Row, Button } from "reactstrap";
import CoursesCard from "../../../../Components/Card/CoursesCard";
import Courses from "./Courses"
import reduxStatus from "constants/reduxStatus"
import { connect } from "react-redux"
import { selectAddStatus } from "store/States/UnCompletedCourses"
import { selectAddStatus as selectChapterAddStatus, AddChapter, Add, selectChapters } from "store/States/Chapters/"
import {
  selectAddStatus as selectContentAddStatus, AddContent, Add as addContent,
  selectContents, Edit, VerifyCourse, selectEditStatus
} from "store/States/Contents"
import { FetchCourses, Fetch, selectCourses } from "store/States/Courses/"

const UncompletedCoures = ({
  unCompletedCourses, addStatus, addContentStatus, postChapter, postContent, addChapterStatus,
  chapters, contents, editStatus, verifyCourse, fetchCourses
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetchLock, setFetchLock] = useState(true);
  const [addLock, setAddLock] = useState(true);
  const [addChapterLock, setAddChapterLock] = useState(true)
  const [addContentLock, setAddContentLock] = useState(true)
  const [editLock, setEditLock] = useState(true);
  const [deleteLock, setDeleteLock] = useState(true);
  console.log("course", unCompletedCourses)
  const _addCourse = () => {
    setAddLock(false)
  }

  const _postChapter = (data) => {
    setAddChapterLock(false)
    postChapter(data)
  }

  const _postContent = (data) => {
    setAddContentLock(false)
    postContent(data)
  }

  const _verifyCourse = (id) => {
    setEditLock(false)
    verifyCourse(id)
  }


  useEffect(() => {
    if (editStatus.status === reduxStatus.success && !editLock) {
      setEditLock(true)
      fetchCourses()
    }
  }, [editStatus, editLock, setEditLock, fetchCourses])

  return (
    <Courses
      doneAdd={addStatus.status === reduxStatus.success && !addLock}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
      doneAddChapter={addChapterStatus.status === reduxStatus.success && !addChapterLock}
      doneAddContent={addContentStatus.status === reduxStatus.success && !addContentLock}
      addCourse={_addCourse}
      postChapter={_postChapter}
      postContent={_postContent}
      courses={unCompletedCourses}
      verifyCourse={_verifyCourse}
      chapters={chapters}
      contents={contents}
    />
    // <Courses />
  )
}

const mapStateToProps = state => ({
  unCompletedCourses: selectCourses(state),
  addStatus: selectAddStatus(state),
  addChapterStatus: selectChapterAddStatus(state),
  addContentStatus: selectContentAddStatus(state),
  chapters: selectChapters(state),
  contents: selectContents(state),
  editStatus: selectEditStatus(state)
})

const mapDispatchToProps = dispatch => ({
  postChapter: data => dispatch(Add(AddChapter(data))),
  postContent: data => dispatch(addContent(AddContent(data))),
  verifyCourse: id => dispatch(Edit(VerifyCourse(id))),
  fetchCourses: () => dispatch(Fetch(FetchCourses()))
})

export default connect(mapStateToProps, mapDispatchToProps)(UncompletedCoures)