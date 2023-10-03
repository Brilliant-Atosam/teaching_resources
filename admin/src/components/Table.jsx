import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Table({ rows, columns }) {
  return (
    <div className="table-container">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 10]}
        // checkboxSelection
      />
    </div>
  );
}
