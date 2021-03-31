import React from "react";
import { colors } from "../../../globalStyles";

import Appbar from "../../pageLayout/Appbar";
import Drawer from "../../pageLayout/Drawer";
import SiderCard from "../../medium/a_Sider";
import SiderItem from "../../basic/SiderItem";

// import Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import EventNoteIcon from "@material-ui/icons/EventNote";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import HelpIcon from "@material-ui/icons/Help";

import Products from "./Products";
import Dashboard from "./Dashboard";
import PremiumPlan from "./PremiumPlan";
import MiniPlan from "./MiniPlan";
import AccessPlan from "./AccessPlan";

function Layout({ children }) {
  return (
    <div style={styles.root}>
      <div>
        <Drawer>
          <SiderCard>
            <SiderItem>
              <DashboardIcon />
              Dashboard
            </SiderItem>
            <SiderItem>
              <PeopleIcon />
              Products
            </SiderItem>
            <SiderItem>
              <EventNoteIcon />
              Users
            </SiderItem>
            <SiderItem>
              <NotificationsIcon />
              Notifications
            </SiderItem>
            <SiderItem>
              <ConfirmationNumberIcon />
              Coupon Codes
            </SiderItem>
            <SiderItem>
              <HelpIcon />
              Help
            </SiderItem>
          </SiderCard>
        </Drawer>
      </div>
      <div style={styles.body}>
        <div style={styles.appbar}>
          <Appbar bg="#f6f8fb" />
        </div>
        <div style={{ width: "100%", backgroundColor: colors.secondaryBg }}>
          <div style={{ width: "100%", padding: "0 20px" }}>
            <Products />
            <Dashboard />
            <PremiumPlan />
            <MiniPlan />
            <AccessPlan />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    // flexDirection: "column",
  },
  appbar: {},
  body: {
    margin: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#f6f8fb",
  },
};

export default Layout;
