import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


import TabView from "./Tab";
import { ReactComponent as IllustrationTwo } from "../../images/IllustrationTwo.svg";
import { ReactComponent as IllustrationThree } from "../../images/IllustrationThree.svg";
import { ReactComponent as IllustrionOne } from "../../images/Test.svg";
import { ReactComponent as TestTwo } from "../../images/TestTwo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  slider: {
    boxShadow: "0 1px 0px rgba(0, 0, 0, 0.2)",
  },
}));

export const tabs = [
  {
    label: "LABEL",
    text: "Lorem ipsum jdnjdsnfjds",
    svg: TestTwo
  },
  {
    label: "LABEL",
    text: "Lorem ipsum jdnjdsnfjds",
    svg: IllustrationTwo
  },
  {
    label: "LABEL",
    text: "Lorem ipsum jdnjdsnfjds",
    svg: IllustrationThree
  },
];


export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.slider}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="maingray"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabs.map(({ label, text }, idx) => (
            <Tab
              label={label}
              text={text}
              {...{
                id: `full-width-tab-${idx}`,
                "aria-controls": `full-width-tabpanel-${idx}`,
              }}
            />
          ))}
        </Tabs>
      </AppBar>
      
        {tabs.map(({ label, text, svg }, idx) => (
          <div
            role="tabpanel"
            hidden={value !== idx}
            id={`full-width-tabpanel-${idx}`}
            aria-labelledby={`full-width-tab-${idx}`}
            dir={theme.direction}
          >
            {value === idx && <TabView {...{text,label, svg}} />}
          </div>
        ))}
    </div>
  );
}
