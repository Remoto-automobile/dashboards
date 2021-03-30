import React from "react";
import { fonts } from "../../globalStyles";
import { Paper, Typography } from "@material-ui/core";
import CallToAction from "../basic/CallToAction";

function TitleBar({ title }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <Typography style={fonts.heading6}>{title || "Title"}</Typography>
      <CallToAction> Do Something </CallToAction>
    </div>
  );
}

export default TitleBar;
