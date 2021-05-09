import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Universities = new StateArrayModel({ stateName: "universities_new" })

Universities.setInitialState()

Universities.setFetchBody("fetchUniversities")
Universities.setAddBody("postUniversity")
Universities.setEditBody("editUniversity")
Universities.setDeleteBody("removeUniversity")

Universities.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Universities.getSelectors()

export const {
  stateName, reducer
} = Universities.getEntity()

export const {
  Fetch, Add, Remove, Edit
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

export const AddUniversity = (name, description) => ({
  query: `mutation($name: String!, $description: String!, $image: String!) {
    postUniversity(UniversityInput: {
      name: $name,
      description: $description,
      image: $image
    }) {
      _id
      name
      description
      image
      error {
        type
        message
      }
      createdAt
      updatedAt
    }
  }`,
  variables: {
    name, description, image: "some"
  }
})

export const EditUniversity = (id, name, description) => ({
  query: `mutation($id: String!, $name: String!, $description: String!, $image: String!) {
    editUniversity(UniversityEdit: {
      _id: $id,
      name: $name,
      description: $description,
      image: $image
    }) {
      _id
      name
      description
      image
      error {
        type
        message
      }
      createdAt
      updatedAt
    }
  }`,
  variables: {
    name, description, image: "some", id
  }
})

export const RemoveUniversity = (id) => ({
  query: `mutation($id: String!) {
    removeUniversity(_id: $id) {
      _id
      name
      description
      image
      error {
        type
        message
      }
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id
  }
})

export { selectData as selectUniversities }