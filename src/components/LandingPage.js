import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as IllustrationHero } from "../images/IllustrationHero.svg";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: "5% 0 10% 0",
  },
  lpTitle: {
    fontFamily: "Rubik",
    fontSize:"6vh"
  },
  lpChromeButton: {
    marginRight: "2%",
    border: "2px solid hsl(231, 69%, 60%)",
    "&:hover": {
      color: "hsl(231, 69%, 60%)",
      backgroundColor: "white",
    },
  },
  lpFirefoxButton: {
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "white",
      border: "2px solid hsl(229, 8%, 60%)",
    },
  },
  lpText: {
    fontFamily:'Rubik',
    color:'gray',
    fontSize:'2vh'
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box display="flex" justifyContent="space-evenly" width="100%" flexWrap="wrap"> 
        <Box>
          <h1 className={classes.lpTitle}>A Simple Bookmark<br/> Manager</h1>
          <p className={classes.lpText} >
            A clean and simple interface to organise your favourite websites.<br />
            Open a new browser tab and see you sites load instantly. Try it for
            free.
          </p>

          <Button
            variant="contained"
            color="primary"
            className={classes.lpChromeButton}
          >
            Get it on Chrome
          </Button>
          <Button
            variant="contained"
            color="graycolor"
            className={classes.lpFirefoxButton}
          >
            Get it on Firefox
          </Button>
        </Box>
        <Box >
          <IllustrationHero />
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
