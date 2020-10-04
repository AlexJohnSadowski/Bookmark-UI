import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { ReactComponent as Logo } from "../images/LogoBookmark.svg";

import Burger from '../components/Burger'

const HeaderStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    primaryColor: "hsl(231, 69%, 60%)",
    secondaryColor: "hsl(0, 94%, 66%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {},
  appbar: {
    boxShadow: "none",
    margin:"2% 0 0 4%"
  },
  navbutton: {
    fontSize: "2vh",
    paddingRight: "5%",
    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      backgroundColor: "transparent",
    },
  },
  login: {
    backgroundColor: "hsl(0, 94%, 66%)",
    boxShadow: "none",
    border: "2px solid hsl(0, 94%, 66%)",

    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      border: "2px solid hsl(0, 94%, 66%)",
      backgroundColor: "transparent",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = HeaderStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <Logo />
          </Typography>
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
