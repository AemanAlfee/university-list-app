import { put, takeEvery, all, call } from "redux-saga/effects";
import constants from "../constants";
import axios from "axios";

const { Universities, apiRoute } = constants;

const fetchUniversties = function* fetchUniversties(action) {
  try {
    const {
      page: { _page, _limit }
    } = action;
    const universities = yield call(fetchUniverstiesData, _page, _limit);
    yield put({
      type: Universities.FETCH_UNIVERSITIES_SUCCESS,
      universities
    });
  } catch (error) {
    yield put({ type: Universities.FETCH_UNIVERSITIES_FAILURE, error });
  }
};

const watchFetchUniversities = function* watchFetchUniversities() {
  yield takeEvery(Universities.FETCH_UNIVERSITIES, fetchUniversties);
};

const rootSaga = function* rootSaga() {
  yield all([watchFetchUniversities()]);
};

const fetchUniverstiesData = (page, limit) => {
  let reqURL = `${apiRoute}?_page=${page}&_limit=${limit}`;
  return axios.get(reqURL).then((response) => {
    return response;
  });
};

export default rootSaga;
