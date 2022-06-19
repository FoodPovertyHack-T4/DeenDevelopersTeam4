import React from "react";
import { Box, Typography, Link } from "@mui/material";
import useStyles from "./Styles";

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        Provided by Adam, Ahmed, Cybel, Yosof and Zameer
      </Typography>
      <Typography className={classes.footerDate}>
        <Link
          href="https://foodpovertyhack.deendevelopers.com/"
          target="_blank"
          underline="none"
        >
          Deen Developers - Hack for Food Poverty
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
