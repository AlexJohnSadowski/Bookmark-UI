import React from "react";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

import TabStyles from "../../styles/TabStyles";

const Tab = ({ label, text, svg }) => {
  const classes = TabStyles();
  const Svg = svg;

  return (
    <Grid container>
      <Grid item md={6} sm={12}>
        {svg && (
          <div className={classes.image}>
            <div className={classes.svg}>
              <Svg />
            </div>
          </div>
        )}
      </Grid>
      <Grid item md={6} sm={12}>
        <div className={classes.content}>
          <h2 className={classes.tabTitle}>{label}</h2>
          <p className={classes.textSlider}>{text}</p>
          <Button variant="contained" className={classes.univButton}>
            More Info
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Tab;
