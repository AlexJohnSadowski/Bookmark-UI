import { makeStyles } from "@material-ui/core/styles";

const BurgerStyles = makeStyles((theme) => ({
  list: {
    width: "100vw",
    height: "100vh",
    background: "none",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  fullList: {
    height: "100vh",
  },
  itemList: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "16px 0 16px 0",
    fontSize: "1.5em ",
    fontFamily:"Rubik",
    textTransform:"uppercase",
    borderBottom:"1px solid rgba(255, 255, 255, 0.2)",
    cursor:"pointer",

  },
  burger: {
    display: "flex",
    justifyContent: "right",

    "& svg": {
      fill: "#fff",
    },
  },
  burgerList: {
    textAlign: "center",
    width: "100vw",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(2),
    marginTop:"10%",

  },
  drawer: {
    background: "none",
    position: "relative",
    color: "white",
  },
  background: {
    backgroundColor: theme.palette.darkblue.main,
    position: "absolute",
    opacity: "0.95",
    width: "100%",
    height: "100%",
  },
  footerIcon: {
    color: "white",
    cursor: "pointer",

    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      backgroundColor: "transparent",
    },
  },
}));

export default BurgerStyles;
