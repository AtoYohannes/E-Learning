import { Fetch as FetchRestaurants } from "store/Restaurants";
import { Fetch as fetchFoods } from "store/Foods";
import { Fetch as fetchCategories } from "store/Categories";
import { Fetch as fetchUniversities, FetchUniversities } from "../store/States/Universities/"
import { Fetch as fetchTeachers, FetchTeachers } from "../store/States/Teachers"
import { Fetch as fetchChapters, FetchChapters } from "../store/States/Chapters"

export default () => dispatch => {
  dispatch(FetchRestaurants());
  dispatch(fetchFoods());
  dispatch(fetchCategories());
  dispatch(fetchUniversities(FetchUniversities()))
  dispatch(fetchTeachers(FetchTeachers()))
  dispatch(fetchChapters(FetchChapters()))
};
