import { makeStyles } from "@material-ui/core/styles";

export const pageDynamics = makeStyles((theme) => ({
  desktopOnly: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  mobileOnly: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const navigation = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
// export const responsive = windowSize();

let fontFamily = "Asap";
export const fonts = {
  mainHeader: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: 62,
  },
  pageHeader: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: 52,
  },
  heading2: {
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: 36,
  },
  heading3: {
    fontFamily: fontFamily,
    fontWeight: 600,
    fontSize: 32,
    color: "white",
  },
  heading4: {
    fontFamily: fontFamily,
    fontWeight: 600,
    fontSize: 28,
  },
  heading5: {
    fontFamily: fontFamily,
    fontWeight: 600,
    fontSize: 24,
  },
  heading6: {
    fontFamily: fontFamily,
    fontWeight: 600,
    fontSize: 22,
  },
  heading7: {
    fontFamily: fontFamily,
    fontWeight: 600,
    fontSize: 20,
  },
  mainBodyText: {
    fontFamily: fontFamily,
    fontWeight: 400,
    fontSize: 18,
  },
  bodyText: {
    fontFamily: fontFamily,
    fontWeight: 400,
    fontSize: 16,
  },
};

export const colors = {
  main: "#b51500",
  active: "#06c270",
  header: "#1c1c1c",
  bodyText: "#2f2f2f",
  dark3: "#212240",
  mainBg: "#ffffff",
  footer: "#ededed",
  secondaryBg: "#f8f8f8",
  fade: "#858585",
};

// Appbar styles
export const Appbar = {
  searchBg: "#f5f5f5",
  searchBgHover: "#f2f2f2",
  searchPlaceholder: "#b5b8bb",
  appbarBg: "#ffffff",
  desktopNotificationIcon: {
    color: colors.dark3,
    margin: "auto 10px",
  },
};

export const Appdrawer = {
  drawerWidth: 280,
  desktopDrawer: {
    width: 258,
  },
};

export const Card = {
  spacing: {
    margin: 10,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "left",
    width: "100%",
    paddingLeft: 20,
  },
  bgColor: "#ffffff",
  color: "#2d2c2c",
  avatar: { width: 120, height: 120 },
  orderBullet: {
    display: "flex",
    width: "100%",
  },
};

export const form = {
  field: {
    width: "100%",
    margin: 20,
    textAlign: "center",
  },
};

export function capitalize(data) {
  let lower = data.toLowerCase();
  // let first = data.charAt(0);
  // first = first.toUpperCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
