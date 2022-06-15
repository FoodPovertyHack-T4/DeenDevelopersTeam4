import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicModal from '../components/Modal/Modal';
import DataTable from '../Table';


export default function Dashboard() {

    return (
        <Container maxWidth="lg" >
    
          <Box sx={{ my: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Data
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                List of people
              </Typography>
           
            <Box sx={{ my: 2 }}>
                <BasicModal />
              </Box>
            <DataTable/>
          </Box>
          
        </Container>
      );


}