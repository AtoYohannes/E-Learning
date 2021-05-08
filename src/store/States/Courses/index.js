import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Courses = new StateArrayModel({ stateName: "courses_new" })

Courses.setInitialState()

Courses.setFetchBody("fetchCourses")
// Categories.setAddBody("postNotice")
// Categories.setDeleteBody("removeNotice")

Courses.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Courses.getSelectors()

export const {
  stateName, reducer
} = Courses.getEntity()

export const {
  Fetch, Add, Remove
} = Courses.getAPIHandles()

export const FetchCourses = () => ({
  query: `query {
    fetchCourses {
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
})

export { selectData as selectCourses }