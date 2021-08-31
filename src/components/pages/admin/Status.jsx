import React, { useState, useContext, useEffect, Fragment } from "react";
import Axios from "axios";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  Avatar,
  Button,
  Card as MaterialCard,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useParams } from "react-router-dom";

import { UiContext } from "../../../App";
import {
  ItemContext,
  adminUserRoute,
  adminSubscriptionRoute,
} from "../../../context/Api";
import {
  MainBodyText,
  BodyText,
  Heading4,
  Heading6,
  Heading7,
} from "../../../typography";
import { fonts, Card, colors } from "../../../globalStyles";
import OrderTable from "../../medium/a_OrderTable";
import CallToAction from "../../basic/CallToAction";
import { adminTransactionRoute } from "../../../context/Api";
import Loading from "../../major/Loading";

const useStyles = makeStyles((theme) => ({
  carDiv: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    // paddingRight: 20,
    // paddingLeft: 20,
    // paddingTop: 5,
    // paddingBottom: 5,
    padding: "5px 20px",
    "&:nth-of-type(even)": {
      backgroundColor: colors.footer,
    },
  },
  divider: {
    color: colors.main,
  },
  largerSection: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
  },
  transactionDiv: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    // paddingLeft: 10,
    // paddingTop: 5,
    // paddingBottom: 5,
    padding: "5px 10px",
    "&:nth-of-type(odd)": {
      backgroundColor: colors.secondaryBg,
    },
  },
  paidButton: {
    color: colors.mainBg,
    backgroundColor: "green",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: colors.mainBg,
      color: "green",
    },
  },
  notPaidButton: {
    color: colors.mainBg,
    backgroundColor: "red",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: colors.mainBg,
      color: "red",
    },
  },
}));

function sqlDateToTimestamp(dateString) {
  let dateParts = dateString.split("-");
  let jsDate = new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2].substr(0, 2)
  );
  return jsDate.getTime();
}
function sqlDateToTime(dateString) {
  let dateParts = dateString.split("-");
  let jsDate = new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2].substr(0, 2)
  );
  return jsDate.toLocaleDateString();
}
const adminData = JSON.parse(localStorage.getItem("admin_token"));

function Status(imgSrc, imgAlt) {
  const User = useContext(ItemContext);
  const routeParams = useParams();
  const [openSubscriptionDialog, setOpenSubscriptionDialog] = useState({
    open: false,
    carId: null,
  });
  const [refresher, setRefresher] = useState(0);
  const classes = useStyles();
  const Ui = useContext(UiContext);

  useEffect(() => {
    Axios.get(`${adminUserRoute}/users/${routeParams.id}`, {
      headers: { token: adminData.auth_token },
    })
      .then((res) => {
        User.dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        User.dispatch({ type: "FETCH_FAILURE", error: err });
      });
  }, [refresher]);

  function changePaymentStatus(transactionId) {
    Axios.post(
      `${adminTransactionRoute}/paymentStatus`,
      { id: transactionId },
      { headers: { token: adminData.auth_token } }
    )
      .then((res) => {
        setRefresher(refresher + 1);
      })
      .catch((err) => console.log(err));
  }
  function SubscriptionDialog() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    // new Date("2014-08-18T21:11:54")

    function submitSub() {
      Axios.patch(
        `${adminSubscriptionRoute}/${openSubscriptionDialog.carId}`,
        { expiry_date: selectedDate.getTime() },
        { headers: { token: adminData.auth_token } }
      )
        .then((res) => setRefresher(refresher + 1))
        .catch((err) => console.log(err));
    }

    const handleDateChange = (date) => {
      setSelectedDate(date);
      // alert(selectedDate.getTime());
    };
    return (
      <Dialog
        open={openSubscriptionDialog.open}
        onClose={() => setOpenSubscriptionDialog({ open: false, carId: null })}
      >
        <DialogTitle>
          <Heading7>Edit Subscription</Heading7>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <BodyText>
              Are you sure you want to manually edit subscription for selected
              vehicle
            </BodyText>
            <br />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                // format="MM-dd-yyyy"
                format="yyyy-dd-MM"
                margin="normal"
                id="expiry_date"
                label="Select Expiry Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setOpenSubscriptionDialog({ open: false, carId: null })
            }
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              submitSub();
              setOpenSubscriptionDialog({ open: false, carId: null });
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return User.state.loading ? (
    <Loading />
  ) : (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Avatar
          src={imgSrc}
          alt={imgAlt}
          style={{ ...Card.avatar, marginBottom: 30 }}
        >
          L
        </Avatar>
        <MainBodyText>{User.state.data.company_name}</MainBodyText>
        <BodyText other={{ marginBottom: 20 }}>
          {User.state.data.contact_number}
        </BodyText>
        <CallToAction
          onClick={() => {
            Ui.uiDispatch("showUpdateOrderStatus");
          }}
        >
          Update Status
        </CallToAction>
      </div>
      <br />
      <div style={{ width: "100%" }}>
        <Heading4 other={{ textAlign: "center", marginBottom: 10 }}>
          Cars
        </Heading4>
        {User.state.data.car.map((car) => (
          <Fragment>
            <MaterialCard style={{ width: "100%" }}>
              {/* <CardHeader>
                  <Heading6>{`${car.brand.name} ${car.model.name} ${car.year}`}</Heading6>
                </CardHeader> */}
              <CardContent>
                <Heading6>{`${car.brand.name} ${car.model.name} ${car.year}`}</Heading6>
                <br />
                <div className={classes.carDiv}>
                  <MainBodyText bold color="green">
                    Active Plan:
                  </MainBodyText>
                  <MainBodyText color="green">
                    {car.subscription.plan.title.toUpperCase()}
                  </MainBodyText>
                </div>
                <div className={classes.carDiv}>
                  <MainBodyText bold color="green">
                    Subscription Status:
                  </MainBodyText>
                  {sqlDateToTimestamp(car.subscription.expiry_date) >
                  Date.now() ? (
                    <Button
                      onClick={() => {
                        setOpenSubscriptionDialog({
                          open: true,
                          carId: car.id,
                        });
                      }}
                      variant="contained"
                      className={classes.paidButton}
                    >
                      Active
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      className={classes.notPaidButton}
                      onClick={() => {
                        setOpenSubscriptionDialog({
                          open: true,
                          carId: car.id,
                        });
                      }}
                    >
                      Inactive
                    </Button>
                  )}
                </div>
                <div className={classes.carDiv}>
                  <MainBodyText bold>Subscription Expiry:</MainBodyText>
                  <MainBodyText color={colors.main}>
                    {car.subscription.expiry_date}
                  </MainBodyText>
                </div>
                <div className={classes.carDiv}>
                  <MainBodyText bold>Registration Number:</MainBodyText>
                  <MainBodyText color={colors.main}>
                    {User.state.data.registration_number}
                  </MainBodyText>
                </div>
                <div className={classes.largerSection}>
                  <Heading7>Payment Tickets</Heading7>
                  {car.transaction_log.map((transaction, index) => (
                    <Fragment key={index}>
                      <div
                        style={{
                          border: "1px dotted black",
                          borderRadius: 5,
                          marginTop: 10,
                          marginBottom: 10,
                        }}
                      >
                        <div className={classes.transactionDiv}>
                          <MainBodyText bold>Amount</MainBodyText>
                          <MainBodyText color="green">{`N${transaction.plan.total}`}</MainBodyText>
                        </div>
                        <div className={classes.transactionDiv}>
                          <MainBodyText bold>Status</MainBodyText>
                          {transaction.status == 1 ? (
                            <Button
                              variant="contained"
                              className={classes.paidButton}
                              onClick={() =>
                                changePaymentStatus(transaction.id)
                              }
                            >
                              Paid
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              className={classes.notPaidButton}
                              onClick={() =>
                                changePaymentStatus(transaction.id)
                              }
                            >
                              Not Paid
                            </Button>
                          )}
                        </div>
                        <div className={classes.transactionDiv}>
                          <MainBodyText bold>Plan</MainBodyText>
                          <MainBodyText color={colors.main}>
                            {transaction.plan.title.toUpperCase()}
                          </MainBodyText>
                        </div>
                        <div className={classes.transactionDiv}>
                          <MainBodyText bold>Created</MainBodyText>
                          <MainBodyText color={colors.main}>
                            {sqlDateToTime(transaction.created_at)}
                          </MainBodyText>
                        </div>
                        {/* <div className={classes.transactionDiv}>
                            <MainBodyText bold>Reference Number</MainBodyText>
                            <MainBodyText color={colors.main}>
                              {transaction.reference}
                            </MainBodyText>
                          </div> */}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </CardContent>
              <CardActions></CardActions>
            </MaterialCard>
            <br />
            <br />
            <SubscriptionDialog />
          </Fragment>
        ))}
      </div>
      <OrderTable />
    </div>
  );
}

export default Status;
