import React from "react";
import { UiContext } from "../../../App";
import { colors, fonts, form } from "../../../globalStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Typography, TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateOrderDialog() {
  const Ui = React.useContext(UiContext);
  return (
    // <div>
    <Dialog
      // open={true}
      open={Ui.uiState.updateDataDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        Ui.uiDispatch("hideUpdateDataDialog");
      }}
      aria-labelledby="update-data-title"
      aria-describedby="update-data-form"
    >
      <div style={{ padding: "20px 20%" }}>
        <DialogTitle id="create-order-title" style={{ textAlign: "center" }}>
          {/* Fill in the field to update the prices of the product */}
          <Typography style={{ ...fonts.heading7 }}>Update Data</Typography>
          <div
            style={{
              position: "absolute",
              right: 30,
              top: "0",
              color: "red",
              fontSize: 48,
              cursor: "pointer",
            }}
            onClick={() => Ui.uiDispatch({ type: "hideUpdateDataDialog" })}
          >
            &times;
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="create-order-description">
            <form noValidate autoComplete="off">
              <label htmlFor="name">
                <Typography style={fonts.bodyText}>Name</Typography>
              </label>
              <TextField
                name="name"
                label="Workmanship @12K per month"
                variant="outlined"
                style={form.field}
              />
              <TextField
                name="name"
                label="Commission @10&"
                variant="outlined"
                style={form.field}
              />
              <TextField
                name="name"
                label="VAT @7.5% on Commission"
                variant="outlined"
                style={form.field}
              />
              <TextField
                name="name"
                label="WHT Tax @5% on Commission"
                variant="outlined"
                style={form.field}
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button
            onClick={() => {
              Ui.uiDispatch("default");
            }}
            color="primary"
            style={{
              backgroundColor: colors.main,
              textTransform: "capitalize",
              ...fonts.mainBodyText,
              width: "90%",
              color: colors.mainBg,
              fontWeight: 700,
              marginBottom: 40,
            }}
          >
            Save Data
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
