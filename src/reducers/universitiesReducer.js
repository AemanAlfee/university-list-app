import constants from "../constants";

export default function universitiesReducer(state = {}, action) {
  const { Universities } = constants;
  const { universities = [], _page } = action.payload || {};
  switch (action.type) {
    case Universities.FETCH_UNIVERSITIES_SUCCESS:
      return { ...state, [_page]: universities };
    default:
      return state;
  }
}
