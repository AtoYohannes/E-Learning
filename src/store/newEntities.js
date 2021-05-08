import { stateName as category, reducer as CategoryReducer } from "./States/Categories"
import { stateName as courses, reducer as CourseReducer } from "./States/Courses"
import { stateName as university, reducer as UniversityReducer } from "./States/Universities"
import { stateName as teacher, reducer as TeacherReducer } from "./States/Teachers"
import { stateName as buffer, reducer as BufferReducer } from "./States/Buffer"
import { stateName as chapter, reducer as ChapterReducer } from "./States/Chapters"

export default {
  [category]: CategoryReducer,
  [courses]: CourseReducer,
  [university]: UniversityReducer,
  [teacher]: TeacherReducer,
  [buffer]: BufferReducer,
  [chapter]: ChapterReducer
}