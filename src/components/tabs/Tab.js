import React from "react";
import Box from "@material-ui/core/Box";
import { ReactComponent as IllustrationOne } from "../../images/IllustrationOne.svg";
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../styles/GlobalStyles";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as Test } from "../../images/Test.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  textSlider: {
    fontFamily: "Rubik",
    fontSize: "2vh",
    color: "gray",
    marginBottom: "5%",
  },

  univButton: {
    border: `2px solid ${theme.palette.blue}`,

    "&:hover": {
      color: theme.palette.blue,
      backgroundColor: "white",
    },
  },
  image: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  svg: {
    zIndex: 1000,
    position: "relative",

    "&:before": {
      position: "absolute",
      content: '""',
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      height: "100%",
      top: "50px",
      right: "50px",
      borderTopRightRadius: "100px",
      borderBottomRightRadius: "100px",
      zIndex: -1,
    },

    "& svg": {
      display: "block",
      width: "100%",
      height: "auto",
      maxHeight: "346px",
    },
  },
}));

const Tab = ({ label, text, svg }) => {
  const classes = useStyles();
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
        <h2>{label}</h2>
        <p className={classes.textSlider}>{text}</p>
        <Button
          variant="contained"
          color="primary"
          className={classes.univButton}
        >
          More Info
        </Button>
      </Grid>
    </Grid>
  );
};

export default Tab;
