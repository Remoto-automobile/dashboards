import React from "react";
import { Heading7, Heading6, BodyText } from "../../typography";
import { Card, colors } from "../../globalStyles";
import check from "../../assets/check.jpg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Avatar } from "@material-ui/core";

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
        <Heading6 color={Card.color}>{title || "Current Order"}</Heading6>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        <div
          style={{
            padding: "auto 30px",
            marginRight: 40,
          }}
        >
          <img
            style={{ width: 160, height: 120 }}
            src={check}
            alt={<CheckCircleIcon />}
          />
          {/* <CheckCircleIcon />
          </Avatar> */}
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          <Heading7>Thank you for your order</Heading7>
          <BodyText color={colors.bodyText}>
            We are currently processing your order. You can find updates to your
            order under Order History
          </BodyText>
        </div>
      </div>
    </div>
  );
}

export default OrderThanks;
