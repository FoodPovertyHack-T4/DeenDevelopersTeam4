import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddUsersModal from "../components/Modal/AddUsers";
import DataTable from "../Table";
import Delivery from "./Delivery"
import {
  Stack,
} from "@mui/material";
import UpdateProvisionsModal from "../components/Modal/UpdateProvisions";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { getAllCamps, getAllNotifications } from "../Utils/databaseAccessor";

export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("");

  //Users here should be renamed to notifications
  const [notifications, setNotifications] = useState([]);
  const [allNotifications, setAllNotifications] = useState([]);

  const [camps, setCamps] = useState([]);
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleDashboardFilter = (_, filter) => {
    let _filter = filter === null ? "" : filter;
    setCurrentFilter(_filter);
    // Filter data based on all users
    const _notifications = allNotifications.filter(n => n.provisionName.toLowerCase().includes(_filter));
    setNotifications(_notifications);
  };

  useEffect(() => {
    const getNotifications = async () => {
      let _notifications = await getAllNotifications();
      setAllNotifications(_notifications);
      setNotifications(_notifications);
    };
    const getCamps = async () => {
      let _camps = await getAllCamps();
      setCamps(_camps);
    };
    getNotifications();
    getCamps();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Notifications" {...a11yProps(0)} />
          <Tab label="Delivery" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {tab == 0 && (
        <>
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
              sx={{ maxHeight: 50 }}
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
              <ToggleButton value="baby powder" aria-label="justified">
                <h4>Baby Powedr</h4>
              </ToggleButton>
              <ToggleButton value="eid gift" aria-label="justified">
                <h4>Eid Gift</h4>
              </ToggleButton>
            </ToggleButtonGroup>
            <DataTable data={notifications} />
            <Stack direction="row" spacing={2} sx={{ my: 4}}>
              <AddUsersModal />
            </Stack>
          </Box>
        </>
      )}

      {tab == 1 && (
        <Delivery data={notifications}/>
      )}

    </Container>
  );
}
