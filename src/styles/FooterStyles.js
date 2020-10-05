import { makeStyles } from "@material-ui/core/styles";

const FooterStyles = makeStyles((theme) => ({
  footerBg: {
    backgroundColor: "hsl(231, 69%, 60%)",
    paddingBottom: "1%",
  },
  users: {
    fontSize: "2vh",
    letterSpacing: 2,
    textTransform: "uppercase",
    fontFamily: "Rubik",
    color: "white",
  },
  subtitle: {
    color: "white",
    fontFamily: "Rubik",
  },
}));

export default FooterStyles;
