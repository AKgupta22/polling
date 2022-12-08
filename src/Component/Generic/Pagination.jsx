import React, { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { useSelector } from "react-redux";

export default function Pagination({ data, setData }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [count, setCount] = useState(0);
  const state = useSelector((state) => state.PollFetchReducer);

  useEffect(() => {
    setCount(state.data.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isSuccess]);

  useEffect(() => {
    let tempData = [...state.data];
    const startIndex = page * rowsPerPage;
    const lastIndex = (startIndex + 1) * rowsPerPage - 1;
    tempData = tempData.slice(startIndex, lastIndex);
    setData(tempData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage, page, state.isSuccess]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      className="d-flex justify-content-center pagination"
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
