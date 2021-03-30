import React from "react";
import { colors } from "../../../globalStyles";

import Appbar from "../../pageLayout/Appbar";
import Drawer from "../../pageLayout/Drawer";
import SiderCard from "../../medium/SiderCard";
import SiderItem from "../../basic/SiderItem";
import TitleBar from "../../pageLayout/TitleBar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import EventNoteIcon from "@material-ui/icons/EventNote";

function Layout({ children }) {
  return (
    <div style={styles.root}>
      <div style={styles.appbar}>
        <Appbar />
      </div>
      <div style={styles.body}>
        <div style={{ marginTop: 30 }}>
          <Drawer>
            <SiderCard>
              <SiderItem>
                <DashboardIcon /> Dashboard
              </SiderItem>
              <SiderItem>
                <PeopleIcon /> Products
              </SiderItem>
              <SiderItem>
                <EventNoteIcon /> Users
              </SiderItem>
              <SiderItem>Notifications</SiderItem>
              <SiderItem>Coupon Codes</SiderItem>
              <SiderItem>Help</SiderItem>
            </SiderCard>
          </Drawer>
        </div>
        <div style={{ width: "100%", backgroundColor: colors.secondaryBg }}>
          <TitleBar />
          <div style={{ width: "100%", padding: "0 20px" }}>
            {/* {children} */}
          </div>
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
  appbar: {},
  body: {
    margin: "auto 20px",
    display: "flex",
  },
};

export default Layout;
