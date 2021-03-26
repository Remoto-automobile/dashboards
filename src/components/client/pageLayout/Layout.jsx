import React from "react";
import { Grid, Appbar } from "@material-ui/core";

function Layout() {
  return (
    <div>
      <AppBar position="static">
        <div></div>
      </AppBar>
    </div>
  );
}

const styles = {
  searchDiv: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
  },
};

export default Layout;
