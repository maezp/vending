import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "deviceLocation", headerName: "Device Location", width: 140 },
  { field: "deviceAddress", headerName: "Device address", width: 140 },
  {
    field: "item1",
    headerName: "Item 1",
    type: "number",
    width: 70,
  },
  {
    field: "item2",
    headerName: "Item 2",
    type: "number",
    width: 70,
  },
  {
    field: "item3",
    headerName: "Item 3",
    type: "number",
    width: 70,
  },
  {
    field: "item4",
    headerName: "Item 4",
    type: "number",
    width: 70,
  },
];

const rows = [
  {
    id: 1,
    deviceLocation: "Snow",
    deviceAddress: "Jon",
    item1: 5,
    item2: 3,
    item3: 5,
    item4: 4,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
