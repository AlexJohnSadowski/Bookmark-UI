import { Box } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import ContactForm from "./ContactForm";

import { ReactComponent as Logo } from "../images/LogoBookmark.svg";
import { ReactComponent as Twitter } from "../images/Twitter.svg";
import { ReactComponent as Facebook } from "../images/Facebook.svg";

import GlobalStyles from "../styles/GlobalStyles";


const Footer = () => {
  const classes = GlobalStyles();
  return (
    <Container maxWidth="xxl" className={classes.footerBg}>
      <Box display="flex" justifyContent="center"  width="100%" >
        <Box textAlign="center" alignItems="center">
          <p className={classes.users}>35,000+ already joined</p>
          <h1 className={classes.subtitle}>Stay up-to-date with what we're doing</h1>
          <ContactForm />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
