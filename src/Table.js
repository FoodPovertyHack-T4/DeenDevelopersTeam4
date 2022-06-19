import React, { useState, useEffect } from "react";
import { db } from "./Utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { calculate_age } from "./Utils/helperfunctions";
import FamilySummaryModal from "./components/Modal/FamilySummary";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const columns = [
  { field: "id", headerName: "ID", width: 70, hide: true },
  {
    field: "familyName",
    headerName: "Family Name",
    sortable: true,
    width: 160,
    flex: 2,
  },
  {
    field: "provision",
    headerName: "Provision",
    width: 90,
    flex: 2,
  },
  {
    field: "camp",
    headerName: "Camp",
    width: 90,
    flex: 2,
  },
  {
    field: "date",
    headerName: "Date",
    width: 90,
    flex: 2,
  },
  {
    field: "details",
    flex: 1,
    headerName: "Details",
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

      return <FamilySummaryModal />;
    },
  },
];

const DataTable = ({ data }) => {
  const [rowsState, setRowsState] = useState([]);

  const newRow = data.map((row) => ({
    id: row.entityId,
    familyName: row.familyName,
    camp: row.campName != null ? row.campName : "One Nation",
    provision: row.provisionName != null ? row.provisionName : "Food Parcel",
    date: row.notifyDate != null ? formatDate(row.notifyDate) : formatDate(new Date()),
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
