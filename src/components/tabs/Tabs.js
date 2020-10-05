import React from "react";

import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabView from "./Tab";
import { ReactComponent as IllustrationTwo } from "../../images/IllustrationTwo.svg";
import { ReactComponent as IllustrationThree } from "../../images/IllustrationThree.svg";
import { ReactComponent as TestTwo } from "../../images/TestTwo.svg";

import TabsStyles from "../../styles/TabsStyles"


export const tabs = [
  {
    label: "Simple Bookmarking",
    text:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    svg: TestTwo,
  },
  {
    label: "Speedy Searching",
    text:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    svg: IllustrationTwo,
  },
  {
    label: "Easy Sharing",
    text:
      "Easilyshare your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
    svg: IllustrationThree,
  },
];

export default function FullWidthTabs() {
  const classes = TabsStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          hidden={value !== idx}
          id={`full-width-tabpanel-${idx}`}
          aria-labelledby={`full-width-tab-${idx}`}
          dir={theme.direction}
        >
          {value === idx && <TabView {...{ text, label, svg }} />}
        </div>
      ))}
    </div>
  );
}
