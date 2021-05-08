import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Universities = new StateArrayModel({ stateName: "universities_new" })

Universities.setInitialState()

Universities.setFetchBody("fetchUniversities")

Universities.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Universities.getSelectors()

export const {
  stateName, reducer
} = Universities.getEntity()

export const {
  Fetch, Add, Remove
} = Universities.getAPIHandles()

export const FetchUniversities = () => ({
  query: `query {
    fetchUniversities {
      _id
      name
      description
      image
      createdAt
      updatedAt
    }
  }`,
})

export { selectData as selectUniversities }