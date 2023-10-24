import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Table = ({ columns, rows }) => {
  return (
    <DataGrid
      className="data-grid"
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      getRowId={(row) => row.sales_id}
      //   checkboxSelection
    />
  );
};

export default Table;
