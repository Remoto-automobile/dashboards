import React from "react";
import { UiContext } from "../../../App";
import { colors, fonts, form } from "../../../globalStyles";
import { BodyText, Heading7 } from "../../../typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  formField: {
    margin: "auto 20px",
    // textAlign: "left",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateOrderDialog() {
  const classes = useStyles();
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
      <div className={classes.container}>
        <DialogTitle id="create-order-title" style={{ textAlign: "center" }}>
          {/* Fill in the field to update the prices of the product */}
          <Heading7>Update Data</Heading7>
          <BodyText color={colors.fade} small>
            Fill in the fields to update the prices of the products
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
            onClick={() => Ui.uiDispatch({ type: "hideUpdateDataDialog" })}
          >
            &times;
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="create-order-description">
            <form noValidate autoComplete="off" className={classes.form}>
              <FormControl margin="dense">
                <label htmlFor="name">
                  <BodyText>Workmanship @12K per month</BodyText>
                </label>
                <TextField
                  name="workmanship"
                  variant="outlined"
                  className={classes.formField}
                  value={144000}
                />
              </FormControl>
              <FormControl margin="dense">
                <label htmlFor="commission">
                  <BodyText>Commission @10%</BodyText>
                </label>
                <TextField
                  name="commission"
                  variant="outlined"
                  className={classes.formField}
                  value={30433}
                />
              </FormControl>
              <FormControl margin="dense">
                <label htmlFor="vat">
                  <BodyText>VAT @7.5% on Commission</BodyText>
                </label>
                <TextField
                  name="vat"
                  variant="outlined"
                  className={classes.formField}
                  value={10800}
                />
              </FormControl>
              <FormControl margin="dense">
                <label htmlFor="wht">
                  <BodyText>WHT Tax @5% on Commission</BodyText>
                </label>
                <TextField
                  name="wht"
                  variant="outlined"
                  className={classes.formField}
                  value={7200}
                />
              </FormControl>
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
              width: "100%",
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
