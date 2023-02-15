import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

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
    deviceAddress: "Azzurro",
    deviceLocation: "Azzurro",
    item1: 5,
    item2: 4,
    item3: 10,
    item4: 4,
  },
  {
    id: 2,
    deviceAddress: "Craft",
    deviceLocation: "Craft",
    item1: 5,
    item2: 4,
    item3: 10,
    item4: 4,
  },
  {
    id: 3,
    deviceAddress: "Royal",
    deviceLocation: "Royal",
    item1: 5,
    item2: 4,
    item3: 10,
    item4: 4,
  },
  {
    id: 4,
    deviceAddress: "LaBocca ",
    deviceLocation: "LaBocca",
    item1: 5,
    item2: 4,
    item3: 10,
    item4: 4,
  },
  {
    id: 5,
    deviceAddress: "Styx",
    deviceLocation: "Styx",
    item1: 5,
    item2: 4,
    item3: 10,
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
