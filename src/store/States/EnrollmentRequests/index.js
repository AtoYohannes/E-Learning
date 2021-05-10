import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"
import { store } from "../../../index"
import { selectUserContent } from "../User/"

const EnrollmentRequests = new StateArrayModel({ stateName: "enrollmentRequests_new" })

EnrollmentRequests.setInitialState()

EnrollmentRequests.setFetchBody("fetchEnrollmentRequests")
EnrollmentRequests.setAddBody("postEnrollmentRequest")
// EnrollmentRequests.setDeleteBody("removeNotice")

EnrollmentRequests.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = EnrollmentRequests.getSelectors()

export const {
  stateName, reducer
} = EnrollmentRequests.getEntity()

export const {
  Fetch, Add, Remove
} = EnrollmentRequests.getAPIHandles()

export const FetchEnrollmentRequests = () => ({
  query: `query {
    fetchEnrollmentRequests {
      _id
      studentID
      courseID
      createdAt
      updatedAt
    }
  }`,
})

export const PostEnrollmentRequest = ({ courseID }) => {
  const studentID = selectUserContent(store.getState()).userData.externalID
    return {
    query: `mutation($studentID: String!, $courseID: String!) {
      postEnrollmentRequest(EnrollmentRequestInput: {
        studentID: $studentID,
        courseID: $courseID
      }) {
        _id
        studentID
        courseID
        createdAt
        updatedAt
      }
    }`,
    variables: {
      courseID, studentID
    }
  }
}

export const RemoveEnrollementRequest = (id) => ({
  query: `mutation ($id: String!) {
    removeEnrollmentRequest(_id: $id) {
      _id
      studentID
      courseID
      createdAt
      updatedAt
    }
  }`,
  variables: {
    id
  }
})

export { selectData as selectEnrollmentRequests }