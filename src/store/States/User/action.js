export const PostUser = ({
  firstName,
  lastName,
  email,
  password,
  image,
  externalID
}) => ({
  query: `mutation (
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $image: String!,
    $password: String!,
    $externalID: String
  ) {
    postUser(UserInput: {
      firstName: $firstName,
      lastName: $lastName,
      image: $image,
      email: $email,
      password: $password,
      userType: "STUDENT",
      externalID: $externalID,
    }) {
      _id
      firstName
      enrolledCourses
      completedCourses
      lastName
      email
      password
      image
      externalID
      userType
      numberOfCoursesEnrolled
      numberOfCoursesCompleted
      updatedAt
      createdAt
    }
  }`,
  variables: {
    firstName,
    lastName,
    image,
    email,
    password,
    externalID
  }
})

export const PostTeacherAccount = ({
  firstName,
  lastName,
  email,
  externalID
}) => ({
  query: `mutation (
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $password: String!,
    $externalID: String
  ) {
    postUser(UserInput: {
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      password: $password,
      userType: "STUDENT",
      image: "",
      externalID: $externalID,
    }) {
      _id
      firstName
      enrolledCourses
      completedCourses
      lastName
      email
      password
      externalID
      userType
      image
      numberOfCoursesEnrolled
      numberOfCoursesCompleted
      updatedAt
      createdAt
    }
  }`,
  variables: {
    firstName,
    lastName,
    email,
    password: "12345678",
    externalID
  }
})

export const LoginBody = ({ email, password }) => ({
  query: `mutation (
    $email: String!,
    $password: String!
  ) {
    login(input: {
      email: $email,
      password: $password,
    }) {
      _id
      firstName
      lastName
      enrolledCourses
      completedCourses
      email
      password
      userType
      externalID
      numberOfCoursesEnrolled
      numberOfCoursesCompleted
      error {
        type
        message
      }
    }
  }`,
  variables: {
    email, password
  }
})