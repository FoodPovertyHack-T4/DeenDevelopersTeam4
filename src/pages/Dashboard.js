import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddUsersModal from "../components/Modal/AddUsers";
import DataTable from "../Table";
import Delivery from "./Delivery"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import UpdateProvisionsModal from "../components/Modal/UpdateProvisions";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { getAllUsers, getAllCamps } from "../Utils/databaseAccessor";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -15,
    top: 23,
    border: `0px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Dashboard() {
  const [alignment, setAlignment] = React.useState("left");
  const [users, setUsers] = useState([]);
  const [camps, setCamps] = useState([]);
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    const getUsers = async () => {
      let _users = await getAllUsers();
      setUsers(_users);
    }

    const getCamps = async () => {
      let _camps = await getAllCamps();
      setCamps(_camps)
    }
    getUsers();
    getCamps();

  }, [])

  return (
    <Container maxWidth="lg">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Notifications" {...a11yProps(0)} />
          <Tab label="Delivery" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {tab == 0 && (
        <>
          <Box sx={{ my: 4 }}>
            <Stack spacing={2} direction="row">
              <StyledBadge badgeContent={4} color="error">
                <Typography variant="h4" component="h1" gutterBottom>
                  Next two weeks
                </Typography>
              </StyledBadge>
            </Stack>

            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              sx={{ maxHeight: 50 }}
            >
              <ToggleButton value="left" aria-label="left aligned">
                <h4>Food</h4>
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <h4>Hygeine </h4>
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <h4>Abaya</h4>
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified">
                <h4>Baby Powedr</h4>
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified">
                <h4>Camps</h4>
              </ToggleButton>
            </ToggleButtonGroup>

            <DataTable data={users} />
          </Box>

          <Box sx={{ my: 4 }}>
            <Box sx={{ my: 2 }}>
              <Stack direction="row" spacing={2}>
                <AddUsersModal />
              </Stack>
            </Box>
          </Box>
        </>
      )}

      {tab == 1 && (
        <Delivery data={users}/>
      )}

    </Container>
  );
}
