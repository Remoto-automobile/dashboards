import React from "react";
import { Card, fonts, colors } from "../../globalStyles";
import { Typography, Button, Avatar, makeStyles } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const paint = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    // margin: 10,
    padding: 20,
    paddingTop: 5,
    backgroundColor: Card.bgColor,
    flexDirection: "column",
    width: 360,
    minHeight: 360 / 2.4,
    margin: 15,
    "&:hover": {
      // backgroundColor: `${colors.main}55`,
      backgroundColor: "#eeeeee",
    },
  },
}));

function ProductCard({
  flex,
  title,
  systemId,
  imgSrc,
  imgAlt,
  displayData,
  type = "action",
  onButtonClick,
  bg,
  routeLink,
}) {
  const { path } = useRouteMatch();
  const painting = paint();
  return (
    <div className={painting.card}>
      <div style={{ ...Card.title, flex: 1, alignItems: "center" }}>
        {imgSrc && (
          <Avatar
            src={imgSrc}
            alt={imgAlt || "PI"}
            style={{ backgroundColor: bg, padding: 10, height: 48, width: 48 }}
          />
        )}
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
          <Link to={`${path}/${routeLink}?systemId=${systemId}`}>
            <Button
              variant="outlined"
              // onClick={onButtonClick}
              style={{
                color: colors.bodyText,
                textTransform: "capitalize",
                fontWeight: 700,
              }}
            >
              View Product
            </Button>
          </Link>
        ) : (
          <Typography style={{ ...fonts.heading7 }}>{displayData}</Typography>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
