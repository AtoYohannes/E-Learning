import { stateName as category, reducer as CategoryReducer } from "./States/Categories"
import { stateName as courses, reducer as CourseReducer } from "./States/Courses"
import { stateName as enrolled_courses, reducer as EnrolledCourseReducer } from "./States/EnrolledCourses"
import { stateName as university, reducer as UniversityReducer } from "./States/Universities"
import { stateName as teacher, reducer as TeacherReducer } from "./States/Teachers"
import { stateName as buffer, reducer as BufferReducer } from "./States/Buffer"
import { stateName as user, reducer as UserReducer } from "./States/User"
import { stateName as chapter, reducer as ChapterReducer } from "./States/Chapters"
import { stateName as enrollment_request, reducer as EnrollmentRequestReducer } from "./States/EnrollmentRequests"
import { stateName as enrollment, reducer as EnrollmentReducer } from "./States/Enrollments"
import { stateName as student, reducer as StudentReducer } from "./States/Students"
import { stateName as content, reducer as ContentReducer } from "./States/Contents"
import { stateName as unverified_courses, reducer as UnVerifiedCourseReducer } from "./States/UnCompletedCourses"

export default {
  [category]: CategoryReducer,
  [courses]: CourseReducer,
  [enrolled_courses]: EnrolledCourseReducer,
  [university]: UniversityReducer,
  [teacher]: TeacherReducer,
  [buffer]: BufferReducer,
  [user]: UserReducer,
  [chapter]: ChapterReducer,
  [enrollment_request]: EnrollmentRequestReducer,
  [enrollment]: EnrollmentReducer,
  [student]: StudentReducer,
  [content]: ContentReducer,
  [unverified_courses]: UnVerifiedCourseReducer
}