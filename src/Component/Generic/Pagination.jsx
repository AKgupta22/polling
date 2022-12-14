import React, { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { useSelector } from "react-redux";

export default function Pagination({ setData }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const pollListState = useSelector((state) => state.pollFetchReducer);
  // const pollDelState = useSelector((state) => state.PollDelReducer);

  useEffect(() => {
    setCount(pollListState.data.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollListState.isSuccess]);

  useEffect(() => {
    let tempData = [...pollListState.data];
    const startIndex = page * rowsPerPage;
    const lastIndex = startIndex + rowsPerPage;
    tempData = tempData.slice(startIndex, lastIndex);
    if (tempData.length <= 0) {
      if (count > 0) setPage((prev) => prev - 1);
    }
    setData(tempData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage, page, pollListState.isSuccess]);

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
      rowsPerPageOptions={[5, 10, 15]}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
React.memo(Pagination);
