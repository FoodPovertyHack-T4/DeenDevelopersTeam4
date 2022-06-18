import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddUsersModal from "../components/Modal/AddUsers";
import DataTable from "../Table";
import {
  Stack,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import getAllUsers from "../Utils/databaseAccessor";

export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("");
  
  //Users here should be renamed to notifications
  const [notifications, setNotifications] = useState([]);
  const [allNotifications, setAllNotifications] = useState([]);
  
  const handleDashboardFilter = (_, filter) => {
    let _filter = filter === null ? "" : filter;
    setCurrentFilter(_filter);
    console.log(_filter);
    // Filter data based on all users
    // const _notifications = allNotifications.filter(notification => notificaton.provisionName.includes(filter))
    // setUsers(_notifications)
  };

  useEffect(() => {
    const getNotifications = async() => {
      let _notifications = await getAllUsers();
      setAllNotifications(_notifications);
      setNotifications(_notifications);
    }
    getNotifications();

  }, [])
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Stack spacing={2} direction="row">
            <Typography variant="h4" component="h1" gutterBottom>
              Next two weeks
            </Typography>
        </Stack>

        <ToggleButtonGroup
          value={currentFilter}
          exclusive
          onChange={handleDashboardFilter}
          aria-label="text alignment"
          size="small"
          sx={{ maxHeight: 50}}
        >
          <ToggleButton value="food" aria-label="left aligned">
            <h4>Food</h4>
          </ToggleButton>
          <ToggleButton value="hygeine" aria-label="centered">
            <h4>Hygeine </h4>
          </ToggleButton>
          <ToggleButton value="abaya" aria-label="right aligned">
            <h4>Abaya</h4>
          </ToggleButton>
          <ToggleButton value="baby-powder" aria-label="justified">
            <h4>Baby Powedr</h4>
          </ToggleButton>
          <ToggleButton value="camps" aria-label="justified">
            <h4>Camps</h4>
          </ToggleButton>
          <ToggleButton value="eid-gift" aria-label="justified">
            <h4>Eid Gift</h4>
          </ToggleButton>
        </ToggleButtonGroup>

        <DataTable data={notifications}/>
      </Box>

      <Box sx={{ my: 4 }}>
        <Box sx={{ my: 2 }}>
          <Stack direction="row" spacing={2}>
            <AddUsersModal />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
