  import {ColDef} from "ag-grid-community";
  
  export const markColumns: ColDef[] = [
    { field: "id", headerName: "ID", maxWidth: 100 },
    {
      field: "name",
      headerName: "Nome",
      width: 1000,
    },
  ];