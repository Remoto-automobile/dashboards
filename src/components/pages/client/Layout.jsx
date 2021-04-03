import React from "react";
import Appbar from "../../pageLayout/Appbar";
import Drawer from "../../pageLayout/Drawer";
import SiderCard from "../../medium/SiderCard";
import SiderItem from "../../basic/SiderItem";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import UserOrder from "./UserOrder";
import EditProfileCard from "../../medium/EditProfileCard";
import CreateOrder from "./CreateOrder";
import CarInfo from "./CarInfo";
import { Switch, Route } from "react-router-dom";

// Import Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import EventNoteIcon from "@material-ui/icons/EventNote";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Layout({ children }) {
  return (
    <div style={styles.root}>
      <div style={styles.appbar}>
        <Appbar callToAction showBrand />
      </div>
      <div style={styles.body}>
        <div>
          <Drawer>
            <SiderCard>
              <SiderItem>
                <DashboardIcon /> Dashboard
              </SiderItem>
              <SiderItem>
                {" "}
                <PeopleIcon /> Profile
              </SiderItem>
              <SiderItem>
                <EventNoteIcon /> Fix My Car
              </SiderItem>
              <SiderItem>
                <InsertInvitationIcon /> Car Information
              </SiderItem>
              <SiderItem>
                <HelpOutlineIcon /> Help
              </SiderItem>
            </SiderCard>
          </Drawer>
        </div>
        <div style={{ width: "100%", padding: "0 20px" }}>
          {/* {children} */}
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          {/* <UserProfile />
          <UserOrder />
          <EditProfileCard />
          <CreateOrder />
          <CarInfo /> */}
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
