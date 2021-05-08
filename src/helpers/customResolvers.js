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
  console.log("here", courseID)
  chapters.forEach(chapter => {
    if (chapter.courseID === courseID) {
      filteredChapters.push(chapter)
    }
  })
  return filteredChapters
}