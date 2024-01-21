/** @format */
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import {Grid} from "@mui/material";
import {AgGridReact} from "ag-grid-react";
import {IMark} from "../../../../models/Mark";
import {defaultColDef} from "../../../shared/table/TableProperties";
import {markColumns} from "./Columns";

interface IMarksTable {
  marks: IMark[];
}

export default function MarksTable({marks}: IMarksTable) {
  return (
    <Grid container direction="row" sx={{px: 30, mb: 10, mt: 10}}>
      <div style={{height: 500, width: 1500}} className="ag-theme-alpine">
        <AgGridReact<IMark>
          rowData={marks}
          columnDefs={markColumns}
          pagination
          paginationPageSize={10}
          defaultColDef={defaultColDef}
        />
      </div>
    </Grid>
  );
}
