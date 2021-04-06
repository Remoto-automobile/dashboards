import React from "react";
import { Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Card, fonts } from "../../globalStyles";
import { Heading6, BodyText } from "../../typography";

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
        <Heading6 color={Card.color}>Orders</Heading6>
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
          <BodyText bold>100 Completed</BodyText>
        </div>
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon style={{ color: "yellow", marginRight: 30 }} />
          <BodyText bold>50 Ongoing</BodyText>
        </div>
        <div style={Card.orderBullet}>
          <FiberManualRecordIcon style={{ color: "red", marginRight: 30 }} />
          <BodyText bold>19 Withdrawn</BodyText>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
