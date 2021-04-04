import React from "react";
import { UiContext } from "../../../App";
import { colors, fonts } from "../../../globalStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Heading7, MainBodyText, BodyText } from "../../../typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateOrderDialog({ dialogOpened }) {
  const Ui = React.useContext(UiContext);
  return (
    <Dialog
      open={Ui.uiState.createOrderDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        Ui.uiDispatch("hideCreateOrderDialog");
      }}
      aria-labelledby="create-order-title"
      aria-describedby="create-order-description"
    >
      <div style={{ padding: "20px 20%" }}>
        <DialogTitle id="create-order-title" style={{ textAlign: "center" }}>
          <Heading7>{"Create Order"}</Heading7>
          <div
            style={{
              position: "absolute",
              right: 30,
              top: "0",
              color: "red",
              fontSize: 48,
              cursor: "pointer",
            }}
            onClick={() => Ui.uiDispatch("hideCreateOrderDialog")}
          >
            &times;
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="create-order-description">
            <BodyText small>
              Diagnose your car's problem through our car issue dialog. Click
              the button below to book an appointment.
            </BodyText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              Ui.uiDispatch("default");
            }}
            style={{
              backgroundColor: colors.main,
              textTransform: "capitalize",
              width: "90%",
              marginBottom: 40,
            }}
          >
            <MainBodyText bold color={colors.mainBg}>
              Book an appointment
            </MainBodyText>
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
