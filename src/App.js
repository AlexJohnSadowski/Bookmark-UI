import React from "react";
import "./App.css";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar"


import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const font =  "Rubik"


const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        "& h1": {
          color: "black",
          fontFamily:font
        },
        "& h2": {
          color: "red"
        },
        body:{
          margin:"0"
        }
      }
    },
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'hsl(231, 69%, 60%)',
    },
    secondary: {
      // This is green.A700 as hex.
      main: 'hsl(0, 94%, 66%)',
    },
    maingray: {
      main:"hsl(229, 8%, 60%)"
    },
    darkblue:{
      main:"hsl(229, 31%, 21%)"
    }
  },
  typography: {
    fontFamily: font,
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <LandingPage />
        <Features />
        <Extensions />
        <FAQ />
        <Footer />
        <BottomBar/>
      </ThemeProvider>
    </>
  );
}

export default App;
