import React, { useState } from 'react';

import PropTypes from "prop-types";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import CheckboxRadioSwitch from "components/DropRadios/DropRadios.js"
// styling
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
// form control
import { useForm } from "react-hook-form";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal(props) {
  const [modal, setModal] = React.useState(false);
  const {register, handleSubmit} = useForm();
  const classes = useStyles();
  return (
    <div>
      <Button color="spotTheme"
        onClick={() => setModal(true)}
        type="submit"
        className={classes.submit}
      >
        See Spot Locations
      </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h3 className={classes.modalTitle}>Choose a Spot Hub</h3>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <CheckboxRadioSwitch />
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
          <Button round onClick={() => setModal(false)} color="spotTheme">
            Let's Eat!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  zipcode: PropTypes.number,

  className: PropTypes.string,
  color: PropTypes.oneOf(["spotTheme","warning", "success", "danger", "info", "primary"]),
  children: PropTypes.node
};
