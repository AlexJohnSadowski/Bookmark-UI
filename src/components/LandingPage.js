import React from "react";
import Box from "@material-ui/core/Box";
import { ReactComponent as IllustrationHero } from "../images/IllustrationHero.svg";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import LandingStyles from "../styles/LandingStyles";


const LandingPage = () => {
  const classes = LandingStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        width="100%"
        flexWrap="wrap"
      >
        <Box>
          <h1 className={classes.lpTitle}>
            A Simple Bookmark
            <br /> Manager
          </h1>
          <p className={classes.lpText}>
            A clean and simple interface to organise your favourite websites.
            <br />
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
            className={classes.lpFirefoxButton}
          >
            Get it on Firefox
          </Button>
        </Box>
        {/* <div className={classes.svg}>
        </div> */}
            <div className={classes.image}>
              <div className={classes.svg}>
                <IllustrationHero />
              </div>
            </div>
      </Box>
    </Container>
  );
};

export default LandingPage;
