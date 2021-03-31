import React from "react";
import { fonts } from "../../globalStyles";
import { Typography } from "@material-ui/core";
import CallToAction from "../basic/CallToAction";

function TitleBar({ title, actionText, actionIcon }) {
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
      <CallToAction>
        {actionIcon} {actionText}{" "}
      </CallToAction>
    </div>
  );
}

export default TitleBar;
