import React from "react";
import Modal from "@material-ui/core/Modal";
import TabView from "./tabs/Tab";
import { tabs } from "./tabs/Tabs";
import CloseIcon from "@material-ui/icons/Close";

import ModalStyles from "../styles/ModalStyles";


export default function SimpleModal({ onClose, open }) {
  const classes = ModalStyles();

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.title}>
          <button>
            <CloseIcon color="primary" onClick={e => onClose()} />
          </button>
        </div>
        <TabView {...tabs[0]} />
      </div>
    </Modal>
  );
}
