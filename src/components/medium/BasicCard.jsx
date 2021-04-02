import React from "react";
import { Card } from "../../globalStyles";

function BasicCard({ width, height, custom, children }) {
  return (
    <div
      style={{
        ...Card.spacing,
        width: width || "auto",
        height: height || "auto",
        backgroundColor: Card.bgColor,
        borderRadius: "1em",
        ...custom,
      }}
    >
      {children}
    </div>
  );
}

export default BasicCard;
