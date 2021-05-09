import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

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

export const PostEnrollmentRequest = ({ courseID, studentID }) => ({
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
})

export { selectData as selectEnrollmentRequests }