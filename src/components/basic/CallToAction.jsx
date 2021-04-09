import React from "react";
import { Button } from "@material-ui/core";
import { colors } from "../../globalStyles";

function CallToAction({ children, onClick, size }) {
  let width;
  switch (size) {
    case "big":
      width = 220;
      break;
    case "medium":
      width = 200;

      break;
    case "small":
      width = 180;

      break;
    case "tiny":
      width = 160;

      break;
    default:
      width = "auto";
  }
  return (
    <Button
      variant="contained"
      style={{ ...styles, width: width }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

const styles = {
  backgroundColor: colors.main,
  color: "#ffffff",
  fontWeight: 600,
  textTransform: "capitalize",
  // margin: "auto 50px auto 30px",
  display: "flex",
  flexWrap: "nowrap",
  borderRadius: "0.6em",
};

export default CallToAction;
