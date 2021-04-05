import React from "react";
import { UiContext } from "../../../App";
import { colors, fonts, form } from "../../../globalStyles";
import { Heading7, BodyText, MainBodyText } from "../../../typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdatePrice() {
  const Ui = React.useContext(UiContext);
  return (
    // <div>
    <Dialog
      // open={true}
      open={Ui.uiState.updateProbabilityDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        Ui.uiDispatch("hideUpdateProbabilityDialog");
      }}
      aria-labelledby="update-data-title"
      aria-describedby="update-data-form"
    >
      <div style={{ padding: "20px 20%", width: 400 }}>
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
              <form autoComplete={false} noValidate>
                <TextField
                  name="compressor"
                  label="Compressor"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  value={0.25}
                />
                <TextField
                  name="Condenser"
                  label="Condenser"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  value={0.2}
                />
                <TextField
                  name="Expansion Valve"
                  label="Expansion Valve"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  value={0.1}
                />
                <TextField
                  name="Reciever Drier"
                  label="Reciever Drier"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  value={0.2}
                />
                <TextField
                  name="Evaporator"
                  label="Evaporator"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  value={0.1}
                />
                <TextField
                  name="Blower Motor"
                  label="Blower Motor"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  value={0.03}
                />
                <TextField
                  name="Accumulator"
                  label="Accumulator"
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                  value={0.1}
                />
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
