import React from "react";
import { colors } from "../../../globalStyles";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { SidebarContext } from "../../../App";

import Appbar from "../../pageLayout/Appbar";
import Drawer from "../../pageLayout/Drawer";
import SiderCard from "../../medium/a_Sider";
import SiderItem from "../../basic/SiderItem";

// import Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { LocalAtm } from "@material-ui/icons"
import EventNoteIcon from "@material-ui/icons/EventNote";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import HelpIcon from "@material-ui/icons/Help";

import Products from "./Products";
import Dashboard from "./Dashboard";
import PremiumPlan from "./PremiumPlan";
import MiniPlan from "./MiniPlan";
import AccessPlan from "./AccessPlan";
import UpdateData from "./UpdateData";
import Users from "./Users";
import Status from "./Status";
import UpdateStatus from "./UpdateStatus";
import Notifications from "./Notifications";
import AddProduct from "./AddProduct";
import ProductDetails from "./ProductDetails";
import UpdateProductData from "./UpdateProductData";
import UpdatePrice from "./UpdatePrice";
import UpdateProbability from "./UpdateProbability";

const paint = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: colors.main,
    },
  },
}));

function Layout({ children }) {
  const Sidebar = React.useContext(SidebarContext);
  const painting = paint();
  const { url, path } = useRouteMatch();
  return (
    <div style={styles.root}>
      <div>
        <Drawer>
          <SiderCard>
            <Link
              className={painting.link}
              to={`${url}/dashboard`}
              onClick={() => Sidebar.sidebarDispatch("dashboard")}
            >
              <SiderItem
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
              className={painting.link}
              to={`${url}/products`}
              onClick={() => Sidebar.sidebarDispatch("a_products")}
            >
              <SiderItem
                icon={<PeopleIcon />}
                activeStyle={
                  Sidebar.sidebarState.selected === "a_products" && {
                    backgroundColor: "#f8e8e5",
                  }
                }
              >
                Products
              </SiderItem>
            </Link>

            <Link
              className={painting.link}
              to={`${url}/users`}
              onClick={() => Sidebar.sidebarDispatch("a_users")}
            >
              <SiderItem
                icon={<EventNoteIcon />}
                activeStyle={
                  Sidebar.sidebarState.selected === "a_users" && {
                    backgroundColor: "#f8e8e5",
                  }
                }
              >
                Users
              </SiderItem>
            </Link>

            <Link
              className={painting.link}
              to={`${url}/notifications`}
              onClick={() => Sidebar.sidebarDispatch("a_notification")}
            >
              <SiderItem
                icon={<NotificationsIcon />}
                activeStyle={
                  Sidebar.sidebarState.selected === "a_notification" && {
                    backgroundColor: "#f8e8e5",
                  }
                }
              >
                Notifications
              </SiderItem>
            </Link>

            <Link
              className={painting.link}
              to={`${url}/coupon`}
              onClick={() => Sidebar.sidebarDispatch("a_couponCode")}
            >
              <SiderItem
                icon={<ConfirmationNumberIcon />}
                activeStyle={
                  Sidebar.sidebarState.selected === "a_couponCode" && {
                    backgroundColor: "#f8e8e5",
                  }
                }
              >
                Coupon Codes
              </SiderItem>
            </Link>

            <Link
              className={painting.link}
              to={`${url}/help`}
              onClick={() => Sidebar.sidebarDispatch("a_help")}
            >
              <SiderItem
                icon={<HelpIcon />}
                activeStyle={
                  Sidebar.sidebarState.selected === "a_help" && {
                    backgroundColor: "#f8e8e5",
                  }
                }
              >
                Help
              </SiderItem>
            </Link>

            <Link
              className={painting.link}
              to={`#`}
              onClick={() => {
                localStorage.removeItem("admin_token")
                window.location.href = "/admin/login"
              }}
            >
              <SiderItem
                icon={<LocalAtm />}
                activeStyle={
                  Sidebar.sidebarState.selected === "a_help" && {
                    backgroundColor: "#f8e8e5",
                  }
                }
              >
                Logout
              </SiderItem>
            </Link>
          </SiderCard>
        </Drawer>
      </div>
      <div style={styles.body}>
        <div style={styles.appbar}>
          <Appbar bg="#f6f8fb" />
        </div>
        <div style={{ width: "100%", backgroundColor: colors.secondaryBg }}>
          <div style={{ width: "100%", padding: "0 20px" }}>
            <Switch>
              <Route exact path={`${path}`}>
                <Products />
              </Route>
              <Route exact path={`${path}/products`}>
                <Products />
              </Route>
              <Route path={`${path}/dashboard`}>
                <Dashboard />
              </Route>
              <Route path={`${path}/plans/premium`}>
                <PremiumPlan />
              </Route>
              <Route path={`${path}/plans/mini`}>
                <MiniPlan />
              </Route>
              <Route path={`${path}/plans/access`}>
                <AccessPlan />
              </Route>
              <Route exact path={`${path}/users`}>
                <Users />
              </Route>
              <Route path={`${path}/users/view`}>
                <Status />
              </Route>
              <Route path={`${path}/notifications`}>
                <Notifications />
              </Route>
              <Route path={`${path}/products/add`}>
                <AddProduct />
              </Route>
              <Route path={`${path}/products/:product`}>
                <ProductDetails />
              </Route>
            </Switch>

            <UpdateStatus />
            <UpdateData />
            <UpdateProductData />
            <UpdatePrice />
            <UpdateProbability />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
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
