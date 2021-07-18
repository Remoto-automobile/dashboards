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
import { makeStyles } from "@material-ui/core/styles";
import { ExactCompContext } from "../../../context/Api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 30,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      margin: 10,
    },
  },
}));

export default function UpdateProductData() {
  const classes = useStyles();
  const ExactComp = React.useContext(ExactCompContext);
  const Ui = React.useContext(UiContext);
  return (
    // <div>
    <Dialog
      // open={true}
      open={Ui.uiState.productUpdate.active}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        Ui.uiDispatch({ type: "productUpdate", data: { active: false } });
      }}
      aria-labelledby="update-data-title"
      aria-describedby="update-data-form"
    >
      <div className={classes.container}>
        <DialogTitle id="create-order-title" style={{ textAlign: "center" }}>
          {/* Fill in the field to update the prices of the product */}
          <Heading7>Update Data</Heading7>
          <BodyText small color={colors.fade}>
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
            onClick={() =>
              Ui.uiDispatch({ type: "productUpdate", data: { active: false } })
            }
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
                  Ui.uiDispatch("default");
                  Ui.uiDispatch({
                    type: "priceUpdate",
                    data: {
                      active: true,
                      data: ExactComp.state.data,
                    },
                  });
                }}
                style={{
                  color: colors.mainBg,
                  backgroundColor: colors.main,
                  textTransform: "capitalize",
                  fontWeight: 700,
                  marginTop: 20,
                }}
              >
                Update Prices
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  Ui.uiDispatch("default");
                  Ui.uiDispatch({
                    type: "probabilityUpdate",
                    data: {
                      active: true,
                      data: ExactComp.state.data,
                    },
                  });
                }}
                style={{
                  color: colors.main,
                  textTransform: "capitalize",
                  fontWeight: 700,
                  borderColor: colors.main,
                  marginTop: 20,
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
