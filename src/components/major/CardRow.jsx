import React from "react";

function CardRow({ children }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}

export default CardRow;
