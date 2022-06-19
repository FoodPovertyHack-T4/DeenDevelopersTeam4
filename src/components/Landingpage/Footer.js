import React from "react";
import { Box, Typography, Link } from "@mui/material";
import useStyles from "./Styles";

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        Provided by{" "}
        <Link
          href="https://foodpovertyhack.deendevelopers.com/"
          target="_blank"
          underline="none"
        >
          DeenDevelopers
        </Link>
      </Typography>
      <Typography className={classes.footerDate}>
        Team 4 - Hack for Food Poverty
      </Typography>
    </Box>
  );
};

export default Footer;
