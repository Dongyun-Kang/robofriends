import { apiCall } from "./api/api";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants.js";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// original code
// export const requestRobots = () => (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   apiCall('https://jsonplaceholder.typicode.com/users')
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// }

// for testing REQUEST_ROBOTS_SUCCESS and REQUEST_ROBOTS_FAILED
export const requestRobots = (
  apiLink = "https://jsonplaceholder.typicode.com/users"
) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    const data = await apiCall(apiLink);
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
