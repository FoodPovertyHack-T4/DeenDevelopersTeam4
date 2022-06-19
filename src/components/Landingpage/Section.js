import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import useStyles from "./Styles";

const Section = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Providing efficient tools and solutions using tech to support charities on the ground providing life-saving aid.",
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Involving the charities in our development to solve their most pressing problems.  ",
    },
    {
      id: 3,
      icon: <PhoneIphoneIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Reduce admin, minimise errors and increase aid delivery efficiency with notifications.   ",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
