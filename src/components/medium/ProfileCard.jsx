import React from "react";
import { Button, Avatar } from "@material-ui/core";
import { Card, colors, pageDynamics } from "../../globalStyles";
import profilePicture from "../../assets/temp/profilePicture.jpg";
import { Link, useRouteMatch } from "react-router-dom";
import { Heading6, Heading7, MainBodyText } from "../../typography";

function ProfileCard({
  children,
  flex,
  title,
  picSrc,
  picAlt,
  actionText,
  action,
}) {
  let responsive = pageDynamics();
  const { path } = useRouteMatch();
  let location;
  if (action === "editProfile") {
    location = `${path}/edit`;
  }
  if (action === "View Profile") location = "/client/profile";
  return (
    <div
      style={{
        ...Card.spacing,
        flex: flex || 1,
        borderRadius: 14,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
        minHeight: 320,
      }}
    >
      <div style={Card.title}>
        <Heading6 color={Card.color}>{title || "Profile"}</Heading6>
      </div>

      <div className={responsive.desktopOnly}>
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
      </div>

      <div className={responsive.mobileOnly}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // padding: "5px 50px",
          }}
        >
          <div style={{ padding: "auto 30px", marginBottom: 20, marginTop: 5 }}>
            <Avatar
              src={profilePicture}
              alt={picAlt || "image"}
              style={{ width: 90, height: 90 }}
            />
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
            {children}
          </div>
        </div>
      </div>

      <div
        className={responsive.desktopOnly}
        style={{ width: "100%", justifyContent: "right" }}
      >
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
      <div
        className={responsive.mobileOnly}
        style={{ justifyContent: "center", marginTop: 20 }}
      >
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
