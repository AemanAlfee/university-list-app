import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationComp = ({ total, limit, page, handlePagination }) => {
  let totalPages = Math.ceil(total / limit);
  return (
    <Pagination
      className="page-center"
      count={totalPages}
      page={page}
      onChange={handlePagination}
    />
  );
};

export default PaginationComp;
