import React from "react";
import { colors, fonts } from "../../globalStyles";
import { makeStyles, fade } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

function SiderItem({ children, icon }) {
  const compCl = styles();
  return (
    <div className={compCl.container}>
      <Typography
        style={{ ...fonts.mainBodyText, margin: "10px auto", fontWeight: 600 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          {/* <div style={{ marginRight: 10 }}> */}
          {icon}
          {/* </div> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {children}
          </div>
        </div>
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