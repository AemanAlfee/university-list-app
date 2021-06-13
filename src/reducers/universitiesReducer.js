import constants from "../constants";

export default function universitiesReducer(state = {}, action) {
  const { Universities } = constants;
  switch (action.type) {
    case Universities.FETCH_UNIVERSITIES_SUCCESS:
      return action.universities;
    default:
      return state;
  }
}
