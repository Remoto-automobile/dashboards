import React from "react";
import { Card, fonts, pageDynamics } from "../../globalStyles";
import EditProfileForm from "../basic/EditProfileForm";
import { Typography, Divider } from "@material-ui/core";

function EditProfileCard({ flex, title, picSrc, picAlt, children }) {
  const responsive = pageDynamics();
  return (
    <div
      style={{
        ...Card.spacing,
        flex: flex || 1,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
      }}
    >
      <div style={Card.title}>
        <Typography style={{ ...fonts.heading6, color: Card.color }}>
          {title || "Edit Profile"}
        </Typography>
      </div>
      <hr width="100%" />
      <div
        style={{
          flex: 1,
          display: flex,
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          padding: "auto 30%",
          marginTop: 25,
        }}
      >
        {/* <div>
          <Avatar src={picSrc} alt={picAlt || "image"} style={Card.avatar} />
        </div> */}
        <div className={responsive.desktopOnly}>
          <EditProfileForm mobile={false} />
        </div>
        <div className={responsive.mobileOnly}>
          <EditProfileForm mobile={true} />
        </div>
      </div>
    </div>
  );
}

export default EditProfileCard;
