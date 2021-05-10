export const resolveUniversity = (_id, universities) => {
  const foundUniversity = universities.find(
    (university) => university._id === _id
  );
  return foundUniversity ? foundUniversity.name : "";
};

export const resolveTeacher = (_id, teachers, getFullData = false) => {
  const foundTeacher = teachers.find((teacher) => teacher._id === _id);
  if (getFullData) {
    return foundTeacher ? foundTeacher : {};
  } else {
    return foundTeacher
      ? foundTeacher.firstName + " " + foundTeacher.lastName
      : "";
  }
};

export const getCourseChapters = (courseID, chapters = []) => {
  const filteredChapters = [];
  chapters.forEach((chapter) => {
    if (chapter.courseID === courseID) {
      filteredChapters.push(chapter);
    }
  });
  return filteredChapters;
};

export const getRequestedCourses = (
  studentID,
  enrollmentRequests = [],
  courses = []
) => {
  const studentEnrollmentRequests = enrollmentRequests.filter(
    (request) => request.studentID === studentID
  );
  const studentCourses = [];
  studentEnrollmentRequests.map((request) => {
    const foundCourse = courses.find(
      (course) => String(request.courseID) === String(course._id)
    );
    if (foundCourse) {
      studentCourses.push(foundCourse);
    }
  });
  return studentCourses;
};

export const getAllRequestedCourses = (
  enrollmentRequests = [],
  courses = []
) => {
  const studentCourses = [];
  enrollmentRequests.map((request) => {
    const foundCourse = courses.find(
      (course) => String(request.courseID) === String(course._id)
    );
    if (foundCourse) {
      studentCourses.push({
        ...foundCourse,
        ...request,
        requestID: request._id,
      });
    }
  });
  return studentCourses;
};

export const checkIfCourseIsEnrolled = (courseID, enrolledCourses = []) => {
  const filteredCourse = [];
  enrolledCourses.forEach((course) => {
    if (String(course._id) === String(courseID)) {
      filteredCourse.push(course);
    }
  });
  return filteredCourse.length > 0;
};

export const getEnrolledCourses = (
  studentID,
  enrollments = [],
  courses = []
) => {
  const studentEnrollmentRequests = enrollments.filter(
    (request) => request.studentID === studentID
  );
  const studentCourses = [];
  studentEnrollmentRequests.map((request) => {
    const foundCourse = courses.find(
      (course) => String(request.courseID) === String(course._id)
    );
    if (foundCourse) {
      studentCourses.push(foundCourse);
    }
  });
  return studentCourses;
};

export const checkIfCourseIsPendingApproval = (
  studentID,
  courseID,
  enrollmentRequests = []
) => {
  const studentEnrollmentRequests = enrollmentRequests.filter(
    (request) => request.studentID === studentID
  );
  const foundIndex = studentEnrollmentRequests.findIndex(
    (request) => request.courseID === courseID
  );
  return foundIndex >= 0;
};

export const getContentsFromChapter = (chapterID, contents = []) => {
  const foundContents = [];
  contents.forEach((content) => {
    if (String(content.chapterID) == String(chapterID)) {
      foundContents.push(content);
    }
  });
  return foundContents;
};

export const getSingleContentFromChapter = (contentID, contents = []) => {
  const foundContent = contents.find(
    (content) => String(content._id) === String(contentID)
  );
  return foundContent ? foundContent : {};
};

export const getNextContent = (contentID, contents = []) => {
  const foundContentIndex = contents.findIndex(
    (content) => String(content._id) === String(contentID)
  );
  if (foundContentIndex >= 0) {
    return foundContentIndex === contents.length - 1
      ? null
      : contents[foundContentIndex + 1];
  } else {
    return null;
  }
};

export const getPrevContent = (contentID, contents = []) => {
  const foundContentIndex = contents.findIndex(
    (content) => String(content._id) === String(contentID)
  );
  if (foundContentIndex >= 0) {
    return foundContentIndex === 0 ? null : contents[foundContentIndex - 1];
  } else {
    return null;
  }
};

export const checkCourseVerification = (
  course = { _id: "" },
  chapters = [],
  contents = []
) => {
  const foundChapters = [];
  chapters.forEach((chapter) => {
    if (String(course._id) === String(chapter.courseID)) {
      foundChapters.push(chapter);
    }
  });
  if (foundChapters.length === 0) {
    return false;
  }
  const foundContents = [];
  contents.forEach((content) => {
    if (String(content.chapterID) === String(foundChapters[0]._id)) {
      foundContents.push(content);
    }
  });

  return foundContents.length > 0;
};

export const getSingleCourse = (courseID, courses = []) => {
  const foundCourse = courses.find(
    (course) => String(course._id) === String(courseID)
  );
  return foundCourse ? foundCourse : {};
};

export const isCourseAvailable = (courseID, courses = []) => {
  const obj = getSingleCourse(courseID, courses);
  return Object.keys(obj).length > 0;
};
