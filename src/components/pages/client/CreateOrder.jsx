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
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: 110,
    marginLeft: 110,
    marginTop: 30,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      margin: 10,
    },
  },
}));

export default function CreateOrderDialog({ dialogOpened }) {
  const classes = useStyles();
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
      <div className={classes.container}>
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
              Click the button below to book an appointment
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
              width: "100%",
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
