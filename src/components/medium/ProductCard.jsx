import React from "react";
import { Card, fonts, colors } from "../../globalStyles";
import { Typography, Button, Avatar } from "@material-ui/core";

function ProductCard({
  flex,
  title,
  imgSrc = "n",
  imgAlt,
  displayData,
  type = "action",
}) {
  return (
    <div
      style={{
        ...Card.spacing,
        // flex: flex || 1,
        borderRadius: 8,
        backgroundColor: Card.bgColor,
        flexDirection: "column",
        // maxWidth: 960,
        width: 360,
        minHeight: 360 / 2.4,
        margin: 20,
        // width: 640,
        // height: 320,
      }}
    >
      <div style={{ ...Card.title, flex: 1 }}>
        {imgSrc && <Avatar src={imgSrc} alt={imgAlt || "PI"} />}
        <Typography
          style={{
            color: Card.color,
            ...fonts.mainBodyText,
            marginLeft: 20,
            fontWeight: 600,
          }}
        >
          {title || "Product"}
        </Typography>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "right" }}>
        {type === "action" ? (
          <Button
            variant="outlined"
            style={{
              color: colors.bodyText,
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            View Product
          </Button>
        ) : (
          <Typography style={{ ...fonts.heading7 }}>{displayData}</Typography>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
