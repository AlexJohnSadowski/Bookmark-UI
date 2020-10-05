import { makeStyles } from "@material-ui/core/styles";

const ContactformStyles = makeStyles((theme) => ({
  label: {
    border: "3px solid hsl(0, 94%, 66%)",
    backgroundColor: "white",
    borderRadius: "10px",
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

export default ContactformStyles;
