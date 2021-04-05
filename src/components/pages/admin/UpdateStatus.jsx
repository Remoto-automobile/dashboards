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
import { Typography, TextField, MenuItem } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const stats = ["Ongoing", "Completed", "Withdrawn"];

export default function UpdateStatus() {
  const Ui = React.useContext(UiContext);
  const [status, setStatus] = React.useState("Ongoing");
  const [done, setDone] = React.useState(false);

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    // <div>
    <Dialog
      open={Ui.uiState.updateOrderStatus}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        Ui.uiDispatch("hideUpdateOrderStatus");
      }}
      aria-labelledby="update-status-title"
      aria-describedby="update-status-form"
    >
      {!done ? (
        <div style={{ padding: "20px 20%", width: 500 }}>
          <DialogTitle id="update-status-title" style={{ textAlign: "center" }}>
            {/* Fill in the field to update the prices of the product */}
            <Typography style={{ ...fonts.heading7 }}>Update Status</Typography>
            {/* <div
            style={{
              position: "absolute",
              right: 30,
              top: "0",
              color: "red",
              fontSize: 48,
              width: "100%",
              cursor: "pointer",
            }}
            onClick={() => Ui.uiDispatch("hideUpdateOrderStatus")}
            >
            &times;
          </div> */}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="update-status-description">
              <form noValidate autoComplete="off">
                {/* <label htmlFor="name">
                <Typography style={fonts.bodyText}>Name</Typography>
              </label> */}
                <TextField
                  name="year"
                  select
                  label="Select Status"
                  variant="outlined"
                  onChange={changeStatus}
                  value={status}
                  style={{ ...form.field, margin: 0 }}
                >
                  {stats.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
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
      ) : (
        <DialogContent>
          <DialogContentText id="update-status-description">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 500,
              }}
            >
              <CheckCircleIcon />
            </div>
          </DialogContentText>
        </DialogContent>
      )}
    </Dialog>
  );
}
