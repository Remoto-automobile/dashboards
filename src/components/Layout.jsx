import React from "react";
import Appbar from "./pageLayout/Appbar";
import Drawer from "./pageLayout/Drawer";
import SiderCard from "./medium/SiderCard";
import SiderItem from "./basic/SiderItem";
import CardRow from "./major/CardRow";
import ProfileCard from "./medium/ProfileCard";
import OrderCard from "./medium/OrderCard";
import { fonts } from "../globalStyles";
import { Typography } from "@material-ui/core";

function Layout({ children }) {
  return (
    <div style={styles.root}>
      <div style={styles.appbar}>
        <Appbar />
      </div>
      <div style={styles.body}>
        <div>
          <Drawer>
            <SiderCard>
              <SiderItem>Dashboard</SiderItem>
              <SiderItem>Profile</SiderItem>
              <SiderItem>Fix My Car</SiderItem>
              <SiderItem>Car Information</SiderItem>
              <SiderItem>Help</SiderItem>
            </SiderCard>
          </Drawer>
        </div>
        <div style={{ width: "100%", padding: "0 20px" }}>
          {/* {children} */}
          <CardRow>
            <ProfileCard
              action="View Profile"
              flex={2}
              picSrc="https://picsum.photos/120/120"
              title="Profile"
            >
              <Typography style={fonts.heading7}>Remoto Official</Typography>
              <Typography style={{ ...fonts.mainBodyText, margin: 5 }}>
                Phone: <span style={{ fontWeight: 700 }}>+2348000000000</span>
              </Typography>
              <Typography style={{ ...fonts.mainBodyText, margin: 5 }}>
                Car Brand:{" "}
                <span style={{ fontWeight: 700 }}>Toyota, Corolla, 2018</span>
              </Typography>
            </ProfileCard>
            <OrderCard flex={1} />
          </CardRow>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  appbar: {
    marginBottom: 30,
  },
  body: {
    margin: "auto 20px",
    display: "flex",
  },
};

export default Layout;
