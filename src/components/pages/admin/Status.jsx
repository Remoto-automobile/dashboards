import React from "react";
import { UiContext } from "../../../App";
import { fonts } from "../../../globalStyles";
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
        }}
      >
        <Avatar src={imgSrc} alt={imgAlt}>
          L
        </Avatar>
        <Typography style={{ ...fonts.mainBodyText }}>
          Leslie Alexander
        </Typography>
        <Typography style={{ ...fonts.bodyText }}>+23445024566</Typography>
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
