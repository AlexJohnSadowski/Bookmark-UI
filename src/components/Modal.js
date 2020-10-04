import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TabView from "./tabs/Tab";
import { tabs } from "./tabs/Tabs";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "2px solid #000",
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  content: {
    background: "white",
    padding: "75px",
    width: "60vw",

    "& svg": {
      display: "block",
      width: "100%",
      height: "auto",
      maxHeight: "346px",
    },
  },
}));

export default function SimpleModal({ onClose, open }) {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div>
        <h3>Hello there!</h3>
        <CloseIcon color="primar" />
      </div>
      <div className={classes.content}>
        <TabView {...tabs[0]} />
      </div>
    </Modal>
  );
}
