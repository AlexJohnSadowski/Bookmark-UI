import { makeStyles } from "@material-ui/core/styles";

const BurgerStyles = makeStyles((theme) => ({
  list: {
    width: "100vw",
    height: "100vh",
    background: 'none'
  },
  fullList: {
    height: "100vh",
  },
  burger: {
    display: "flex",
    justifyContent: "right",
  },
  test: {
    textAlign: "center",
    backgroundColor: "lightblue",
  },
  drawer: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
}));

export default BurgerStyles;
