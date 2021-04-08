import React from "react";
import { SidebarContext } from "../../../App";
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
import { Switch, Route, useRouteMatch, Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/Styles";

// Import Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import EventNoteIcon from "@material-ui/icons/EventNote";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { colors } from "../../../globalStyles";

const paint = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: colors.main,
    },
  },
  active: {
    backgroundColor: "red",
  },
}));

function Layout({ children }) {
  const Sidebar = React.useContext(SidebarContext);
  const painting = paint();
  let { path, url } = useRouteMatch();
  console.log(Sidebar.sidebarState.selected);
  return (
    <div style={styles.root}>
      <div style={styles.appbar}>
        <Appbar callToAction showBrand />
      </div>
      <div style={styles.body}>
        <div>
          <Drawer>
            <SiderCard>
              <Link
                to={`${url}/dashboard`}
                className={painting.link}
                onClick={() => Sidebar.sidebarDispatch("dashboard")}
              >
                <SiderItem
                  rad
                  icon={<DashboardIcon />}
                  activeStyle={
                    Sidebar.sidebarState.selected === "dashboard" && {
                      backgroundColor: "#f8e8e5",
                    }
                  }
                >
                  Dashboard
                </SiderItem>
              </Link>
              <Link
                onClick={() => Sidebar.sidebarDispatch("c_profile")}
                to={`${url}/profile`}
                className={painting.link}
                // activeStyle={{ backgroundColor: "green" }}
              >
                <SiderItem
                  rad
                  icon={<PeopleIcon />}
                  activeStyle={
                    Sidebar.sidebarState.selected === "c_profile" && {
                      backgroundColor: "#f8e8e5",
                    }
                  }
                >
                  Profile
                </SiderItem>
              </Link>
              <Link
                to={`${url}/order`}
                className={painting.link}
                onClick={() => Sidebar.sidebarDispatch("c_fixMyCar")}
              >
                <SiderItem
                  rad
                  icon={<EventNoteIcon />}
                  activeStyle={
                    Sidebar.sidebarState.selected === "c_fixMyCar" && {
                      backgroundColor: "#f8e8e5",
                    }
                  }
                >
                  Fix My Car
                </SiderItem>
              </Link>
              <Link
                to={`${url}/car_info`}
                className={painting.link}
                onClick={() => Sidebar.sidebarDispatch("c_carInfo")}
              >
                <SiderItem
                  rad
                  icon={<InsertInvitationIcon />}
                  activeStyle={
                    Sidebar.sidebarState.selected === "c_carInfo" && {
                      backgroundColor: "#f8e8e5",
                    }
                  }
                >
                  Car Information
                </SiderItem>
              </Link>
              <Link
                className={painting.link}
                to=""
                onClick={() => Sidebar.sidebarDispatch("c_help")}
              >
                <SiderItem
                  rad
                  icon={<HelpOutlineIcon />}
                  activeStyle={
                    Sidebar.sidebarState.selected === "c_help" && {
                      backgroundColor: "#f8e8e5",
                    }
                  }
                >
                  Help
                </SiderItem>
              </Link>
            </SiderCard>
          </Drawer>
        </div>
        <div style={{ width: "100%", padding: "0 20px" }}>
          {/* {children} */}
          <Switch>
            <Route path={`${path}/dashboard`}>
              <Dashboard />
            </Route>
            <Route exact path={`${path}/profile`}>
              <UserProfile />
            </Route>
            <Route path={`${path}/order`}>
              <UserOrder />
            </Route>
            <Route path={`${path}/profile/edit`}>
              <EditProfileCard />
            </Route>
            <Route path={`${path}/car_info`}>
              <CarInfo />
            </Route>
            <Route exact path={`${path}/`}>
              <Dashboard />
            </Route>
          </Switch>
          <CreateOrder />
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
