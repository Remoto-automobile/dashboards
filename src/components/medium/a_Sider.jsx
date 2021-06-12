import React from "react";
import { Appdrawer, Card, colors } from "../../globalStyles";
import { Heading4, BodyText } from "../../typography";
import brandLogo from "../../assets/REMOTO@2x 2.png";

function SiderCard({ children }) {
  return (
    <div style={styles.card}>
      <div style={styles.brand}>
        <img src={brandLogo} alt={<Heading4>Remoto</Heading4>} />
      </div>
      <div>
        <BodyText
          color={colors.bodyText}
          other={{ margin: 15, marginLeft: 30, marginBottom: 5 }}
        >
          
        </BodyText>
      </div>
      <div>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    width: Appdrawer.drawerWidth,
    margin: 0,
    backgroundColor: Card.bgColor,
    // padding: "20px 15px 180px 15px",
    borderRadius: 0,
    minHeight: "95vh",
  },
  brand: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px auto",
  },
};
export default SiderCard;
