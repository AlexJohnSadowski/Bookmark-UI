import { makeStyles } from "@material-ui/core/styles";

const BottombarStyles = makeStyles((theme) => ({
    bgcolor: {
      backgroundColor: theme.palette.darkblue.main,
      padding: theme.spacing(2, 4),
    },
    footerButton: {
      paddingRight: "5%",
      color: "white",
      "&:hover": {
        color: "hsl(0, 94%, 66%)",
        backgroundColor: "transparent",
      },
    },
    footerIcon: {
      color: "white",
      cursor: "pointer",
  
      "&:hover": {
        color: "hsl(0, 94%, 66%)",
        backgroundColor: "transparent",
      },
    },
    flexWrapper: {
      display: "flex",
  
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  }));

export default BottombarStyles;
