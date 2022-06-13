import React, { useState, useEffect } from 'react';
import {db} from "./Utils/firebase"
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { calculate_age } from './Utils/helperfunctions';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, hide: true },
  { field: 'mainFirstName', headerName: 'First name', width: 130 },
  { field: 'mainLastName', headerName: 'Last name', width: 130 },
  {
    field: 'mainDob',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.mainFirstName || ''} ${params.row.mainLastName || ''}`,
  },
  {
    field: 'dependants',
    headerName: 'Family Size',
    type: 'number',
  },
  {
    field: 'view',
    headerName: 'View/Edit',
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button variant='contained' onClick={onClick}>View</Button>;
    }
  },
];



const DataTable = () => {
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, familySize: 3 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, familySize: 4 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, familySize: 2 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, familySize: 2 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, familySize: 9 },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, familySize: 10 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,familySize:3 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,familySize:5 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, familySize:6 },
      ];

      const [rowsState, setRowsState] = useState([])

      const userCollectionRef = collection(db,"users") 
      useEffect(() => {  
          
        const getData = async () => {
            const data = await getDocs(userCollectionRef);
            console.log("the data is", data)
            setRowsState(data.docs.map((doc) => 
            (
                {
                    id: doc.id, 
                    mainFirstName:doc.data().mainFirstName,
                    mainLastName:doc.data().mainLastName,
                    mainDob: calculate_age(doc.data().mainDob),
                    dependants: doc.data().dependants.length
                }
            )))
        }

        getData()

       }, []);
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rowsState}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      );
}

export default DataTable
