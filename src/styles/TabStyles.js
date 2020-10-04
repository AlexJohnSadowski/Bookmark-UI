import { makeStyles } from "@material-ui/core/styles";

const TabStyles = makeStyles((theme) => ({
  slider: {
    boxShadow: "0 1px 0px rgba(0, 0, 0, 0.2)",
  },

  textSlider: {
    fontFamily: "Rubik",
    fontSize: "2vh",
    color: "gray",
    marginBottom: "5%",
  },

  univButton: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,

    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "white",
    },
  },
  image: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
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
  tabTitle: {
    fontFamily: "Rubik",
  },
  content: {
    padding: theme.spacing(4),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6),
    },
  },
}));

export default TabStyles;
