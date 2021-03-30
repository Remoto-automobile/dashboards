import React from "react";
import { Typography, Button, Avatar } from "@material-ui/core";
import { Card, fonts, colors } from "../../globalStyles";

function ProfileCard({ children, flex, title, picSrc, picAlt, action }) {
  return (
    <div
      style={{
        ...Card.spacing,
        flex: flex,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
        maxWidth: 960,
        minHeight: 320,
        // width: 640,
        // height: 320,
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
          {title}
        </Typography>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding: "5px 50px",
        }}
      >
        <div style={{ padding: "auto 30px", marginRight: 30 }}>
          <Avatar src={picSrc} alt={picAlt || "image"} style={Card.avatar} />
        </div>
        <div style={{ flex: 1 }}>{children}</div>
      </div>

      <div style={{ display: "flex", width: "100%", justifyContent: "right" }}>
        <Button
          variant="outlined"
          style={{
            color: colors.bodyText,
            textTransform: "capitalize",
            fontWeight: 700,
          }}
        >
          {action}
        </Button>
      </div>
    </div>
  );
}

export default ProfileCard;
