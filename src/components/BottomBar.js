import React from "react";
import Button from "@material-ui/core/Button";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import Grid from "@material-ui/core/Grid";

import BottombarStyles from "../styles/BottombarStyles";

import { ReactComponent as LogoBookmarkBottom } from "../images/LogoBookmarkBottom.svg";

const BottomBar = () => {
  const classes = BottombarStyles();

  return (
    <Grid container spacing={4} className={classes.bgcolor}>
      <Grid
        item
        xl={2}
        lg={8}
        md={3}
        sm={4}
        xs={12}
        className={classes.flexWrapper}
      >
        <LogoBookmarkBottom />
      </Grid>
      <Grid
        item
        xl={8}
        lg={8}
        md={6}
        sm={4}
        xs={12}
        className={classes.flexWrapper}
      >
        <Button
          className={classes.navbutton}
          color="inherit"
          className={classes.footerButton}
        >
          Features
        </Button>
        <Button
          className={classes.navbutton}
          color="inherit"
          className={classes.footerButton}
        >
          Pricing
        </Button>
        <Button
          className={classes.navbutton}
          color="inherit"
          className={classes.footerButton}
        >
          Contact
        </Button>
      </Grid>
      <Grid
        item
        xl={2}
        lg={2}
        md={2}
        sm={4}
        xs={12}
        className={classes.flexWrapper}
      >
        <a className={classes.footerIcon}>
          <TwitterIcon color="inherit" fontSize="large" />
        </a>
        <a className={classes.footerIcon}>
          <FacebookIcon color="inherit" fontSize="large" />
        </a>
      </Grid>
    </Grid>
  );
};

export default BottomBar;
