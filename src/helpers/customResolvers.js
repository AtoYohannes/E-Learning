export const resolveUniversity = (_id, universities) => {
  const foundUniversity = universities.find(university => university._id === _id)
  return foundUniversity? foundUniversity.name : ""
}

export const resolveTeacher = (_id, teachers, getFullData = false) => {
  const foundTeacher = teachers.find(teacher => teacher._id === _id)
  if (getFullData) {
    return foundTeacher? foundTeacher : {}
  } else {
    return foundTeacher? foundTeacher.firstName + " " + foundTeacher.lastName : ""
  }
}

export const getCourseChapters = (courseID, chapters = []) => {
  const filteredChapters = []
  chapters.forEach(chapter => {
    if (chapter.courseID === courseID) {
      filteredChapters.push(chapter)
    }
  })
  return filteredChapters
}

export const getRequestedCourses = (studentID, enrollmentRequests = [], courses = []) => {
  const studentEnrollmentRequests = enrollmentRequests.filter(request => request.studentID === studentID)
  const studentCourses = []
  studentEnrollmentRequests.map(request => {
    const foundCourse = courses.find(course => String(request.courseID) === String(course._id))
    if (foundCourse) {
      studentCourses.push(foundCourse)
    }
  })
  return studentCourses
}

export const getEnrolledCourses = (studentID, enrollments = [], courses = []) => {
  const studentEnrollmentRequests = enrollments.filter(request => request.studentID === studentID)
  const studentCourses = []
  studentEnrollmentRequests.map(request => {
    const foundCourse = courses.find(course => String(request.courseID) === String(course._id))
    if (foundCourse) {
      studentCourses.push(foundCourse)
    }
  })
  return studentCourses
}

export const checkIfCourseIsPendingApproval = (studentID, courseID, enrollmentRequests = []) => {
  const studentEnrollmentRequests = enrollmentRequests.filter(request => request.studentID === studentID)
  const foundIndex = studentEnrollmentRequests.findIndex(request => request.courseID === courseID)
  return foundIndex >= 0
}