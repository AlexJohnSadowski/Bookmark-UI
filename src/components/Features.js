import React from "react";
import Box from "@material-ui/core/Box";
import Tabs from "./tabs/Tabs";
import GlobalStyles from "../styles/GlobalStyles";

const Features = () => {
  const classes = GlobalStyles();
  return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexWrap="wrap"
      >
        <h1 className={classes.title}>Features</h1>
        <p className={classes.text}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. <br />
          Your bookmarks sync between your devices, so you can access them on
          the go.
        </p>
        <Tabs />
      </Box>
  );
};

export default Features;
