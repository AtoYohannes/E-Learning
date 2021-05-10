import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const EnrolledCourses = new StateArrayModel({ stateName: "enrolledCourses_new" })

EnrolledCourses.setInitialState()

EnrolledCourses.setFetchBody("fetchUserEnrolledCourses")
EnrolledCourses.setAddBody("postCourse")
// Categories.setDeleteBody("removeNotice")

EnrolledCourses.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = EnrolledCourses.getSelectors()

export const {
  stateName, reducer
} = EnrolledCourses.getEntity()

export const {
  Fetch, Add, Remove
} = EnrolledCourses.getAPIHandles()

export const FetchEnrolledCourses = (id) => ({
  query: `query ($id: String!) {
    fetchUserEnrolledCourses(_id: $id) {
      _id
      title
      image
      briefIntroduction
      language
      numberOfChapters
      teacherID
      universityID
      categoryID
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id
  }
})

export const AddCourse = ({
  title, briefIntroduction, language, numberOfChapters, teacherID, universityID, categoryID, image
}) => ({
  query: `mutation(
    $title: String!, $briefIntroduction: String!, $language: String!, $numberOfChapters: Int!,
    $teacherID: String!, $universityID: String!, $categoryID: String!, $image: String!
  ) {
    postCourse(CourseInput: {
      title: $title,
      briefIntroduction: $briefIntroduction,
      language: $language,
      numberOfChapters: $numberOfChapters,
      teacherID: $teacherID,
      universityID: $universityID,
      categoryID: $categoryID,
      image: $image
    }) {
      _id
      title
      image
      briefIntroduction
      language
      numberOfChapters
      teacherID
      universityID
      categoryID
    }
  }`,
  variables: {
    title, briefIntroduction, language,
    numberOfChapters: Number(numberOfChapters),
    teacherID, universityID, categoryID, image
  }
})

export { selectData as selectEnrolledCourses }