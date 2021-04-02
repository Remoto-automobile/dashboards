import React from "react";
import { Button } from "@material-ui/core";
import { colors } from "../../globalStyles";

function CallToAction({ children, onClick }) {
  return (
    <Button variant="contained" style={styles} onClick={onClick}>
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
};

export default CallToAction;
