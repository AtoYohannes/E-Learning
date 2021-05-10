import React, { useReducer, useEffect } from "react"
import CommonModals from "common/CommonModal";
import { initialState, reducer, _toggle } from "common/ModalOptions";
import { Card, Col, Row, Button } from "reactstrap";
import CoursesCard from "../../../../Components/Card/CoursesCard";
import AddChapterForm from "./AddChapter"
import AddContentForm from "./AddContent"
import ViewContents from "./ViewContents"

export default ({
  courses, contents, doneAdd, doneEdit, postChapter,
  doneAddChapter, doneAddContent, chapters, postContent,
  verifyCourse
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (doneAdd || doneEdit || doneAddChapter || doneAddContent) {
      _toggle({ type: "CLOSE" }, dispatch);
    }

    if (doneEdit) {
      console.log("Verified")
    }
  }, [doneAdd, doneEdit, doneAddChapter, doneAddContent]);


  const setCurrentCourse = (course) => {
    _toggle(
      {
        type: "EDIT",
        Component: AddChapterForm,
        submit: postChapter,
        title: "New Chapter",
        size: "md",
        data: {
          courseID: course._id
        },
        options: {
          courses
        }
      },
      dispatch
    )
  }

  const setCurrentContent = (chapter) => {
    console.log("here", chapter)
    _toggle(
      {
        type: "EDIT",
        Component: AddContentForm,
        submit: (data) => {
          // console.log('one', data)
          postContent(data)
        },
        title: "New Content",
        size: "md",
        data: {
          chapterID: chapter._id
        },
        options: {
          chapters
        }
      },
      dispatch
    )
  }

  const viewCurrentContents = (chapter) => {
    console.log("here", chapter)
    _toggle(
      {
        type: "EDIT",
        Component: ViewContents,
        title: "View Content",
        size: "md",
        data: {
          chapterID: chapter._id
        },
        options: {
          contents
        }
      },
      dispatch
    )
  }

  return (
    <>
      <CommonModals
        size="xl"
        data={state.data}
        openModal={state.openModal}
        component={state.Component}
        toggle={_toggle}
        dispatch={dispatch}
        title={state.title}
      />
      <h5>Completed Courses</h5>
      <hr />
      <Row>
        {courses.map((course, index) => (
          <Col md={6} sm={12}>
            <CoursesCard index={index} course={course} disable={true} title="Add Chapter"
              addChapter={() => {
                setCurrentCourse(course)
              }}
              addContent={(data) => {
                console.log("oio", data)
                setCurrentContent(data)
              }}
              viewContent={(data) => {
                viewCurrentContents(data)
              }}
              verifyCourse={(id) => verifyCourse(id)}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}