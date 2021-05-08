import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Categories = new StateArrayModel({ stateName: "categories_new" })

Categories.setInitialState()

Categories.setFetchBody("fetchCategories")
// Categories.setAddBody("postNotice")
// Categories.setDeleteBody("removeNotice")

Categories.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Categories.getSelectors()

export const {
  stateName, reducer
} = Categories.getEntity()

export const {
  Fetch, Add, Remove
} = Categories.getAPIHandles()

export const FetchCategories = () => ({
  query: `query {
    fetchCategories {
      _id
      name
    }
  }`,
})

export { selectData as selectCategories }