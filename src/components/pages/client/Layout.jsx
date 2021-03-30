import React from "react";
import Appbar from "../../pageLayout/Appbar";
import Drawer from "../../pageLayout/Drawer";
import SiderCard from "../../medium/SiderCard";
import SiderItem from "../../basic/SiderItem";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import UserOrder from "./UserOrder";
import EditProfileCard from "../../medium/EditProfileCard";
import DashboardIcon from "@material-ui/icons/Dashboard";

function Layout({ children }) {
  return (
    <div style={styles.root}>
      <div style={styles.appbar}>
        <Appbar callToAction />
      </div>
      <div style={styles.body}>
        <div>
          <Drawer>
            <SiderCard>
              <SiderItem icon={<DashboardIcon />}>Dashboard</SiderItem>
              <SiderItem>Profile</SiderItem>
              <SiderItem>Fix My Car</SiderItem>
              <SiderItem>Car Information</SiderItem>
              <SiderItem>Help</SiderItem>
            </SiderCard>
          </Drawer>
        </div>
        <div style={{ width: "100%", padding: "0 20px" }}>
          {/* {children} */}
          <Dashboard />
          <UserProfile />
          <UserOrder />
          <EditProfileCard />
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
