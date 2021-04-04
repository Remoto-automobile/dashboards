import React from "react";
import { Typography, Button, Avatar } from "@material-ui/core";
import { Card, fonts, colors } from "../../globalStyles";
import profilePicture from "../../assets/temp/profilePicture.jpg";
import { Link, useRouteMatch } from "react-router-dom";

function ProfileCard({
  children,
  flex,
  title,
  picSrc,
  picAlt,
  actionText,
  action,
}) {
  const { path } = useRouteMatch();
  let location;
  if (action === "editProfile") {
    location = `${path}/edit`;
  }
  return (
    <div
      style={{
        ...Card.spacing,
        flex: flex || 1,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
        // maxWidth: 960,
        minHeight: 320,
        // width: 640,
        // height: 320,
      }}
    >
      <div style={Card.title}>
        <Typography style={{ ...fonts.heading6, color: Card.color }}>
          {title || "Profile"}
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
        <div style={{ padding: "auto 30px", marginRight: 50 }}>
          <Avatar
            src={profilePicture}
            alt={picAlt || "image"}
            style={Card.avatar}
          />
        </div>
        <div style={{ flex: 1 }}>{children}</div>
      </div>

      <div style={{ display: "flex", width: "100%", justifyContent: "right" }}>
        <Link to={location}>
          <Button
            variant="outlined"
            style={{
              color: colors.bodyText,
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            {actionText}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
