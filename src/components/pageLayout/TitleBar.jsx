import React from "react";
import { fonts, navigation } from "../../globalStyles";
import { Typography } from "@material-ui/core";
import CallToAction from "../basic/CallToAction";
import { Link } from "react-router-dom";

function TitleBar({
  title,
  actionText,
  actionIcon,
  onActionClick,
  children,
  ctaSize,
  linkLocation,
  noCtaButton,
}) {
  let linkDecoration = navigation();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        marginBottom: 30,
        // flexWrap: "wrap",
      }}
    >
      <Typography style={fonts.heading6}>{title || "Title"}</Typography>
      {children}
      {!noCtaButton && (
        <Link to={linkLocation} className={linkDecoration.link}>
          <CallToAction onClick={onActionClick} size={ctaSize}>
            {actionIcon} {actionText}{" "}
          </CallToAction>
        </Link>
      )}
    </div>
  );
}

export default TitleBar;
