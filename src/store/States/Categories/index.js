import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Categories = new StateArrayModel({ stateName: "categories_new" })

Categories.setInitialState()

Categories.setFetchBody("fetchCategories")
Categories.setAddBody("postCategory")
Categories.setEditBody("editCategory")
Categories.setDeleteBody("removeCategory")

Categories.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Categories.getSelectors()

export const {
  stateName, reducer
} = Categories.getEntity()

export const {
  Fetch, Add, Remove, Edit
} = Categories.getAPIHandles()

export const FetchCategories = () => ({
  query: `query {
    fetchCategories {
      _id
      name
      createdAt
      updatedAt
    }
  }`,
})

export const AddCategory = (name) => ({
  query: `mutation ($name: String!) {
    postCategory(CategoryInput: {
      name: $name
    }) {
      _id
      name
      createdAt
      updatedAt
    }
  }`,
  variables: {
    name
  }
})

export const EditCategory = (id, name) => ({
  query: `mutation ($id: String!, $name: String!) {
    editCategory(CategoryEdit: {
      _id: $id,
      name: $name
    }) {
      _id
      name
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id, name
  }
})

export const RemoveCategory = (id) => ({
  query: `mutation ($id: String!) {
    removeCategory(_id: $id) {
      _id
      name
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id
  }
})

export { selectData as selectCategories }