import StateArrayModel from "../../../wrappers/StateModels/StateArrayModelGQL"

const Students = new StateArrayModel({ stateName: "students_new" })

Students.setInitialState()
Students.setFetchBody("fetchStudents")
Students.setAddBody("postStudent")
Students.setEditBody("editStudent")
Students.setDeleteBody("removeStudent")

Students.createSlice()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = Students.getSelectors()

export const {
  stateName, reducer
} = Students.getEntity()

export const {
  Fetch, Add, Remove, Edit
} = Students.getAPIHandles()

export const FetchStudents = () => ({
  query: `query {
    fetchStudents {
      _id
      firstName
      lastName
      email
      numberOfCoursesEnrolled
      numberOfCoursesCompleted
      createdAt
      updatedAt
    }
  }`,
})

export const AddStudent = ({
  firstName, lastName, email
}) => ({
  query: `mutation (
    $firstName: String!,
    $lastName: String!,
    $email: String!,
  ) {
    postStudent(StudentInput: {
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
    }) {
      _id
      firstName
      lastName
      email
      numberOfCoursesEnrolled
      numberOfCoursesCompleted
      updatedAt
      createdAt
    }
  }`,
  variables: {
    firstName, lastName, email
  }
})

export const EditStudent = ({
  id, firstName, lastName, email, qualification, briefIntroduction
}) => ({
  query: `mutation(
    $id: String!, $firstName: String!, $lastName: String!, $email: String!,
    $qualification: String!, $briefIntroduction: String!
  ) {
    editStudent(StudentEdit: {
      _id: $id,
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      qualification: $qualification,
      briefIntroduction: $briefIntroduction,
      image: "some_image"
    }) {
      _id
      firstName
      lastName
      email
      qualification
      briefIntroduction
      image
      createdAt
      updatedAt
      error {
        type
        message
      }
    }
  }`,
  variables: {
    id, firstName, lastName, email, qualification, briefIntroduction
  }
})

export const RemoveStudent = (id) => ({
  query: `mutation($id: String!) {
    removeStudent(_id: $id) {
      _id
      firstName
      lastName
      email
      qualification
      briefIntroduction
      image
      createdAt
      updatedAt
      error {
        type
        message
      }
    }
  }`,
  variables: {
    id
  }
})

export { selectData as selectStudents }