import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Teachers = new StateArrayModel({ stateName: "teachers_new" })

Teachers.setInitialState()

Teachers.setFetchBody("fetchTeachers")

Teachers.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Teachers.getSelectors()

export const {
  stateName, reducer
} = Teachers.getEntity()

export const {
  Fetch, Add, Remove
} = Teachers.getAPIHandles()

export const FetchTeachers = () => ({
  query: `query {
    fetchTeachers {
      _id
      firstName
      lastName
      email
      qualification
      briefIntroduction
      image
      createdAt
      updatedAt
    }
  }`,
})

export { selectData as selectTeachers }