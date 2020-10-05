import { makeStyles } from "@material-ui/core/styles";


const HeaderStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      primaryColor: "hsl(231, 69%, 60%)",
      secondaryColor: "hsl(0, 94%, 66%)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {},
    appbar: {
      boxShadow: "none",
      margin:"2% 0 0 4%"
    },
    navbutton: {
      fontSize: "2vh",
      paddingRight: "5%",
      "&:hover": {
        color: "hsl(0, 94%, 66%)",
        backgroundColor: "transparent",
      },
    },
    login: {
      backgroundColor: "hsl(0, 94%, 66%)",
      boxShadow: "none",
      border: "2px solid hsl(0, 94%, 66%)",
  
      "&:hover": {
        color: "hsl(0, 94%, 66%)",
        border: "2px solid hsl(0, 94%, 66%)",
        backgroundColor: "transparent",
      },
    },
  }));

  export default HeaderStyles