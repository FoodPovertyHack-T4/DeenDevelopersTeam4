import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddUsersModal from "../components/Modal/AddUsers";
import DataTable from "../Table";
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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -15,
    top: 23,
    border: `0px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Stack spacing={2} direction="row">
          <StyledBadge badgeContent={4} color="error">
            <Typography variant="h4" component="h1" gutterBottom>
              Today
            </Typography>
          </StyledBadge>
        </Stack>

        {/* This data will be loaded from the notifications table */}
        <List>
          <ListItem divider>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Abdul Kaiser is in need of: 1x Meat Parcel, 1x Food Parcel " />
          </ListItem>
          <ListItem divider>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Aziz Family is in need of: 1x Food Parcel" />
          </ListItem>
          <ListItem divider>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Saeed Family is in need of: 1x Meat Parcel, 1x Food Parcel " />
          </ListItem>
          <ListItem divider>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Aysha Azad is in need of: 1x clothes parcel(s), 1x Baby Milk Powder" />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Box sx={{ my: 2 }}>
          <Stack direction="row" spacing={2}>
            <AddUsersModal />
            <UpdateProvisionsModal />
          </Stack>
        </Box>
        
        <Typography sx={{ my: 4 }}variant="h4" component="h1" gutterBottom>
          All Refugees
        </Typography>
        <DataTable />
      </Box>
    </Container>
  );
}