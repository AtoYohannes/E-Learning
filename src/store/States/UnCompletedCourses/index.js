import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const UnVerifiedCourses = new StateArrayModel({ stateName: "unverified_courses_new" })

UnVerifiedCourses.setInitialState()

UnVerifiedCourses.setFetchBody("fetchUnverifiedCourses")
// Categories.setAddBody("postNotice")
// Categories.setDeleteBody("removeNotice")

UnVerifiedCourses.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = UnVerifiedCourses.getSelectors()

export const {
  stateName, reducer
} = UnVerifiedCourses.getEntity()

export const {
  Fetch, Add, Remove
} = UnVerifiedCourses.getAPIHandles()

export const FetchUnVerifiedCourses = () => ({
  query: `query {
    fetchUnverifiedCourses {
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
})

export const AddCourse = ({
  title, briefIntroduction, language, numberOfChapters, teacherID, universityID, categoryID
}) => ({
  query: `mutation(
    $title: String!, $briefIntroduction: String!, $language: String!, $numberOfChapters: String!,
    $teacherID: String!, $universityID: String!, $categoryID: String!
  ) {
    postCourse(CourseInput: {
      title: $title,
      briefIntroduction: $title,
      language: $language,
      numberOfChapters: $numberOfChapters,
      teacherID: $teacherID,
      universityID: $universityID,
      categoryID: $categoryID
    }) {
      _id
      title
      briefIntroduction
      language
      numberOfChapters
      teacherID
      universityID
      categoryID
    }
  }`,
  variables: {
    title, briefIntroduction, language, numberOfChapters, teacherID, universityID, categoryID
  }
})

export { selectData as selectUnVerifiedCourses }