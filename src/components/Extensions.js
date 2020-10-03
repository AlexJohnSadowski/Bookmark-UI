import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Tab from "./Tab";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ChromeCard from './cards/ChromeCard'
import FirefoxCard from './cards/FirefoxCard'
import OperaCard from './cards/OperaCard'
import { red } from "@material-ui/core/colors";

import GlobalStyles from "../styles/GlobalStyles";


const Extensions = () => {
  const classes = GlobalStyles();
  return (
    <Container maxWidth="xl" className={classes.margin}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <h1 className={classes.title}>Download the extensions</h1>
        <p className={classes.text}>
          We've got more browsers in the pipeline. <br/>Please do let us know if you've got a favourite you'd like us to prioritise.
        </p>
      </Box>
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" margin="0 10%">
          <ChromeCard />
          <FirefoxCard />
          <OperaCard />
      </Box>
    </Container>
  );
};

export default Extensions;
