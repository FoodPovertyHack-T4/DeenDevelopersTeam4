import React, { useState, useEffect } from "react";
import { db } from "./Utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { calculate_age } from "./Utils/helperfunctions";

const columns = [
  { field: "id", headerName: "ID", width: 70, hide: true },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    flex: 2
  },
  {
    field: "dob",
    headerName: "Age",
    type: "number",
    width: 90,
    flex: 1 
  },
  {
    field: "provision",
    headerName: "Provision",
    width: 90,
    flex: 2 
  },
  {
    field: "camp",
    headerName: "Camp",
    width: 90,
    flex: 2 
  },
  {
    field: "date",
    headerName: "Date",
    width: 90,
    flex: 2 
  },
  {
    field: "view",
    flex: 1, 
    headerName: "View/Edit",
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <Button variant="contained" onClick={onClick}>
          View
        </Button>
      );
    },
  },
];

const DataTable = ({ data }) => {
  const [rowsState, setRowsState] = useState([]);


  const newRow = data.map((row) => ({
    id: row.id,
    firstName: row.firstName,
    lastName: row.lastName,
    dob: calculate_age(row.DOB),
    camp: row.campName != null ? row.campName : "One Nation",
    provision: row.provisionName != null ? row.provisionName : "Food Parcel",
    date: row.date != null ? row.date : new Date(),
  }));


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={newRow}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{ my: 4 }}
      />
    </div>
  );
};

export default DataTable;
