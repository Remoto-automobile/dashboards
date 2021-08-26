import React from "react";
import {
  Avatar,
  Card as MaterialCard,
  CardActions,
  CardContent,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";

import { UiContext } from "../../../App";
import {
  MainBodyText,
  BodyText,
  Heading4,
  Heading6,
} from "../../../typography";
import { fonts, Card, colors } from "../../../globalStyles";
import OrderTable from "../../medium/OrderTable";
import CallToAction from "../../basic/CallToAction";

const useStyles = makeStyles((theme) => ({
  carDiv: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
  },
  divider: {
    color: colors.main,
  },
}));

function Status(imgSrc, imgAlt) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const Ui = React.useContext(UiContext);
  return (
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
        <MainBodyText>
          {location.state ? location.state.user.company_name : history.goBack()}
        </MainBodyText>
        <BodyText other={{ marginBottom: 20 }}>
          {location.state
            ? location.state.user.contact_number
            : history.goBack()}
          {/* {console.log(location.state.user)} */}
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
        <Heading4>Cars</Heading4>
        {location.state.user &&
          location.state.user.car.map((car) => (
            <React.Fragment>
              <MaterialCard style={{ width: "100%" }}>
                {/* <CardHeader>
                  <Heading6>{`${car.brand.name} ${car.model.name} ${car.year}`}</Heading6>
                </CardHeader> */}
                <CardContent>
                  <Heading6>{`${car.brand.name} ${car.model.name} ${car.year}`}</Heading6>
                  <br />
                  <div className={classes.carDiv}>
                    <MainBodyText bold>Brand:</MainBodyText>
                    <MainBodyText>{car.brand.name}</MainBodyText>
                  </div>
                  <hr className={classes.divider} />
                  <div className={classes.carDiv}>
                    <MainBodyText bold>Model:</MainBodyText>
                    <MainBodyText>{car.model.name}</MainBodyText>
                  </div>
                  <hr className={classes.divider} />
                  <div className={classes.carDiv}>
                    <MainBodyText bold>Registration Number:</MainBodyText>
                    <MainBodyText>
                      {location.state.user
                        ? location.state.user.registration_number
                        : history.goBack()}
                    </MainBodyText>
                  </div>
                  <hr className={classes.divider} />
                  <div className={classes.carDiv}>
                    <MainBodyText bold>Plan:</MainBodyText>
                    <MainBodyText>NULL</MainBodyText>
                  </div>
                  <hr className={classes.divider} />
                  <div className={classes.carDiv}>
                    <MainBodyText bold>Payment Status:</MainBodyText>
                    <MainBodyText>NULL</MainBodyText>
                  </div>
                  <hr className={classes.divider} />
                  <div className={classes.carDiv}>
                    <MainBodyText bold>Payment Expiry:</MainBodyText>
                    <MainBodyText>PlaceHolder Date</MainBodyText>
                  </div>
                </CardContent>
                <CardActions></CardActions>
              </MaterialCard>
              <br />
              <br />
            </React.Fragment>
          ))}
      </div>
      <OrderTable />
    </div>
  );
}

export default Status;
