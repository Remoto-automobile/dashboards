import React from "react";
import { Appdrawer, Card, fonts, colors } from "../../globalStyles";
import { Typography } from "@material-ui/core";

function SiderCard({ children }) {
  return (
    <div style={styles.card}>
      <div style={styles.brand}>
        <Typography
          style={{
            ...fonts.heading4,
            textTransform: "uppercase",
            color: colors.dark3,
            margin: "auto",
          }}
        >
          Remoto
        </Typography>
      </div>
      <div>
        <Typography style={{ ...fonts.bodyText, color: colors.bodyText }}>
          Admin
        </Typography>
      </div>
      {children}
    </div>
  );
}

const styles = {
  card: {
    width: Appdrawer.drawerWidth,
    margin: 0,
    backgroundColor: Card.bgColor,
    padding: "20px 15px 180px 15px",
    borderRadius: 0,
  },
  brand: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
  },
};
export default SiderCard;
