import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Box from "@material-ui/core/Box";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import BurgerStyles from "../styles/BurgerStyles";

import { ReactComponent as LogoBookmarkBottom } from "../images/LogoBookmarkBottom.svg";

export default function TemporaryDrawer() {
  const classes = BurgerStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button onClick={toggleDrawer(anchor, false)} className={classes.burger}>
    
        <Box display="flex" flexDirection="row" position="absolute" top="20px" right="60px"><LogoBookmarkBottom fontSize="large" /></Box>
        <Box display="flex" flexDirection="row" position="absolute" top="20px" left="200px"><CloseIcon /></Box>

      </Button>
      <div className={classes.burgerList}>
        {["Features", "Pricing", "Contact", "Login"].map((text, index) => (
          <div key={text} className={classes.itemList}>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <Box display="flex" flexDirection="row" position="absolute" bottom="20px">
        <a href="" className={classes.footerIcon}>
          <FacebookIcon fontSize="large" />
        </a>
        <a href="" className={classes.footerIcon}>
          <TwitterIcon fontSize="large" />
        </a>
      </Box>
    </div>
  );

  return (
    <div>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            SlideProps={{
              className: classes.drawer,
            }}
          >
            <div className={classes.background} />
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
