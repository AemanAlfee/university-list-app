import React, { useEffect, useState } from "react";
import { fetchNextUniversities } from "../../actions";
import constants from "../../constants";
import Container from "@material-ui/core/Container";
import UniversityCard from "./UniversityCard";
import "./University.css";
import PaginationComp from "./PaginationComp";
import { useDispatch, useSelector } from "react-redux";

const Universities = () => {
  const { pageLimit, totalHeader } = constants;
  const universitiesData = useSelector(
    (state) => (state && state.universities) || {}
  );
  const {
    data: universities = [],
    headers: { [totalHeader]: total } = {}
  } = universitiesData;

  const params = new URLSearchParams(window?.location?.search).get("page");

  const [page, setPage] = useState(Number(params) || 1);

  const dispatch = useDispatch();

  const handlePagination = (e, page) => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
    setPage(page);
    window.history.pushState({}, "Universities", `/?page=${page}`);
  };

  useEffect(() => {
    dispatch(fetchNextUniversities({ _page: page, _limit: pageLimit }));
  }, [page, dispatch, pageLimit]);

  return (
    <Container>
      <h2 className="align-center">Universities</h2>
      {!!universities.length &&
        universities.map((university, index) => (
          <React.Fragment key={`unversity-${index + 1}`}>
            <UniversityCard
              university={university}
              index={(page - 1) * pageLimit + index}
            />
          </React.Fragment>
        ))}
      <PaginationComp
        total={total}
        limit={pageLimit}
        page={page}
        handlePagination={handlePagination}
      />
    </Container>
  );
};

export default Universities;
