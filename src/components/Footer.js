import { Box } from "@material-ui/core";
import React from "react";
import Container from "@material-ui/core/Container";

import ContactForm from "./ContactForm";

import FooterStyles from "../styles/FooterStyles";

import CountTo from 'react-count-to';

const Footer = () => {
  const classes = FooterStyles();
  return (
    <Container maxWidth="xl" className={classes.footerBg}>
      <Box display="flex" justifyContent="center"  width="100%" >
        <Box textAlign="center" alignItems="center">
          <p className={classes.users}><CountTo from={35000} to={0} speed={20000} />+ already joined</p>
          <h1 className={classes.subtitle}>Stay up-to-date with what we're doing</h1>
          <ContactForm />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
