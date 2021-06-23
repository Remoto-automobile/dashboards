import React from "react";
import { UiContext } from "../../App";
import profilePicture from "../../assets/temp/profilePicture.jpg";
import {
  Appbar,
  colors,
  fonts,
  pageDynamics,
  Appdrawer,
} from "../../globalStyles";
import brandLogo from "../../assets/REMOTO@2x 2.png";
import CallToAction from "../basic/CallToAction";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import CreateOrderDialog from "../pages/client/CreateOrder";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  brand: {
    width: Appdrawer.drawerWidth,
    paddingLeft: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    backgroundColor: Appbar.searchBg,
    "&:hover": {
      backgroundColor: Appbar.searchBgHover,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Appbar.searchPlaceholder,
  },
  inputRoot: {
    // color: "inherit",
    color: Appbar.searchPlaceholder,
  },
  inputInput: {
    color: colors.bodyText,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  alertIcon: {
    transform: "rotate(25deg)",
  },
}));

export default function PrimarySearchAppBar({
  callToAction,
  showBrand,
  bg,
  dataUpdate,
}) {
  const Ui = React.useContext(UiContext);
  const responsive = pageDynamics();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const [isDia, setIsDia] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // ----MENU DISPLAY FOR MOBILE VIEW----
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show new notifications" color="inherit">
          <Badge badgeContent={95} color="secondary">
            <NotificationsIcon className={classes.alertIcon} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    // ----END MOBILE MENU DISPLAY----
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          backgroundColor: bg || Appbar.appbarBg,
          padding: 10,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <div className={responsive.mobileOnly}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
              style={{ backgroundColor: "#f8f8f8" }}
              onClick={() => {
                Ui.uiDispatch("openMobileMenu");
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          {showBrand ? (
            <div className={classes.brand + " " + classes.sectionDesktop}>
              <img
                src={brandLogo}
                alt={
                  <Typography
                    style={{
                      ...fonts.heading4,
                      textTransform: "uppercase",
                      color: colors.dark3,
                    }}
                    className={responsive.desktopOnly}
                  >
                    Remoto
                  </Typography>
                }
              />
            </div>
          ) : (
            ""
          )}
          <div className={classes.search + " " + responsive.desktopOnly}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={responsive.desktopOnly}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge
                badgeContent={17}
                color="secondary"
                style={Appbar.desktopNotificationIcon}
              >
                <NotificationsIcon className={classes.alertIcon} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              // color="inherit"
              style={Appbar.desktopNotificationIcon}
            >
              <Avatar src={profilePicture} alt={<AccountCircle />} />
            </IconButton>
          </div>
          {callToAction ? (
            <div style={{ margin: "auto 20px" }}>
              <CallToAction
                onClick={() => {
                  Ui.uiDispatch("showCreateOrderDialog");
                }}
              >
                fix my car
              </CallToAction>
            </div>
          ) : (
            ""
          )}
          {dataUpdate ? (
            <div>
              <Link exact to="/admin/updateData">
                <IconButton>
                  <FolderOpenOutlinedIcon />
                </IconButton>
              </Link>
            </div>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
      {/* <CreateOrderDialog dialogOpened={isDia} /> */}
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
