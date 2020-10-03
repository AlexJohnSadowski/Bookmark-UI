import { Box } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { ReactComponent as LogoBottom } from "../images/LogoBookmarkBottom.svg";
import { ReactComponent as Twitter } from "../images/Twitter.svg";
import { ReactComponent as Facebook } from "../images/Facebook.svg";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import GlobalStyles from "../styles/GlobalStyles";

const BottomBar = () => {
  const classes = GlobalStyles();

  return (
    <Container maxWidth="xxl" className={classes.footerBar}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        wrapFlex="wrap"
      >
        <Box display="flex" justifyContent="space-evenly" alignItems="center" >
          <Box marginRight="5%">
            <LogoBottom />
          </Box>
          <Box display="flex" marginLeft="5%">
            <Button className={classes.navbutton}>Features</Button>
            <Button className={classes.navbutton}>Pricing</Button>
            <Button className={classes.navbutton}>Contact</Button>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" >
          <Box marginRight="45%" className={classes.icons} >
          <a href="https://twitter.com/" className={classes.icons}><FacebookIcon /></a>
  
          </Box>
          <Box display="flex" alignItems="center">
            <a href="https://twitter.com/" className={classes.icons}><TwitterIcon /></a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BottomBar;
