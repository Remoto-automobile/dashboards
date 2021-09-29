import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
} from "@material-ui/core";

function Retry({ open, confirmAction, cancelAction }) {
  return (
    <Dialog
      open={open}
      onClose={cancelAction}
      aria-labelledby="Confirm Action"
      aria-describedby="Confirm a previously clicked action"
      // style={{ maxWidth: 300 }}
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Delete?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This will delete the selected user, as well as all vehicles, payments
          and subscription associated with them. This action is IRREVERSIBLE.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelAction} autoFocus>
          Cancel
        </Button>
        <Button onClick={confirmAction}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Retry;
