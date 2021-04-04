import React from "react";
import { Card, pageDynamics } from "../../globalStyles";
import EditProfileForm from "../basic/EditProfileForm";
import { Heading6, BodyText } from "../../typography";
import BasicCard from "../medium/BasicCard";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import profilePicture from "../../assets/temp/profilePicture.jpg";
import { Avatar } from "@material-ui/core";

function EditProfileCard({ flex, title, picSrc, picAlt, children }) {
  const responsive = pageDynamics();
  return (
    <BasicCard
      custom={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        marginBottom: 50,
      }}
      width="100%"
    >
      <div style={Card.title}>
        <Heading6 color={Card.color}>{title || "Edit Profile"}</Heading6>
      </div>
      <hr width="100%" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <Avatar
          src={profilePicture}
          alt={picAlt || "image"}
          style={{ ...Card.avatar, margin: "30px auto" }}
        >
          <AddAPhotoIcon />
        </Avatar>
        <BodyText>
          * The uploaded image must be 500px wide and 500px long
        </BodyText>
      </div>
      <div
        className={responsive.desktopOnly}
        style={{
          justifyContent: "center",
        }}
      >
        <EditProfileForm mobile={false} />
      </div>
      <div
        className={responsive.mobileOnly}
        style={{
          justifyContent: "center",
        }}
      >
        <EditProfileForm mobile={true} />
      </div>
    </BasicCard>
  );
}

export default EditProfileCard;
