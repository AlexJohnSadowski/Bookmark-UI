import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Box from "@material-ui/core/Box";
import { ReactComponent as Logo } from "../images/LogoBookmark.svg";

import Burger from "../components/Burger";

import HeaderStyles from "../styles/HeaderStyles";

export default function ButtonAppBar() {
  const classes = HeaderStyles();
  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Logo />
          </div>
          <Box
            display="flex"
            display={{ xs: "none", sm: "none", md: "flex" }}
            marginRight="15%"
            width="40%"
            justifyContent="space-evenly"
          >
            <Button className={classes.navbutton} color="inherit">
              Features
            </Button>
            <Button className={classes.navbutton} color="inherit">
              Pricing
            </Button>
            <Button className={classes.navbutton} color="inherit">
              Contact
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              className={classes.login}
            >
              Login
            </Button>
          </Box>

          <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
            <Burger />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
