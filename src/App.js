import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Button, Table } from '@mui/material';
import BasicTable from './Table';
import BasicModal from './Modal/Modal';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
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
        <BasicTable />
      </Box>
      
    </Container>
  );
}
