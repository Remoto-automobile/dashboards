import React from "react";
import { Appdrawer, Card } from "../../globalStyles";

function SiderCard({ children }) {
  return <div style={styles.card}>{children}</div>;
}

const styles = {
  card: {
    width: `${Appdrawer.drawerWidth} - 20px`,
    margin: "auto 10px",
    borderRadius: "1.2em",
    backgroundColor: Card.bgColor,
    padding: "20px 15px 180px 15px",
  },
};
export default SiderCard;
