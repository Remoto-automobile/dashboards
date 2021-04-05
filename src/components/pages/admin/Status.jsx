import React from "react";
import { UiContext } from "../../../App";
import { MainBodyText, BodyText } from "../../../typography";
import { fonts, Card } from "../../../globalStyles";
import OrderTable from "../../medium/OrderTable";
import CallToAction from "../../basic/CallToAction";
import { Avatar, Typography } from "@material-ui/core";

function Status(imgSrc, imgAlt) {
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
        <MainBodyText>Leslie Alexander</MainBodyText>
        <BodyText other={{ marginBottom: 20 }}>+23445024566</BodyText>
        <CallToAction
          onClick={() => {
            Ui.uiDispatch("showUpdateOrderStatus");
          }}
        >
          Update Status
        </CallToAction>
      </div>
      <OrderTable />
    </div>
  );
}

export default Status;
