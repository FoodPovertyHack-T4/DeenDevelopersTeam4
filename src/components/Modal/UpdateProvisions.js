import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddUserForm from "../Form/AddUserForm";
import { Divider } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addProvisionToUser } from "../../Utils/databaseAccessor";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateProvisionsModal({ data, userId }) {
  const [open, setOpen] = React.useState(false);
  const [foodId, setFoodId] = React.useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFoodId(parseInt(event.target.value));
  };

  const addProviso = () => {
    console.log("adding new proviso", foodId);
    console.log("adding new for user", userId);
    const jsonObj = {
      provisionId: foodId,
      userId: userId,
      quantitiy: 1,
    };
    addProvisionToUser(jsonObj).then((x) => {
      console.log("added new data");
    });
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Update Provisions
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please enter which refugees have received aid
          </Typography>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={handleChange}
              >
                {data.map((x) => {
                  return (
                    <div key={x.id}>
                      <FormControlLabel
                        key={x.id}
                        value={x.id}
                        control={<Radio />}
                        label={x.Name}
                      />
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <Button variant="contained" onClick={addProviso}>
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
