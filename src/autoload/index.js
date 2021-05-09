import { Fetch as fetchUniversities, FetchUniversities } from "../store/States/Universities/"
import { Fetch as fetchTeachers, FetchTeachers } from "../store/States/Teachers"
import { Fetch as fetchChapters, FetchChapters } from "../store/States/Chapters"
import { Fetch as fetchEnrollmentRequests, FetchEnrollmentRequests } from "../store/States/EnrollmentRequests"
import { Fetch as fetchEnrollments, FetchEnrollments } from "../store/States/Enrollments"
import { Fetch as fetchCategories, FetchCategories } from "../store/States/Categories"
import { Fetch as fetchStudents, FetchStudents } from "../store/States/Students"

export default () => dispatch => {
  dispatch(fetchUniversities(FetchUniversities()))
  dispatch(fetchTeachers(FetchTeachers()))
  dispatch(fetchChapters(FetchChapters()))
  dispatch(fetchEnrollmentRequests(FetchEnrollmentRequests()))
  dispatch(fetchEnrollments(FetchEnrollments()))
  dispatch(fetchCategories(FetchCategories()))
  dispatch(fetchStudents(FetchStudents()))
};
