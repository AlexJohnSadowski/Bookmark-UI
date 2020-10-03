import { makeStyles } from "@material-ui/core/styles";

 const GlobalStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
      margin: "5% 0 10% 0",
    },
    margin:{
        marginBottom:"5%"
    },
   title:{
     fontFamily:"Rubik",
     textAlign:"center",

   },
   text:{
       fontFamily:"Rubik",
       fontSize:"2vh",
       color:"gray",
       textAlign:"center",
       marginBottom:"5%"

   },
   textSlider:{
    fontFamily:"Rubik",
    fontSize:"2vh",
    color:"gray",
    marginBottom:"5%"
   },
   univButton: {
    border: "2px solid hsl(231, 69%, 60%)",
    "&:hover": {
      color: "hsl(231, 69%, 60%)",
      backgroundColor: "white",
    },
  },
  users:{
    fontSize:"2vh",
    letterSpacing:2,
    textTransform:"uppercase",
    fontFamily:"Rubik",
    color:"white"
  },
  subtitle:{
    color:"white",
    fontFamily:"Rubik"
  },
  footerBg:{
    backgroundColor:"hsl(231, 69%, 60%)",
    paddingBottom:"1%"
  },
  footerBar:{
    padding:"1% 0",
    backgroundColor:"hsl(229, 31%, 21%)"

  },
  navbutton: {
    color:"white",
    fontSize: "14px",
    paddingRight: "5%",
    letterSpacing:1.5,
    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      backgroundColor: "transparent",
    },
  },
  icons:{
    color:"white",
    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      backgroundColor: "transparent",
    },
  },
  label:{
    border: "3px solid hsl(0, 94%, 66%)",
    backgroundColor:'white',
    borderRadius:"10px",
  },
  submitButton: {
    backgroundColor: "hsl(0, 94%, 66%)",
    boxShadow: "none",
    border: "2px solid hsl(0, 94%, 66%)",

    "&:hover": {
      color: "hsl(0, 94%, 66%)",
      border: "2px solid hsl(0, 94%, 66%)",
      backgroundColor: "white",
    },
  },
  }));


  export default GlobalStyles