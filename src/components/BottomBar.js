import { Box } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { ReactComponent as LogoBottom } from "../images/LogoBookmarkBottom.svg";
import { ReactComponent as Twitter } from "../images/Twitter.svg";
import { ReactComponent as Facebook } from "../images/Facebook.svg";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import GlobalStyles from "../styles/GlobalStyles";

import { ReactComponent as LogoBookmarkBottom } from "../images/LogoBookmarkBottom.svg";

const useStyles = makeStyles((theme) => ({
  bgcolor: {
    backgroundColor: theme.palette.darkblue.main,
    padding: theme.spacing(2, 4),
  },
  footerButton: {
    paddingRight: "5%",
    color: "white",
    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      backgroundColor: "transparent",
    },
  },
  footerIcon: {
    color: "white",
    cursor: "pointer",

    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      backgroundColor: "transparent",
    },
  },
  flexWrapper: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const BottomBar = () => {
  const classes = useStyles();

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
        lg={8}
        md={3}
        sm={4}
        xs={12}
        className={classes.flexWrapper}
      >
        <a className={classes.footerIcon}>
          <TwitterIcon color="inherit" />
        </a>
        <a className={classes.footerIcon}>
          <FacebookIcon color="inherit" />
        </a>
      </Grid>
    </Grid>
  );
};

export default BottomBar;
