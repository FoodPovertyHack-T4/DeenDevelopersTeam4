import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import lebanon from "../../images/lebanon.jpg";
import useStyles from "./Styles";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h4" fontWeight={500} className={classes.title}>
            Let's track which families have been given aid
          </Typography>
          <Typography variant="h6" className={classes.subtitle}></Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
            onClick={() => navigate("/signin")}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={lebanon} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
