import React from "react";
import { fonts } from "../../globalStyles";
import { Typography } from "@material-ui/core";
import CallToAction from "../basic/CallToAction";

function TitleBar({
  title,
  actionText,
  actionIcon,
  onActionClick,
  children,
  ctaSize,
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        marginBottom: 30,
        // backgroundColor: "red",
      }}
    >
      <Typography style={fonts.heading6}>{title || "Title"}</Typography>
      {children}
      <CallToAction onClick={onActionClick} size={ctaSize}>
        {actionIcon} {actionText}{" "}
      </CallToAction>
    </div>
  );
}

export default TitleBar;
