import React from "react";
import { UiContext } from "../../../App";
import { colors, fonts, form } from "../../../globalStyles";
import { Heading7, BodyText } from "../../../typography";
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

export default function UpdateProductData() {
  const Ui = React.useContext(UiContext);
  return (
    // <div>
    <Dialog
      // open={true}
      open={Ui.uiState.productDataDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        Ui.uiDispatch("hideUpdateProductDialog");
      }}
      aria-labelledby="update-data-title"
      aria-describedby="update-data-form"
    >
      <div style={{ padding: "20px 20%", width: 400 }}>
        <DialogTitle id="create-order-title" style={{ textAlign: "center" }}>
          {/* Fill in the field to update the prices of the product */}
          <Heading7>Update Data</Heading7>
          <BodyText small>
            Update data of prices or probabilty rate of the product
          </BodyText>
          <div
            style={{
              position: "absolute",
              right: 30,
              top: "0",
              color: "red",
              fontSize: 48,
              cursor: "pointer",
            }}
            onClick={() => Ui.uiDispatch({ type: "hideUpdateProductDialog" })}
          >
            &times;
          </div>
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
              <Button
                variant="outlined"
                onClick={() => {
                  Ui.uiDispatch("showUpdatePriceDialog");
                }}
                style={{
                  color: colors.mainBg,
                  backgroundColor: colors.main,
                  textTransform: "capitalize",
                  fontWeight: 700,
                }}
              >
                Update Prices
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  Ui.uiDispatch("showUpdateProbabilityDialog");
                }}
                style={{
                  color: colors.main,
                  textTransform: "capitalize",
                  fontWeight: 700,
                  borderColor: colors.main,
                  marginTop: 10,
                }}
              >
                Update Probability
              </Button>
            </div>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
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
        </DialogActions> */}
      </div>
    </Dialog>
  );
}
