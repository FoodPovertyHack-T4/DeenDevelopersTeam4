import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddUserForm from '../Form/AddUserForm';
import { Divider } from '@mui/material';
import {getFamilies} from "../../Utils/databaseAccessor"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FamilySummaryModal({handleModal,fId, toggleModal}) {
  console.log("familyid is ". fId)
  const [open, setOpen] = React.useState(handleModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [family, setFamily] = React.useState([])

  React.useEffect(() => {
    const getFamilyDetails = async () => {
      getFamilies(familyId).then(x => {
        console.log("got the family", x)
      })
    }
    getFamilyDetails()
  },[fId])

  return (
    <div>
      <Modal
        open={handleModal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Family Overview
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please enter which refugees have received a
          </Typography> */}
          <Box sx={{my:2}}>
          <h1>Hello World</h1>
          </Box>
        </Box>


      </Modal>
    </div>
  );
}
