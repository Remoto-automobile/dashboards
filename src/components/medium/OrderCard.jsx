import React from "react";
import { Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Card, fonts } from "../../globalStyles";

function OrderCard({ children, flex }) {
  return (
    <div
      style={{
        ...Card.spacing,
        flex: flex,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          width: "100%",
          paddingLeft: 20,
        }}
      >
        <Typography style={{ ...fonts.heading6, color: Card.color }}>
          Orders
        </Typography>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon style={{ color: "green", marginRight: 30 }} />
          <Typography style={{ fontWeight: 600 }}>100 Completed</Typography>
        </div>
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon style={{ color: "yellow", marginRight: 30 }} />
          <Typography style={{ fontWeight: 600 }}>50 Ongoing</Typography>
        </div>
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon style={{ color: "red", marginRight: 30 }} />
          <Typography style={{ fontWeight: 600 }}>19 Withdrawn</Typography>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
