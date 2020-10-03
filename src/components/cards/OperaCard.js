import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { ReactComponent as LogoOpera } from "../../images/LogoOpera.svg";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:"10% 0 10% 0"

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" paddingBottom="50px" textAlign="center">
        <CardContent>
          <LogoOpera />
          <Typography variant="h5" component="h2">
            Add to Chrome
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Minimum version 61
          </Typography>
        </CardContent>
      </Box>
      <Box display="flex" alignItems="end" justifyContent="center" borderTop="7px dotted lightgray">
        <CardActions>
          <Button size="medium" width="100%" variant="contained" color="primary">Add & Install Extension</Button>
        </CardActions>
        </Box>
    </Card>
  );
}
