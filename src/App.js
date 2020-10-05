import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import Modal from "./components/Modal";
import Container from "@material-ui/core/Container";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const font = "Rubik";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        "& h1": {
          color: "black",
          fontFamily: font,
        },
        "& h2": {
          fontFamily: font,
        },
        body: {
          margin: "0",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "hsl(231, 69%, 60%)",
    },
    secondary: {
      main: "hsl(0, 94%, 66%)",
    },
    third: {
      main: "white",
    },
    
    maingray: {
      main: "hsl(229, 8%, 60%)",
    },
    darkblue: {
      main: "hsl(229, 31%, 21%)",
    },
  },
  typography: {
    fontFamily: font,
  },
});


theme.props = {

}

function App(event) {
  const [modalOpened, setModalOpened] = useState(false);
  console.log(event)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalOpened(true);
    }, 30000);

    return () => clearTimeout(timeout);
  }, []);

  const handleCloseModal = () => setModalOpened(false);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <LandingPage />
        <Features />
        <Extensions />
        <FAQ />
      </Container>
      <Footer />
      <BottomBar />
      <Modal open={modalOpened} onClose={handleCloseModal} />
    </ThemeProvider>
  );
}

export default App;
