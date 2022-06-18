import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddUserForm from '../Form/AddUserForm';
import { Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  maxHeight: '90%',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

export default function AddUsersModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Add User</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adding a new user to the system
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please correctly fill out all the required fields
          </Typography>
          <Box sx={{my:2}}>
          <AddUserForm modalToggle={handleClose}/>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
