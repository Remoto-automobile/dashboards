import React from "react";
import { Card, fonts, colors } from "../../globalStyles";
import { Typography, Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function OrderThanks({ flex, title }) {
  return (
    <div
      style={{
        ...Card.spacing,
        flex: flex || 1,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
        minHeight: 280,
      }}
    >
      <div style={Card.title}>
        <Typography style={{ ...fonts.heading6, color: Card.color }}>
          {title || "Current Order"}
        </Typography>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "auto 30px", marginRight: 50 }}>
          <Avatar style={Card.avatar}>
            <CheckCircleIcon />
          </Avatar>
        </div>
        <div style={{ flex: 1 }}>
          <Typography style={{ ...fonts.heading7 }}>
            Thank you for your order
          </Typography>
          <Typography style={{ ...fonts.bodyText, color: colors.bodyText }}>
            We are currently processing your order. You can find updates to your
            order under Order History
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default OrderThanks;
