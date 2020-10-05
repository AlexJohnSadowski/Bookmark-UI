import { makeStyles } from "@material-ui/core/styles";


const ModalStyles = makeStyles((theme) => ({
    modal: {
      backgroundColor: "rgba(0,0,0,0.3)",
      border: "2px solid #000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      height: "min-content",
    },
    content: {
      background: "white",
      padding: "75px",
      width: "60vw",
      fontSize: "1em",
  
      "& svg": {
        display: "block",
        width: "100%",
        height: "auto",
        maxHeight: "346px",
      },
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "1em",
  
      "& button": {
        backgroundColor: "white",
        border: "none",
        width: "50px",
  
        "&:hover": {
          outline: "none",
        },
      },
    },
  }));

  export default ModalStyles