import React, { useEffect, useState } from "react";
import constants from "../constants";
import axios from "axios";
import Container from "@material-ui/core/Container";
import UniversityCard from "./UniversityCard";
import "./University.css";
import PaginationComp from "./PaginationComp";

const Universities = () => {
  const { apiRoute, pageLimit, totalHeader } = constants;
  const [total, setTotal] = useState(0);
  const [universities, setUniversities] = useState([]);

  const params = new URLSearchParams(window?.location?.search).get("page");

  const [page, setPage] = useState(Number(params) || 1);

  const handlePagination = (e, page) => {
    window.history.pushState({}, "Universities", `/?page=${page}`);
    setPage(page);
  };

  useEffect(() => {
    const handleUniversityList = async () => {
      const url = `${apiRoute}?_page=${page}&_limit=${pageLimit}`;
      axios.get(url).then((response) => {
        setTotal(Number(response.headers[totalHeader]));
        setUniversities(response.data);
      });
    };
    handleUniversityList();
  }, [page, apiRoute, pageLimit, totalHeader]);
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
