import constants from "../constants";
const { Universities } = constants;

const fetchNextUniversities = (page) => {
  return {
    type: Universities.FETCH_UNIVERSITIES,
    page: {
      _page: page._page,
      _limit: page._limit
    }
  };
};

export { fetchNextUniversities };
