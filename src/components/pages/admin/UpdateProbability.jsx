import React from "react";
import { UiContext } from "../../../App";
import { colors, fonts, form } from "../../../globalStyles";
import { Heading7, BodyText, MainBodyText } from "../../../typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 100,
    marginRight: 100,
    [theme.breakpoints.down("md")]: {
      margin: 20,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    // flex: 1,
  },
}));

export default function UpdatePrice() {
  const classes = useStyles();
  const Ui = React.useContext(UiContext);
  return (
    // <div>
    <Dialog
      // open={true}
      open={Ui.uiState.probabilityUpdate.active}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        Ui.uiDispatch({ type: "probabilityUpdate", data: { active: false } });
        Ui.uiDispatch({ type: "productUpdate", data: { active: true } });
      }}
      aria-labelledby="update-data-title"
      aria-describedby="update-data-form"
    >
      <div className={classes.container}>
        <DialogTitle id="create-order-title" style={{ textAlign: "center" }}>
          {/* Fill in the field to update the prices of the product */}
          <Heading7>Update Probability</Heading7>
          <BodyText small>
            Fill in the fields to update the prices of the product
          </BodyText>
          {/* <div
            style={{
              position: "absolute",
              right: 30,
              top: "0",
              color: "red",
              fontSize: 48,
              cursor: "pointer",
            }}
            onClick={() =>
              Ui.uiDispatch({ type: "hideUpdateProbabilityDialog" })
            }
          >
            &times;
          </div> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="create-order-description">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "stretch",
              }}
            >
              <form autoComplete={false} noValidate className={classes.form}>
                <FormControl margin="dense">
                  <label htmlFor="compressor">
                    <BodyText>Compressor</BodyText>
                  </label>
                  <TextField
                    name="compressor"
                    variant="outlined"
                    value={0.25}
                  />
                </FormControl>
                <FormControl margin="dense">
                  <label htmlFor="condenser">
                    <BodyText>Condenser</BodyText>
                  </label>
                  <TextField name="condenser" variant="outlined" value={0.2} />
                </FormControl>
                <FormControl margin="dense">
                  <label htmlFor="expansionValve">
                    <BodyText>Expansion Valve</BodyText>
                  </label>
                  <TextField
                    name="expansionValve"
                    variant="outlined"
                    value={0.1}
                  />
                </FormControl>
                <FormControl margin="dense">
                  <label htmlFor="recieverDrier">
                    <BodyText>Reciever Drier</BodyText>
                  </label>
                  <TextField
                    name="recieverDrier"
                    variant="outlined"
                    value={0.2}
                  />
                </FormControl>
                <FormControl margin="dense">
                  <label htmlFor="evaporator">
                    <BodyText>Evaporator</BodyText>
                  </label>
                  <TextField name="evaporator" variant="outlined" value={0.1} />
                </FormControl>
                <FormControl margin="dense">
                  <label htmlFor="blowerMotor">
                    <BodyText>Blower Motor</BodyText>
                  </label>
                  <TextField
                    name="blowerMotor"
                    variant="outlined"
                    value={0.03}
                  />
                </FormControl>
                <FormControl margin="dense">
                  <label htmlFor="accumulator">
                    <BodyText>Accumulator</BodyText>
                  </label>
                  <TextField
                    name="accumulator"
                    variant="outlined"
                    value={0.01}
                  />
                </FormControl>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "stretch",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          {/* <DialogActions> */}
          <Button
            onClick={() => {
              Ui.uiDispatch("default");
            }}
            color="primary"
            style={{
              backgroundColor: colors.main,
              textTransform: "capitalize",
              marginBottom: 40,
              width: "100%",
            }}
          >
            <MainBodyText color={colors.mainBg}>Save Probability</MainBodyText>
          </Button>
          {/* </DialogActions> */}
        </div>
      </div>
    </Dialog>
  );
}
