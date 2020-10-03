import React from "react";
import Box from "@material-ui/core/Box";
import {ReactComponent as IllustrationThree} from '../../images/IllustrationThree.svg'
import Button from "@material-ui/core/Button";
import GlobalStyles from "../../styles/GlobalStyles"

const TabOne = () => {
  const classes = GlobalStyles();
  return (
    <Box display="flex" justifyContent="space-evenly" wrapFlex="wrap">
      <Box>
        <IllustrationThree />
      </Box>
      <Box marginLeft="100px">
        <h1>Easy Sharing</h1>
        <p className={classes.textSlider}>
          A clean and simple interface to organise your favourite websites. Open
          a new browser tab and see you sites load instantly. Try it for free.
        </p>
        <Button variant="contained" color="primary" className={classes.univButton}>More Info</Button>
      </Box>
      
    </Box>
  );
};

export default TabOne;
