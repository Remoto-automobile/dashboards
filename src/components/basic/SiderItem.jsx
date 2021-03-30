import React from "react";
import { colors, fonts } from "../../globalStyles";
import { makeStyles, fade } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

function SiderItem({ children, icon }) {
  const compCl = styles();
  return (
    <div className={compCl.container}>
      {icon}
      <Typography
        style={{ ...fonts.mainBodyText, margin: "10px auto", fontWeight: 600 }}
      >
        {children}
      </Typography>
    </div>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    "&:hover": {
      backgroundColor: fade(colors.main, 0.15),
    },
  },
}));

export default SiderItem;
