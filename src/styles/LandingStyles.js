import { makeStyles } from "@material-ui/core/styles";

const LandingStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: "5% 0 10% 0",
  },
  lpTitle: {
    fontFamily: "Rubik",
    fontSize: "6vh",
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
    fontFamily: "Rubik",
    color: "gray",
    fontSize: "2vh",
  },
  // svg: {
  //   zIndex: 1000,
  //   position: "relative",
  //   [theme.breakpoints.down('md')]: {
  //     marginTop:"10%"
  //   },

  //   "&:before": {
  //     position: "absolute",
  //     content: '""',
  //     backgroundColor: theme.palette.primary.main,
  //     width: "150%",
  //     height: "100%",
  //     top: "50px",
  //     right: "-250px",
  //     borderTopLeftRadius: "100px",
  //     borderBottomLeftRadius: "100px",
  //     zIndex: -1,
  //   },

  //   "& svg": {
  //     display: "block",
  //     width: "100%",
  //     height: "auto",
  //     maxHeight: "346px",
  //   },
  // },
  image: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  svg: {
    zIndex: 1000,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
    },

    "&:before": {
      position: "absolute",
      content: '""',
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      height: "90%",
      top: "50px",
      left: "50px",
      borderTopLeftRadius: "100px",
      borderBottomLeftRadius: "100px",
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

export default LandingStyles;
