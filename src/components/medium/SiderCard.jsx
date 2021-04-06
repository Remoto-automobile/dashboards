import React from "react";
import { Appdrawer, Card, pageDynamics } from "../../globalStyles";
import { Heading4 } from "../../typography";
import brandLogo from "../../assets/REMOTO@2x 2.png";

function SiderCard({ children }) {
  const responsive = pageDynamics();
  return (
    <div style={styles.card}>
      <div style={styles.brand} className={responsive.mobileOnly}>
        <img src={brandLogo} alt={<Heading4>Remoto</Heading4>} />
      </div>
      {children}
    </div>
  );
}

const styles = {
  card: {
    width: `${Appdrawer.drawerWidth} - 20px`,
    // margin: "inherit 10px",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: "1em",
    backgroundColor: Card.bgColor,
    // backgroundColor: "red",
    padding: "15px",
  },
  brand: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // margin: "15px auto",
    marginBottom: 30,
  },
};
export default SiderCard;
