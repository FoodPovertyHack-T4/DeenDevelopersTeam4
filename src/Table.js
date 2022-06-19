import React, { useState, useEffect } from "react";
import { db } from "./Utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { calculate_age } from "./Utils/helperfunctions";
import FamilySummaryModal from "./components/Modal/FamilySummary";


const DataTable = ({ data }) => {
  const [rowsState, setRowsState] = useState([]);
  const [modalState, setModalState] = useState(false) 
  const [familyId, setFamilyId] = useState(0)

  console.log("the family id from state", familyId)

  const toggleModal = () =>{
    setModalState(!modalState)
  }
  const columns = [
    { field: "id", headerName: "ID", width: 70, hide: true },
    { field: "familyId", headerName: "familyId", hide: true },
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
      field: "details",
      flex: 1, 
      headerName: "Details",
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          console.log("in here")
          const api = params.api;
          const thisRow = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );       
            setModalState(true)
            console.log(thisRow.familyId)
            setFamilyId(thisRow.familyId)
        };
  
        return (
          <Button onClick={onClick}>View</Button>
        )
    
        // return (
        //   <FamilySummaryModal/>
        // );
      },
    },
  ];

  const newRow = data.map((row) => ({
    id: row.id,
    familyId: row.familyId,
    firstName: row.firstName,
    lastName: row.lastName,
    dob: calculate_age(row.DOB),
    camp: row.campName != null ? row.campName : "One Nation",
    provision: row.provisionName != null ? row.provisionName : "Food Parcel",
    date: row.date != null ? row.date : new Date(),
 
  }));


  return (
    <div style={{ height: 400, width: "100%" }}>
      <FamilySummaryModal handleModal={modalState} fId={familyId} toggleModal={toggleModal}/>
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
