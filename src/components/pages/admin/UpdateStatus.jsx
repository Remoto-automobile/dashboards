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
import { TextField, MenuItem, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Heading7, BodyText } from "../../../typography";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 60px",
    display: "flex",
    flexDirection: "column",
    width: 540,
    [theme.breakpoints.down("md")]: {
      width: 300,
      padding: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  saveButton: {
    backgroundColor: colors.main,
    textTransform: "capitalize",
    ...fonts.mainBodyText,
    width: "100%",
    color: colors.mainBg,
    fontWeight: 600,
    margin: "20px auto",
    // marginBottom: 30,
    "&:hover": {
      backgroundColor: colors.main,
      color: colors.fade,
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const stats = ["Ongoing", "Completed", "Withdrawn"];

export default function UpdateStatus() {
  const classes = useStyles();
  const Ui = React.useContext(UiContext);
  const [status, setStatus] = React.useState("Ongoing");
  const [done, setDone] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleCheck = () => {
    setChecked(!checked);
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
        <div className={classes.container}>
          <DialogTitle
            id="update-status-title"
            style={{ textAlign: "center", marginBottom: 30 }}
          >
            {/* Fill in the field to update the prices of the product */}
            <Heading7 other={{ marginBottom: 20 }}>Update Status</Heading7>
            <BodyText small color={colors.fade}>
              Update the order status of the users
            </BodyText>
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
            <DialogContentText
              id="update-order-status"
              style={{
                flex: 1,
              }}
            >
              <form
                noValidate
                autoComplete="off"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* <label htmlFor="name">
                <Typography style={fonts.bodyText}>Name</Typography>
              </label> */}
                <TextField
                  name="year"
                  select
                  // label="Select Status"
                  variant="outlined"
                  onChange={changeStatus}
                  value={status}
                  style={{ ...form.field, margin: 0 }}
                  size="small"
                >
                  <MenuItem value="Select Status">Select Status </MenuItem>
                  {stats.map((year) => (
                    <MenuItem key={year} value={year}>
                      <BodyText>{year}</BodyText>
                    </MenuItem>
                  ))}
                </TextField>
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={checked}
                    onClick={handleCheck}
                    size="small"
                  />
                  <BodyText small>
                    Send notification to alert the user of his update
                  </BodyText>
                </div>
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
              className={classes.saveButton}
            >
              Send
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
