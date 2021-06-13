import constants from "../constants";

export default function errorReducer(state = null, action) {
  const { Universities } = constants;
  switch (action.type) {
    case Universities.FETCH_UNIVERSITIES_FAILURE:
      return action.error;
    case Universities.FETCH_UNIVERSITIES_SUCCESS:
      return null;
    default:
      return state;
  }
}
