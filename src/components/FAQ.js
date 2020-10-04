import React from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GlobalStyles from '../styles/GlobalStyles'
import MyAccordion from './Accordion/MyAccordion'

const FAQ = () => {
  const classes = GlobalStyles();
  return (
    <Container maxWidth="md" className={classes.margin}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <h1 className={classes.title} textAlign="center">Frequently Asked Questions</h1>
        <p className={classes.text}>
          Here are some of our FAQs. <br/> If you have any other questions you'd like to be answered, please feel free to email us.
        </p>
        <MyAccordion/>
        <Box marginTop="5%">
        <Button size="medium" color="primary" variant="contained" className={classes.univButton}>More info</Button>
        </Box>
      </Box>
      
    </Container>
  );
};

export default FAQ;
