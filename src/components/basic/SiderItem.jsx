import React from "react";
import { colors, fonts } from "../../globalStyles";
import { makeStyles, fade } from "@material-ui/core/styles";

function SiderItem({ children }) {
  const compCl = styles();
  return (
    <div className={compCl.container}>
      <p style={fonts.heading7}>{children}</p>
    </div>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: "1em",
    "&:hover": {
      backgroundColor: fade(colors.main, 0.15),
    },
  },
}));

export default SiderItem;
